import { useEffect, useState } from "react";


const useFetchDetails = (resID) => {
const [data1, setData1] = useState(null);
const fetchData = async () => {
    try{
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0765077&lng=80.2389733&restaurantId=${resID}`);
    const jsonData = await response.json();
    
    setData1(jsonData.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    } catch (error) {
        console.log(error);
    }
};
    useEffect(() => {
        fetchData();},[]
    )
    console.log(data1);
    console.log("Using hook data ");


  
    return data1;
}
export default useFetchDetails;


