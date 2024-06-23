import logo from "../../Notes/th-removebg-preview.png"
import { RestRESTO_BARS } from "../Utils/constants"
import { useState, useEffect } from "react"
import ShimmerUI from "./ShimmerUI"
import NoResults from "./NoResults"
import { Link } from "react-router-dom"



export const TopRestaurent = () => {
  const [ details, setDetails] = useState([]);
  const [resDetails, setResDetails] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fectch = async () => {
   
    setDetails(RestRESTO_BARS);
  
    setResDetails(RestRESTO_BARS)
    }
useEffect(() => {fectch()}, []);

// if(resDetails.length ===0){
//   return <ShimmerUI />
// }
if(details.length ==0){
  return <ShimmerUI />
}


    return (
        <div className="top-resto">
          <div className="restaurent"> 
            <button className="top-res" onClick={() => {
            const res = details.filter((restaurent)=> restaurent.info.avgRating>4.3)
            setResDetails(res);}
            }> Top Restaurent </button>

          <h2 className="head-sub-heading" title="Click to see all restaurent" onClick={()=>{
             setResDetails(details);
          }}>All Restaurent</h2>

          <button className="veg-res" onClick={() => {
            console.log("This the veg restaurent")
            const res = details.filter((restaurent)=> restaurent.info.veg==true)
            setResDetails(res);
          }}>Veg Restaurent</button>
          </div>
          <div className="search-container">
          <input type="text" onChange={(e)=>{setSearchText(e.target.value)}} value={searchText}/><button className="search" onClick={
            ()=>{let resList =details.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
              
              setResDetails(resList);
              
            }
            }>Search</button>
          </div>
        <div className="rest-container">
        {resDetails.length === 0 ? <NoResults search={searchText} /> :
          resDetails.map((restaurant) => {
            console.log("Rendering restaurant:", restaurant);
            return (
              <Resto key={restaurant.info.id} name={restaurant} />
            );
          })
        } 
        </div>
        </div>
    )
}

const Resto = (props) => {
    const {name} = props
    return(
<div className="resto">
  <Link to={"/restaurent/"+ name.info.id}>
<img className="image-restro" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ name.info.cloudinaryImageId} />
<div className="card-details">
<h4>
   {name.info.name}
</h4>
<p className="cuisines">{name.info.cuisines.join(",")}</p>
<div className="cost"><p className="cost-price">Price: {name.info.costForTwo}</p>
<div className="cost-rating"><span>{name.info.avgRating}</span> <img  className="rating-logo" src={logo} width={15} height={15}/> </div>


</div>
<p className="locality">{name.info.locality}</p>

<button className="add">ADD</button>
</div>
</Link>
</div>
    )
}


export const promoted = (Resto) =>{
  return () => { 
    return(
<div>

</div>
    )
  }
    
  
}

export default TopRestaurent;