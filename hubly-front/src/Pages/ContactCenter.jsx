import { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import {
  assignChat,
  getMembers,
  getMessages,
  messageToUser,
  sendMessage,
  updateChatStatus,
} from "../services";
import "../styles/ContactCenter.css";
import { GoHome } from "react-icons/go";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { VscSend } from "react-icons/vsc";

export default function ContactCenter() {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  const [showDiv, setShowDiv] = useState(false);
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  const [activel, setActivel] = useState(state ? state : 0);
  console.log(activel);
  const [chatRooms, setChatRooms] = useState([]);
  const [member, setMember] = useState([]);
  const [memberDiv, setMemberDiv] = useState(false);

  const token = localStorage.getItem("token");
  console.log(token);
  const fetchMembers = async () => {
    try {
      const response = await getMembers();
      const data = await response.json();
      console.log("MemberData:", data);
      setMember(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };
  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await getMessages(); // Fetch the data
      const data = await response.json();
      console.log("MsgData:", data);
      setChatRooms(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages(); // Fetch data when component mounts
  }, []);

  // Handle chat room selection
  const handleClick = (index) => {
    setActivel(index);
  };
  const [messageData, setMessageData] = useState({
    message: "",
  });

  const sendMsgHandler = async (e) => {
    try {
      e.preventDefault();

      const response = await sendMessage(
        { data: messageData },
        chatRooms[activel]._id
      );
      console.log(response);
      setMessageData("");
      fetchMessages();
    } catch (error) {
      console.log(error); //   toast.error("Something went wrong..!!");
    }
  };

  console.log(status);
  const statusHandler = async () => {
    try {
      const response = await updateChatStatus(chatRooms[activel]._id, status);
      console.log(response);
      setShowDiv(false);
    } catch (error) {
      console.log(error);
    }
  };

  const assignHandler = async (id) => {
    try {
      const response = await assignChat(chatRooms[activel]._id, id);
      console.log(response);
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        margin: "2vh 0 0 1.5vw",
        color: "#6A6B70",
        width: "100%",
        display: "flex",
      }}
    >
      <div className="firstpart">
        <h3 style={{ fontWeight: "400" }}> Contact Center</h3>
        <p className="chattopic"> Chats</p>
        <hr style={{ lineHeight: "10vh", margin: "0px" }} />
        {chatRooms.map((room, index) => (
          <div key={room._id} className="chats">
            <div
              className={activel === index ? "selectedchat" : ""}
              onClick={() => handleClick(index)}
            >
              <h5 className="chatheader">Chat {index + 1}</h5>
              <p className="msg">
                {room.messages?.at(-1)?.message || "No messages yet"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {chatRooms.length > 0 && (
        <div key={chatRooms[activel]._id} className="secondpart">
          <div className="headingll">
            <h4 className="chatheading">Ticket #{chatRooms[activel]._id}</h4>
            <GoHome
              size="25px"
              style={{
                float: "right",
                margin: "0.6vh 1vw ",
                position: "fixed",
                top: "5px",
                right: "480px",
              }}
            />
            {chatRooms[activel].status === "resolved" ? (
              <p
                style={{
                  height: "70vh",
                  overflowY: "auto",
                  padding: "10px",
                  marginTop: "50px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                the chat is closed
              </p>
            ) : (
              <div>
                <div
                  style={{
                    height: "70vh",
                    overflowY: "auto",
                    padding: "10px",
                    marginTop: "50px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  {chatRooms[activel].messages.map((msg, index) => (
                    <div key={index}>
                      <h5 className="chatheader">
                        {msg.senderModel === "User"
                          ? "You"
                          : `Chat ${activel + 1}`}
                      </h5>
                      <p className="msg">{msg.message}</p>
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="sendinput"
                  value={messageData.message}
                  onChange={(e) =>
                    setMessageData({ ...messageData, message: e.target.value })
                  }
                />
                <button onClick={sendMsgHandler}>
                  <VscSend size="20px" className="sendbtn" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {chatRooms.length > 0 && (
        <div className="thirdpart">
          <h5 className="chatheader" style={{ color: "black" }}>
            Chat
          </h5>
          <h5 className="chatheader" style={{ margin: "5vh 0 0 1vw" }}>
            Details
          </h5>
          <div className="details">
            <div className="detail">{chatRooms[activel].complainer.name}</div>
            <div className="detail">+{chatRooms[activel].complainer.phone}</div>
            <div className="detail">{chatRooms[activel].complainer.email}</div>
          </div>
          <h5 className="chatheader" style={{ margin: "5vh 0 0 1vw" }}>
            Teammates
          </h5>
          <div className="details">
            {member.map((item) => (
              <div key={item._id}>
                <div
                  className="detail"
                  onClick={() => {
                    setMemberDiv(!memberDiv);
                  }}
                >
                  {item.firstName} {item.lastName}
                </div>

                <div
                  style={{
                    display: memberDiv ? "block" : "none",
                    height: "15vh",
                    width: "26vw",
                    boxShadow: "0 0 10px grey",
                    borderRadius: "15px",
                    padding: "1vh 1vw",
                  }}
                >
                  <p
                    style={{
                      margin: "2vh 0 0 1vw",
                    }}
                  >
                    Chat will be assigned to this member
                  </p>
                  <button
                    style={{
                      width: "10vw",
                      height: "5vh",
                      borderRadius: "10px",
                      backgroundColor: "#184E7F",
                      margin: "5vh 0 0 1vw",
                      color: "white",
                      float: "right",
                    }}
                    onClick={() => assignHandler(item._id)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            ))}

            <select
              className="detail"
              style={{
                width: "26vw",
                height: "4vh",
              }}
              placeholder={chatRooms[activel].status}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              onClick={() => setShowDiv(!showDiv)}
            >
              <option value="unresolved">Unresolved</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
          <div
            style={{
              display: showDiv ? "block" : "none",
              height: "15vh",
              width: "26vw",
              boxShadow: "0 0 10px grey",
              borderRadius: "15px",
              padding: "1vh 1vw",
            }}
          >
            <p
              style={{
                margin: "2vh 0 0 1vw",
              }}
            >
              Chat will be closed
            </p>
            <button
              style={{
                width: "10vw",
                height: "5vh",
                borderRadius: "10px",
                backgroundColor: "#184E7F",
                margin: "5vh 0 0 1vw",
                color: "white",
                float: "right",
              }}
              onClick={statusHandler}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
