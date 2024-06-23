import { Link } from "react-router-dom"
import { FOOD_DATA } from "../Utils/constants"
import { Link } from "react-router-dom"
const Banner = (props)=> {
    const {fooddatas} = props
    return (
        <div className="banner">
            <a href={fooddatas.action.link}><img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+fooddatas.imageId}/></a>
           
        </div>
    )
}

const Varaities = () => {
    return (
        <div className="varaities">
        {
            FOOD_DATA.map((food) => (
                <Link to="/varaity/:varID">
                <Banner key = {food.id} fooddatas = {food } />
                </Link>
            ))
        }
        </div>
    )
}

export default Varaities;