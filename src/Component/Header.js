
import Footer  from "./Footer";
import { Outlet } from "react-router-dom";
import Heading from "./Heading";
import { UseName } from "../Utils/constants";

const Header = () => {
    return (
        <UseName.Provider value={{firstName:"Dhivya", lastName:"venkatesan"}} >
        <div>
        <UseName.Provider value={{firstName:"Dhinesh Kumar", lastName:"Sankar"}} >
            <Heading />
            </UseName.Provider>
            <Outlet />
            <Footer />
        </div>
        </UseName.Provider>
    )
}
export default Header;