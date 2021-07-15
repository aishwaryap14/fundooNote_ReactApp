import { useState } from "react"
import { withRouter } from "react-router-dom";

const BComp = ({prop}) => {
    const [val2, setVal2] = useState(10);
    // const handleClick= () =>{
    //     setVal2(val2 +1)
        
    // }

    return(
        <div>
            <button  onClick={() => prop=(val2 +1)}>send</button>
        </div>
    )
    }

    export default withRouter (BComp)