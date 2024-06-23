import AppLogo from "../../Notes/app-logo-removebg-preview.png"
import CartLogo from "../../Notes/shopping-cart-logo.png"
import { Link } from "react-router-dom";
import { COMPANY_NAME } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { UseName } from "../Utils/constants";
import { useContext } from "react";


const Heading = () => {
    const online = useOnlineStatus();
    const name = useContext(UseName);
    return(
<div className="header">
    <div className="header-container">
        <div className="app-logo">
            <img src={AppLogo}  width={50} height={50}/>
            <section>
            <h1>{COMPANY_NAME}</h1>
        <small>Taste Eat Repeat</small>
        </section>
        </div>
        
        <div className="nav-links">
            <ul>
                
                <li><Link  to={"/"}>Home</Link></li>
                <li><Link  to={"/contact"}>Contact Us</Link></li>
                <li><Link  to={"/about"}>About Us</Link></li>
                <li><Link  to={"/restaurent"}>Top Restaurents</Link></li>
                <li>{online==true?"ONLINE ✅":" OFFLINE 🔴"}</li>
            </ul>
            
        </div>
        <div className="authentication max-lg:hidden">
            <button>
                Sign In
            </button>
            <button>Login</button>
            <div className="cart">
            <img src={CartLogo} width={30} height={30}/>
            <span>0</span>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Heading;

