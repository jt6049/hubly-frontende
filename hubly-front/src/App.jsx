import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login"; 
import Register from "./Pages/Register";
import Support from "./Pages/Support";
import Dashboard from "./Pages/Dashboard";
import ContactCenter from "./Pages/ContactCenter";
import Analytics from "./Pages/Analytics";
import ChatBot from "./Pages/ChatBot";
import Team from "./Pages/Team";
import Settings from "./Pages/Settings";
import Sidebar from "./Components/Sidebar";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/support" element={<Support />} />
        <Route path="/" element={<LandingPage />} />

      
        <Route
          path="/*"
          element={
            <div style={{ display: "flex", margin: "0px" }}>
              <Sidebar />
              <div style={{ width: "100%" }}>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="contactcenter" element={<ContactCenter />} />
                  <Route path="analytics" element={<Analytics />} />
                  <Route path="chatbot" element={<ChatBot />} />
                  <Route path="team" element={<Team />} />
                  <Route path="settings" element={<Settings />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
