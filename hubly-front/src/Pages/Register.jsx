import react from "react";
import { register } from "../services/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import frame from "../assets/Frame.png";
import { toast } from "react-toastify";
export default function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const registerHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const response = await register({ data: formData });
      if (response.ok) {
        toast.success("Account creadited Successfully");
        navigate("/login");
      } else {
        console.log(error);
       toast.error("Something got wrong");
      }
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..!!");
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
          height: "100vh",
          width: "70vw",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              width: "30vw",
              height: "5vh",
            }}
          >
            {" "}
            Create an Account{" "}
          </h1>
        </div>
        <form
          style={{
            textAlign: "center",
            width: "70vw",
            height: "80vh",
            alignItems: "center",
          }}
        >
          <label
            htmlFor="firstName"
            style={{
              display: "inline-block",
              marginLeft: "10px",
              textAlign: "start",
              width: "30vw",
            }}
          >
            {" "}
            First Name{" "}
          </label>
          <br />
          <input
            type="text"
            name="firstName"
            style={{
              width: "30vw",
              height: "5vh",
              backgroundColor: "white",
              border: "1px solid #828282 ",

              borderRadius: "8px",
              color: "black",
              margin: "0px 0px 10px 0px",
              padding: "4px",
            }}
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <br />
          <label
            htmlFor="lastName"
            style={{
              display: "inline-block",
              marginLeft: "10px",
              textAlign: "start",
              width: "30vw",
            }}
          >
            {" "}
            Last Name{" "}
          </label>
          <br />
          <input
            type="text"
            name="lastName"
            style={{
              width: "30vw",
              height: "5vh",
              backgroundColor: "white",
              border: "1px solid #828282 ",

              borderRadius: "8px",
              color: "black",
              margin: "0px 0px 10px 10px",
              padding: "4px",
            }}
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          <br />
          <label
            htmlFor="email"
            style={{
              display: "inline-block",
              marginLeft: "10px",
              textAlign: "start",
              width: "30vw",
            }}
          >
            {" "}
            Email{" "}
          </label>
          <br />
          <input
            type="text"
            name="email"
            style={{
              width: "30vw",
              height: "5vh",
              backgroundColor: "white",
              border: "1px solid #828282 ",

              borderRadius: "8px",
              color: "black",
              margin: "0px 0px 10px 10px",
              padding: "4px",
            }}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <br />
          <label
            htmlFor="password"
            style={{
              display: "inline-block",
              marginLeft: "10px",
              textAlign: "start",
              width: "30vw",
            }}
          >
            {" "}
            Password{" "}
          </label>
          <br />
          <input
            type="password"
            name="password"
            style={{
              width: "30vw",
              height: "5vh",
              backgroundColor: "white",
              border: "1px solid #828282 ",

              borderRadius: "8px",
              color: "black",
              margin: "0px 0px 10px 10px",
              padding: "4px",
            }}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <br />
          <label
            htmlFor="confirmPassword"
            style={{
              display: "inline-block",
              marginLeft: "10px",
              textAlign: "start",
              width: "30vw",
            }}
          >
            {" "}
            Confirm Password{" "}
          </label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            style={{
              width: "30vw",
              height: "5vh",
              backgroundColor: "white",
              border: "1px solid #828282 ",

              borderRadius: "8px",
              color: "black",
              margin: "0px 0px 10px 10px",
              padding: "4px",
            }}
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          <br />
          <input
            type="checkbox"
            name="terms"
            id="terms"
            style={{
              display: "inline",
              color: "#525252",
              marginLeft: "10px",
            }}
          />
          <label
            htmlFor="terms"
            style={{
              display: "inline-block",
              marginLeft: "10px",
              textAlign: "start",
              width: "30vw",
            }}
          >
            {" "}
            By creating an account, I agree to our Terms of use and Privacy
            Policy
          </label>
          <br />
          <button
            style={{
              width: "31.5vw",
              height: "6vh",
              backgroundColor: "#BFBFBF",
              border: "0px solid #EFFOEC",
              color: "white",
              borderRadius: "100px",
              borderStyle: "none",

              marginTop: "20px",
              padding: "4px",
            }}
            onClick={registerHandler}
          >
            {" "}
            {isLoading ? "Creating" : "Create an Account"}
          </button>
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
