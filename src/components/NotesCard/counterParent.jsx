import { useState } from "react"
import BComp from './compB'
import { withRouter } from "react-router-dom";

const AComp = () => {
const [val1, setVal1] = useState(0);
const getVal= (val) => {
    console.log(val)
    setVal1(val)

}

return(
    <div>
        <p prop={getVal}>{val1}</p>
        
    </div>
)
}

export default withRouter (AComp)