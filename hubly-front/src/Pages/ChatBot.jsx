import Sidebar from "../Components/Sidebar";
import "../styles/ChatBot.css"
import chaticon from "../assets/Ellipse 5.png";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";

export default function ChatBot() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(0);

    const getTimeOptions = (type, currentValue) => {
        const max = type === "hours" ? 12 : 59;
        const prev = (currentValue - 1 + max + 1) % (max + 1);
        const next = (currentValue + 1) % (max + 1);
    
        return [
          String(prev).padStart(2, "0"),
          String(currentValue).padStart(2, "0"),
          String(next).padStart(2, "0")
        ];
      };
      const handleSave = () => {
        const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        alert(`Selected time: ${formattedTime}`);
      };

      const renderColumn = (type, value, setValue) => {
        const options = getTimeOptions(type, value);
        return (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", margin: "0" }}>
            <span style={{ color: "#6A6B70", fontSize:"20px",width:"5vw"}}>{options[0]}</span>
            <span style={{ backgroundColor: "#EDF4F5", padding: "5px 10px", borderRadius: "4px", fontWeight: "bold",fontSize:"20px",width:"5vw"}}>{options[1]}</span>
            <span style={{ color: "#6A6B70",fontSize:"20px",width:"5vw" }}>{options[2]}</span>
            <input
              type="range"
              min="0"
              max={type === "hours" ? 12 : 59}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer" }}
            />
          </div>
        );
      };
    
   

      

  return (
    <div  style={{margin:"0 0 0 1.5vw",color:"#6A6B70", width:"100%",   }}>
        
        <h3 style={{
          fontWeight:"400",
          
         }}> Chat Bot</h3>
         <div style={{display:"flex"}}>
            <div className="leftpart">
                <div className="template">
                    <div className="chatHeader">
                        <img src={chaticon} alt="chat icon" />
                        <p>Hubly</p>
                    </div>
                    <div className="chatBody">
                        <img src={chaticon} alt="chat icon" />
                        <div className="chatmsg">
                            <p>How can i help you?
                            </p>
                        </div>
                        <div className="chatmsg" style={{
                            marginTop:"10px",
                        }}>
                            <p>Ask me anything
                            </p>
                        </div>
                        
                        <div className="custommsg">
                            < p className="intro">Introduction yourself
                            </p>
                            <p className="labels">Your name</p>
                            <p className="input">Your name</p>
                            <p className="labels">Your phone</p>
                            <p className="input">Your +91123456789</p>
                            <p className="labels">Your email</p>
                            <p className="input">example@gmail.com</p>
                           <p className="thankyou">Thank you</p>
                           
                            
                        </div>
                        <textarea type="text" placeholder="Write a message" className="msginput" />
                        <button style={{
                            position: "absolute",
                            width:"2vw",
                            height:"3vh",
                             backgroundColor:"transparent",
                             border:"none",
                            bottom:"9vh",
                            left:"53vw",

                        }} >
                        
                        </button>
                        <IoIosSend size="25px" className="sendbtnbot" />
                        </div>
                </div>
                <div className="edittext" style={{height:"15vh",lineHeight:"5vh",width:"20vw", margin:"15vh auto",backgroundColor:"white", boxShadow:"0 0 10px grey", paddingTop:"5vh"}}>👋 Want to chat about Hubly? I'm an chatbot here to help you find your way.</div>
               <img src={chaticon} alt="chat icon" style={{
                position:"absolute",
                top:"94vh",
                left:"35.5vw",
                width:"4vw",
                height:"7vh",
               }}/>
            </div>
            <div className="rightpart">
                <div className="headercolor" style={{marginTop:"0",}}>
                    <p>Header Color</p>
                    <div className="coloroption" style={{backgroundColor:"white"}}></div>
                    <div className="coloroption" style={{backgroundColor:"black"}} ></div>
                    <div className="coloroption" style={{backgroundColor:"#33475B"}}></div><br/>
                    <div className="chosencolor" style={{backgroundColor:"#33475B"}}></div>
                    <div className="chosencolortext">#33475B</div>

                </div>
                <div className="headercolor">
                    <p>Custom Background color</p>
                    <div className="coloroption" style={{backgroundColor:"white"}}></div>
                    <div className="coloroption" style={{backgroundColor:"black"}} ></div>
                    <div className="coloroption" style={{backgroundColor:"#33475B"}}></div><br/>
                    <div className="chosencolor" style={{backgroundColor:"#33475B"}}></div>
                    <div className="chosencolortext">#33475B</div>

                </div>
                <div className="headercolor">
                    <p>Customize messages</p>
                    
                    <div className="edittext">How can I help you?</div>
                    <div className="edittext">Ask me anything!</div>

                </div>
                <div className="headercolor" style={{height:"40vh"}}>
                
                           <p> Introduce Yourself</p>
                           <form>
                            <label htmlFor="name" style={{fontSize:"13px"}}> Your Name</label><br/>
                            <input type="text" name="name" placeholder="Your name" style={{
                                color:"black",
                                width:"20vw",
                                borderTop:"none",
                                borderLeft:"none",
                                borderRight:"none",
                                borderBottom:"1px solid black",
                                fontSize:"16px",
                                margin:"1vh 0",
                            }}></input><br/>
                             <label htmlFor="name" style={{fontSize:"13px"}}> Your Phone</label><br/>
                            <input type="text" name="name" placeholder="+91123456789" style={{
                                color:"black",
                                width:"20vw",
                                borderTop:"none",
                                borderLeft:"none",
                                borderRight:"none",
                                borderBottom:"1px solid black",
                                fontSize:"16px",
                                margin:"1vh 0",
                            }}></input><br/>
                             <label htmlFor="name" style={{fontSize:"13px"}}> Your Email</label><br/>
                            <input type="text" name="name" placeholder="example@gmail.com" style={{
                                color:"black",
                                width:"20vw",
                                borderTop:"none",
                                borderLeft:"none",
                                borderRight:"none",
                                borderBottom:"1px solid black",
                                fontSize:"16px",
                                margin:"1vh 0",
                            }}></input>
                            <button style={{
                                height:"5vh",
                                width:"10vw",
                                borderRadius:"10px",
                                backgroundColor: "#184E7F",
                                color:"white",
                                margin:"0 7vw",
                            }}>Thank you</button>
                           </form>                       
                        </div>
                        <div className="headercolor">
                            <p>Welcome message</p>

                            <div className="edittext" style={{height:"15vh",lineHeight:"5vh",width:"25vw"}}>👋 Want to chat about Hubly? I'm an chatbot here to help you find your way.</div>
                            </div>

                            <div className="headercolor" style={{
                                height:"28vh",
                            }}>
                            <p style={{
                                margin:"1vh 0 3vh 0",
                            }}>Missed time chat</p>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
                            {renderColumn("hours", hours, setHours)}
                            <div style={{ backgroundColor: "#EDF4F5", height:"4.8vh",width:"1vw",lineHeight:"5vh" }}>:</div>
                            {renderColumn("minutes", minutes, setMinutes)}
                            <div style={{ backgroundColor: "#EDF4F5", height:"4.8vh",width:"1vw",lineHeight:"5vh" }}>:</div>
                            {renderColumn("seconds", seconds, setSeconds)}
                            </div>
                            <button  onClick={handleSave} style={{
                                width:"10vw",
                                height:"5vh",
                                color:"#FAFBFC",
                                backgroundColor:"#184E7F",
                                border:"1px solid #828282",
                                borderRadius:"12px",
                                float:"right",
                                marginLeft:"10px",
                            }}>Save</button>

                               
                            </div>

            </div>
         </div>
    </div>
  );
}