import { useEffect, useState } from "react";
import { getMessages } from "../services";
import "../styles/AllTickets.css";
import { useNavigate } from "react-router-dom";

export default function Unresolved() {
    const navigate=useNavigate();
    const [messages, setMessages] = useState([]);
    const[chatRooms, setChatRooms] = useState([]);
    const token=localStorage.getItem("token");
  const fetchMessages = async () => {
    const response = await getMessages();
    const data=await response.json();
    
    
    setChatRooms(data);    
  };
  const resolvedOnly = chatRooms.filter((room) => room.status === "unresolved");
      console.log(resolvedOnly)
  console.log(chatRooms.length);
  chatRooms.filter((room)=>{
    console.log(room);
  })
  const handleClick=(id)=>{
    navigate("/contactcenter", {
        state: id,
      });
      console.log(id);
  }

  useEffect(() => {
    fetchMessages();     
  }, [token])
  return (
    <>
  
        {
            resolvedOnly.map((room,index)=>
            (
                
                <div key={room._id} style={{
                    width:"88 vw",
                    height:"26vh",
                    border:"1px solid black",
                    marginTop:"20px",
                }}>
                <div className="parent">
            
                <div className="dot"></div>
                <h4> Ticket #{room._id}</h4>
                <p className="posted"> Posted at {new Date(room.complainer.createdAt).toLocaleTimeString('en-GB')}</p>
                
                <div style={{lineHeight:"30px" ,color:"black"}}>
                    <p className="messagell">{room.messages.at(-1).message}</p>
                    <p className="time">10:00</p>
                </div>
                <hr className="line"/>
                <div style={{display:"inline"}}>
                    <p className="details">{room.complainer.name}</p>
                    <p className="details">+{room.complainer.phone}</p>
                    <p className="details">{room.complainer.email}</p>
                </div>
                <p style={{display:"inline", float:"right", position:"relative",bottom:"8vh"}} onClick={()=>{handleClick(index)}}>Open Ticket</p>
            </div>
            </div>
              
            ))
        }






        {/* <div className="parent">
            
            <div className="dot"></div>
            <h4> Ticket #2023 - 00123</h4>
            <p className="posted"> Posted at 09:45 PM</p>
            
            <div style={{lineHeight:"0px" ,color:"black"}}>
                <p className="message">Hey</p>
                <p className="time">10:00</p>
            </div>
            <hr className="line"/>
            <div style={{display:"inline"}}>
                <p className="details">John Snow</p>
                <p className="details">+91123456789</p>
                <p className="details">example@gmail.com</p>
            </div>
            <p style={{display:"inline", float:"right", position:"relative",bottom:"8vh"}}>Open Ticket</p>
        </div> */}

    
    </>
  )

}