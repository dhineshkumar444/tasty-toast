import { useEffect, useState } from "react"

const useOnlineStatus = () =>
    {
        const [online, setOnline] = useState(true);

        useEffect(()=> {
                window.addEventListener("online", ()=>{
                setOnline(true);
                })  
                window.addEventListener("offline", ()=>{
                    setOnline(false);
    })
        },[])
        console.log(online);
        return online;

}
export default useOnlineStatus;