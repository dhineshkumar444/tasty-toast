import React, { useContext } from "react";
import { UseName } from "../Utils/constants";

class CheckClass extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count : 0,
            count2 : 1,

        }
        
        
    }
    render(){
        const {name, position} = this.props;
        return (
            <div>
                
                {
                  <UseName.Consumer>
                    {({firstName, lastName}) => <p>{firstName+" "+ lastName}</p>}
                  </UseName.Consumer>
                }
                This is class Based Component
            </div>
        )
    }
}
export default CheckClass;