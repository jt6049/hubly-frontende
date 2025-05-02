import React, { useEffect } from "react";
import { useState } from "react";
import { complainer, getMessages, messageToSupport } from "../services";
import { useParams } from "react-router-dom";
import { BiMessageAlt } from "react-icons/bi";
import chaticon from "../assets/Ellipse 5.png";
import "../styles/Support.css";
import { IoIosSend } from "react-icons/io";
const Support = () => {
  const [chatRoom, setChatRoom] = useState(null);
  const [showDiv, setShowDiv] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [messageData, setMessageData] = useState({
    message: "",
  });
  const [messages, setMessages] = useState([]);
  const token = localStorage.getItem("token");
  if (token) {
    const tdisplay = "none";
    // navigate("/category");
  }
  const fetchMessages = async () => {
    const response = await getMessages();
    const data = await response.json();
    console.log(data);

    setChatRoom(response);
    setMessages(data.messages);
  };

  useEffect(() => {
    fetchMessages(); // Fetch data when component mounts
  }, []);
  const registerHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await complainer({ data: formData });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const messageHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await messageToSupport({ data: messageData });

      setMessageData("");
      fetchMessages();
    } catch (error) {
      console.log(error); //   toast.error("Something went wrong..!!");
    }
  };

  return (
    <div>
      <div className="message" onClick={() => setShowDiv(!showDiv)}>
        <BiMessageAlt size="50px" className="message-icon" />
      </div>
      <div
        className="message-body"
        style={{
          display: showDiv ? "block" : "none",
        }}
      >
        <div className="chatheaders">
          <img src={chaticon} alt="chat icon" />
          <span>Hubly</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="user-msg">Hey</div>
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={
                msg.senderModel === "User" ? "support-msg" : "user-msg"
              }
            >
              {msg.message}
            </div>
          ))}
        </div>

        <div
          className="user-info"
          style={{ display: token ? "none" : "block" }}
        >
          <p
            style={{
              margin: "10px 0",
            }}
          >
            {" "}
            Introduce Yourself
          </p>
          <form>
            <label htmlFor="name" style={{ fontSize: "13px" }}>
              {" "}
              Your Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              style={{
                color: "black",
                width: "20vw",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: "1px solid black",
                fontSize: "16px",
                margin: "1vh 0",
              }}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            ></input>
            <br />
            <label htmlFor="name" style={{ fontSize: "13px" }}>
              {" "}
              Your Phone
            </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="+91123456789"
              style={{
                color: "black",
                width: "20vw",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: "1px solid black",
                fontSize: "16px",
                margin: "1vh 0",
              }}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            ></input>
            <br />
            <label htmlFor="name" style={{ fontSize: "13px" }}>
              {" "}
              Your Email
            </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="example@gmail.com"
              style={{
                color: "black",
                width: "20vw",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: "1px solid black",
                fontSize: "16px",
                margin: "1vh 0",
              }}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            ></input>
            <button
              style={{
                height: "5vh",
                width: "10vw",
                borderRadius: "10px",
                backgroundColor: "#184E7F",
                color: "white",
                margin: "0 7vw",
              }}
              onClick={registerHandler}
            >
              Thank you
            </button>
          </form>
        </div>
        <textarea
          name="message"
          id="message"
          placeholder="Write a message"
          style={{
            border: "none",
            fontSize: "17px",
            height: "6vh",
            width: "inherit",
            lineHeight: "6vh",
            position: "fixed",
            bottom: "40px",
          }}
          value={messageData.message}
          onChange={(e) =>
            setMessageData({ ...messageData, message: e.target.value })
          }
        ></textarea>
        <IoIosSend size="25px" className="sendchat" onClick={messageHandler} />
      </div>

      {/* <form>
           <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" style={{
                display:'block',
            }} 
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }/>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" style={{
                display:'block',
            }} value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" style={{
                display:'block',
            }} value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }/>
            <br/>           
            <button type="submit" onClick={registerHandler}>Thank you!</button>
            </form>
            <br/>


            {messages.map((msg) => (
                
          <div key={msg._id} >
            
            <p><strong>From:</strong> {msg.sender.name || msg.sender?.firstName}</p>
            <p><strong>To:</strong> {msg.receiver?.firstName || 'Unassigned'}</p>
            <p style={{color:"black"}}><strong>Text:</strong> {msg.message}</p>
           </div>
        ))}

              
            <textarea name="message" id="message" cols="10" rows="2" value={
                messageData.message
            } onChange={(e)=>setMessageData({...messageData,message:e.target.value})}></textarea>
            <button onClick={messageHandler}>Send</button>  */}
    </div>
  );
};
export default Support;
