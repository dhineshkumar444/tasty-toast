import { Link } from "react-router-dom";

const Error = () => {
    return(
        <div>
            <h1>OOPS !!!</h1>
            <h2>Something Went Wrong</h2>
            <p>Click <Link to="/">Here</Link> to go home Page</p>
        </div>
    )
}

export default Error;