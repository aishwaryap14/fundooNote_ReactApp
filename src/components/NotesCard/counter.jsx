import { useState } from "react"
import { withRouter } from "react-router-dom";

const Counter = () => {
    const [count, setCount] = useState(0);

    
    return(
        <div>
        <p >{count}</p>
        <button onClick={() => {setCount(count + 1)}}>Click</button>
        </div>
    );
}

export default withRouter (Counter);