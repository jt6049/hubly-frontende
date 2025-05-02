import { useEffect, useState } from "react";
import { getMessages } from "../services";
import Sidebar from "../Components/Sidebar";
import { FiSearch } from "react-icons/fi";
import "../styles/dashboard.css";
import AllTickets from "../Components/AllTickets";
import Resolved from "../Components/Resolved";
import Unresolved from "../Components/Unresolved";

export default function Dashboard() {
  const topics = ["All Tickets", "Resolved", "Unresolved"];
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    console.log(index);

    setActive(index);
  };

  return (
    <div style={{ margin: "2.5%", color: "#6A6B70", width: "70vw" }}>
      <h3
        style={{
          fontWeight: "400",
        }}
      >
        {" "}
        Dashboard
      </h3>

      <input
        type="text"
        placeholder="Search for ticket"
        style={{
          height: "40px",
          width: "20%",
          color: "#B6B6B6",
          border: "2px solid #E7E7E7",
          marginTop: "3%",
          padding: "5px 10px",
          borderRadius: "5px",
        }}
      />

      <div
        style={{
          height: "55px",
          width: "60vw",
          lineHeight: "70px",
          marginTop: "6vh",
        }}
      >
        {topics.map((text, index) => (
          <div
            key={index}
            style={
              active === index
                ? {
                    display: "inline",

                    color: "#184E7F",
                    borderBottom: "3px solid #184E7F  ",
                    paddingBottom: "10px",
                  }
                : {
                    display: "inline",
                    border: "none",
                  }
            }
            onClick={() => handleClick(index)}
          >
            <p
              style={{
                display: "inline",
                padding: "10px",
                textAlign: "center",
              }}
            >
              {" "}
              {text}
            </p>
          </div>
        ))}
      </div>
      <hr
        style={{
          margin: " 0px ",
        }}
      />

      {active === 0 && <AllTickets />}

      {active === 1 && <Resolved />}
      {active === 2 && <Unresolved />}
    </div>
  );
}
