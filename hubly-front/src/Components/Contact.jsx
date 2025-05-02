import { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import { getMessages, getMessagesone } from "../services";
import "../styles/ContactCenter.css"
import { GoHome } from "react-icons/go";


export default function Contact() {
console.log("contact center");

const [activel, setActivel] = useState(0);
const[chatRooms, setChatRooms] = useState([]);
const token=localStorage.getItem("token");
const fetchMessages = async () => {
const response = await getMessagesone(token);
const data=await response.json();
console.log(data);
setChatRooms(data);    
};
console.log(chatRooms.length);
chatRooms.map((room)=>{
console.log(room);
})

useEffect(() => {
fetchMessages();     
}, [])


const handleClick=(index)=>{
    setActivel(index);
}
useEffect(() => {
    handleClick(0);
}, [])
 

    return (       

        <div  style={{margin:"0 0 0 1.5vw",color:"#6A6B70", width:"100%",display:"flex"}}>
          <div className="firstpart">                        
          <h3 style={{
          fontWeight:"400",
          
         }}> Contact Center</h3>


         <p className="chattopic">   Chats</p>
         <hr style={{lineHeight:"10vh",margin:"0px "}}/>
         {chatRooms.map((room,index)=>(
            
             <div key={index} className="chats">
             <div className={activel===index?"selectedchat":""}  onClick={()=>handleClick(index)}>
             <h5 className="chatheader">Chat {index+1}</h5>
             <p className="msg">{room.messages.at(-1).message} </p>
             </div>
             </div>

         ))}    
          
        
         
         </div>
         

         
         <div className="secondpart">
            <div className="heading">
                <h4 className="chatheading">Ticket #{chatRooms[activel]._id}</h4>
                <GoHome size="25px" style={{
                    float:"right",
                    margin:"0.6vh 1vw"
                }} />
                 <div style={{
                    position:"absolute",
                    bottom:"20vh"
                 }}>
                    {chatRooms[activel].messages.map((msg)=>(
                        <>  
                        <h5 className="chatheader">Chat {activel+1}</h5>
                        <p className="msg"> msg</p>
                        </>
                    ))}
            <h5 className="chatheader">Chat {activel+1}</h5>
            <p className="msg"> Ask me anything!</p>
            </div>
            <textarea type="text" placeholder="Type here" className="msginput" />

            </div>
         </div>
         

         <div className="thirdpart">
            <h5 className="chatheader" style={{color:"black"}}>Chat</h5>
            <h5 className="chatheader" style={{margin:"5vh 0 0 1vw"}}>Details</h5>
            <div className="details">
                <div className="detail">{chatRooms[activel].complainer.name}</div>
                <div className="detail">+{chatRooms[activel].complainer.phone}</div>
                <div className="detail">{chatRooms[activel].complainer.email}</div>
            </div>
            <h5 className="chatheader" style={{margin:"5vh 0 0 1vw"}}>Teammates</h5>
            <div className="details">
                <div className="detail">John Doe</div>
                <div className="detail">Ticket STatus</div>
            
            </div>
         </div> 
        
        </div>
      
       
    );

}