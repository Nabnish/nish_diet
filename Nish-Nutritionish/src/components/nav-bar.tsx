import { useNavigate } from "react-router"
import logo from "../assets/Gemini_Generated_Image_xzxxkixzxxkixzxx-removebg-preview.png"
function Nav() {
    const Navigate=useNavigate();
    return (
        <>
            <img src={logo} alt="logo" width={150}></img>
            <div className="container">
                <h1>NISH-Nutritionish</h1>
                <button onClick={() => Navigate("/client-dashboard")}>Dashboard</button>
                <button onClick={() => Navigate("/client-diet")}>Diet Plan</button>
            </div>
        </>
    )

}
export default Nav