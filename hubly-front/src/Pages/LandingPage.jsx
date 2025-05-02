import Navbar from "../Components/Navbar";
import "../styles/LandingPage.css"
export default function LandingPage() {
  return (
    <div>
        <Navbar/>
      <h1 className="heading">GROW TOUR BUSINESS FASTER WITH HUBLY CRM</h1>
      <p className="para">Manage leads, automate workflows, and close deals effortlessly—all in one powerful platform.</p>
      <div className="getstarted">Get Started</div>
    </div>
  )
}