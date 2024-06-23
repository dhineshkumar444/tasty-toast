
import React, { useState, useEffect } from 'react';
 
import { useParams } from 'react-router-dom';
import ShimmerUI from './ShimmerUI';
import useFetchDetails from '../Utils/useFetchDetails';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const {resID} = useParams();


  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0765077&lng=80.2389733&restaurantId='+resID);
      
      const jsonData = await response.json();
     
      setData(jsonData.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const data1 = useFetchDetails(resID)


  

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
   <div>
    {( data1 == null || data1.length <=  0 ) ? (
        (<ShimmerUI />)
        
    ):<div className='res-details-container'>
     
        <div className='receipe-heading'>
       <h1 className='res-name'>{data1[0].card.info.category}</h1>
       </div>
    {data1.map(value=>(
        <div className='receipe-details'>
            <div className='receipe-content'>
                
            <div className='res-receipe-name'>{value.card.info.name}</div>
            <p className=' receipe receipe-price'>Price:  {value.card.info.price?value.card.info.price/100:"Free" }</p>
            <p className='receipe receipe-rating'>Rating: {value.card.info.ratings.aggregatedRating.rating?value.card.info?.ratings?.aggregatedRating?.rating:"3"} </p>
            <p className='receipe receipe-desc'>{value.card.info.description?"About:"+value.card.info.description:"" }</p>

           
            </div>
            <div className='receipe-count'>
                <img className='receipe-img' src={value.card.info.imageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${value.card.info.imageId}`:""} />
                <button className='receipe-add'>ADD</button>
                </div>
        </div>
    ))}
</div>
}
   </div>
    
  )
};

export default MyComponent;
