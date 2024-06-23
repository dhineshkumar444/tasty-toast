import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import {VaraityDetails1} from "../Utils/constants"


const VarietyDetails = () => { 
    const [data, setData] = useState(null);
    
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        // const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0765077&lng=80.2389733&collection=80397&sortBy=&filters=&type=rcv2`);
      
        console.log(VaraityDetails1);
        setData(VaraityDetails1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // Fetch data when the component mounts
    useEffect(() => {
      fetchData();
    }, []); // Empty dependency array means this effect runs once after the initial render


    return (
      <div className="varaity-container">
        {data == null || data.length === 0 ? (
          <ShimmerUI />
        ) : (
            
            data.map((value, index) => (index>1?(
              
                <div className="varaity-item">
                    <div className="varaity-image-container">
                    <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+value.card.card.info?.cloudinaryImageId} />
                    <p className="varaity-offer">{value.card.card.info.aggregatedDiscountInfoV3?.header} {value.card.card.info.aggregatedDiscountInfoV3?.subHeader}</p>
                    </div>
                    <div className="varaity-details">
                    <h3>{value.card.card.info?.promoted==true?<span>AD</span>:""}{value.card.card.info?.name}</h3>
                    <p className="cuisines">{value.card.card.info.cuisines?.join(",")}</p>
                    <p>Price: {value.card.card.info?.costForTwo}</p>
                    <p><span> {value.card.card.info?.areaName}</span></p>
                    </div>
                   

                </div>
            ):"")))}
      </div>
    //   <div>
    //  {JSON.stringify(data, null, 2)}
    //   </div>
    );
}

export default VarietyDetails;
