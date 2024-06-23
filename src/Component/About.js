import Header from "./Header";
import { useContext } from "react";
import { UseName } from "../Utils/constants";
const About = ()=>{
    const {firstName, lastName} = useContext(UseName);
    return (
        
        <div>
           
            <h1>{firstName+" "+lastName}</h1>
            <p>Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</p>
            <pre>
            Living in the city, we never have enough time to do all the things we want to do.

Dunzo can change the way you move things, how you shop and lets you access your city like never before. We’re an app that connects you to the nearest delivery partner who can make purchases, pick up items from any store or restaurant in the city and bring them to you.

It’s never easy to make purchases or drop off packages when you get busy with work, get stuck in traffic, or you might even end up forgetting about it completely.

All you need to do is,
Tell us where to go, what needs to be done and when.
What happens next? Sit back, and let us worry about your task-at-hand.
You could say that we are always on the move for you.
            </pre>
        </div>
    )
}
export default About;