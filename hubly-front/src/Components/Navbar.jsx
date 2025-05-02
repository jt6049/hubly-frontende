import { useNavigate } from "react-router-dom";
import hubly from "../assets/Vector.png";
import "../styles/Navbar.css";

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <div className="navbar"> 
        <img src={hubly} style={{margin:"2vh 1vw 1vh 5vw"}}alt="Hubly" />
        <span className="title">Hubly</span>
        <span className="signup" onClick={()=>navigate("/register")}>Sign up</span>
        <span className="login" onClick={()=>navigate("/login")}>Login</span>

    </div>  
  )

}