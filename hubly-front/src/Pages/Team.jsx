import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Sidebar from "../Components/Sidebar";
import { addMember, getMembers } from "../services";

export default function Team() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [member, setMember] = useState([]);
  const token = localStorage.getItem("token");
  console.log(token);
  const fetchMembers = async () => {
    try {
      const response = await getMembers();
      const data = await response.json();
      console.log("Data:", data);
      setMember(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };
  useEffect(() => {
    fetchMembers();
  }, []);
  member.map((item) => {
    console.log(item);
  });

  const addHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(formData);
      const response = await addMember({ data: formData });
      if (response.ok) {
        fetchMembers();
        console.log(response);
        toast.success("Added Successfully");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    }
  };

  return (
    <div>
      <h3 style={{ fontWeight: "400", margin: "4vh 1vw" }}> Team</h3>
      <div
        style={{
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
          height: "7vh",
          width: "94vw",
          display: "flex",
          marginTop: "10vh",
          justifyContent: "space-around",

          lineHeight: "6.5vh",
        }}
      >
        <p
          style={{
            marginLeft: "7vw",
            width: "15vw",
          }}
        >
          First Name
        </p>
        <p style={{ width: "15vw" }}>Last Name</p>
        <p style={{ width: "15vw" }}>Email</p>
        <p
          style={{
            marginRight: "15vw",
            width: "20vw",
          }}
        >
          Role
        </p>
      </div>
      {member.map((item) => (
        <div
          key={item._id}
          style={{
            borderBottom: "1px solid black",
            height: "7vh",
            width: "94vw",

            display: "flex",
            justifyContent: "space-around",

            lineHeight: "6.5vh",
          }}
        >
          <p
            style={{
              marginLeft: "7vw",
              width: "15vw",
            }}
          >
            {item.firstName}
          </p>
          <p
            style={{
              width: "15vw",
            }}
          >
            {item.lastName}
          </p>
          <p
            style={{
              width: "15vw",
            }}
          >
            {item.email}
          </p>
          <p
            style={{
              marginRight: "15vw",
              width: "20vw",
            }}
          >
            {item.role}
          </p>
        </div>
      ))}

      <div
        style={{
          width: "40vw",
          height: "58vh",
          backgroundColor: "white",
          position: "absolute",
          top: "25vh",
          left: "27vw",
          boxShadow: "0 0 12px grey",
          borderRadius: "20px",
          padding: "2vh 2vw",
          display: showForm ? "block" : "none",
        }}
      >
        <h1
          style={{
            fontWeight: "100",
            margin: "2vh 0px",
          }}
        >
          Add Team members
        </h1>
        <p
          style={{
            fontSize: "13px",
            margin: "2vh 0px",
          }}
        >
          Talk with colleagues in a group chat. Messages in this group are only
          visible to it's participants. New teammates may only be invited by the
          administrators.
        </p>

        <form>
          <label
            htmlFor="userName"
            style={{
              display: "inline-block",
              marginLeft: "10px",
              textAlign: "start",
              width: "30vw",
            }}
          >
            {" "}
            Username{" "}
          </label>
          <br />
          <input
            type="text"
            name="userName"
            style={{
              width: "39vw",
              height: "4vh",
              backgroundColor: "white",
              border: "1px solid #828282 ",
              borderRadius: "8px",
              color: "black",
              margin: "1vh 0px 1vh 0px",
              padding: "4px",
            }}
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />

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
            type="email"
            name="email"
            style={{
              width: "39vw",
              height: "4vh",
              backgroundColor: "white",
              border: "1px solid #828282 ",

              borderRadius: "8px",
              color: "black",
              margin: "1vh 0px 1vh 0px",
              padding: "4px",
            }}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <label
            htmlFor="designation"
            style={{
              display: "inline-block",
              marginLeft: "10px",
              textAlign: "start",
              width: "30vw",
            }}
          >
            {" "}
            Designation{" "}
          </label>
          <br />
          <select
            name="designation"
            style={{
              width: "39vw",
              height: "5.3vh",
              backgroundColor: "white",
              border: "1px solid #828282",
              borderRadius: "8px",
              color: "black",
              margin: "1vh 0px 1vh 0px",
              padding: "4px",
            }}
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="">Select Designation</option>
            <option value="member">Member</option>
            <option value="admin">Admin</option>
          </select>

          <button
            style={{
              width: "10vw",
              height: "5vh",
              color: "#FAFBFC",
              backgroundColor: "#184E7F",
              border: "1px solid #828282",
              borderRadius: "12px",
              float: "right",
              marginLeft: "10px",
            }}
            onClick={addHandler}
          >
            Save
          </button>
          <button
            style={{
              width: "10vw",
              height: "5vh",
              color: "grey",
              backgroundColor: "#F6F8FA",
              border: "1px solid #828282",
              borderRadius: "12px",
              float: "right",
            }}
            onClick={() => setShowForm(!showForm)}
          >
            Cancel
          </button>
        </form>
      </div>
      <button
        style={{
          width: "10vw",
          height: "5vh",
          collor: "#FAFBFC",
          float: "right",
          margin: "2vh 3vw",
          borderRadius: "12px",
          color: "#FAFBFC",
          backgroundColor: "#184E7F",
        }}
        onClick={() => setShowForm(!showForm)}
      >
        {" "}
        Add Team Members
      </button>
    </div>
  );
}
