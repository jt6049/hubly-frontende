import react from "react";
import { login } from "../services";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import frame from "../assets/frame.png";
import { toast } from "react-toastify";
export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const token = localStorage.getItem("token");
  if (token) {
    console.log("token found");
    // navigate("/category");
  }
  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const response = await login({ data: formData });
      if (response.ok) {
        toast.success("Login Successful");
        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Somethinf went wrong");
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          width: "60vw",
        }}
      >
        <div
          style={{
            marginBottom: "50px",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              width: "40vw",
              height: "5vh",
            }}
          >
            {" "}
            Sign In{" "}
          </h1>
        </div>
        <form>
          <input
            type="text"
            placeholder="Username"
            style={{
              width: "40vw",
              height: "5vh",
              backgroundColor: "#E8E8E8",
              border: "0px none #EFFOEC",
              borderRadius: "5px",
              borderStyle: "none",
              color: "white",
              padding: "4px",
            }}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <br />

          <input
            type="password"
            placeholder="password"
            style={{
              width: "40vw",
              height: "5vh",
              backgroundColor: "#E8E8E8",
              border: "0px solid #EFFOEC",
              color: "#EFFOEC",
              borderRadius: "5px",
              borderStyle: "none",

              marginTop: "10px",
              padding: "4px",
            }}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <br />

          <button
            style={{
              width: "40.5vw",
              height: "6vh",
              backgroundColor: "#E8E8E8",
              border: "0px solid #EFFOEC",
              color: "#EFFOEC",
              borderRadius: "100px",
              borderStyle: "none",

              marginTop: "60px",
              padding: "4px",
            }}
            onClick={loginHandler}
          >
            {" "}
            Log in
          </button>
          <br />
          <p
            style={{
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            {" "}
            Don't have an account?{" "}
            <span
              style={{
                textDecorationLine: "underline",
                color: "blue",
              }}
            >
              {" "}
              {isLoading ? "Creating" : "Create an Account"}
            </span>
          </p>
        </form>
      </div>
      <div
        style={{
          height: "100vh",
          width: "40vw",
          
        }}
      ><img src={frame}  style={{
        height: "100vh",
        width: "40vw",
        
      }}></img></div>
    </div>
  );
}
