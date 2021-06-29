
import { useState } from "react"
import { withRouter } from "react-router-dom";

const Hooks = () => {
    const [varOne, setVar] = useState(0);

    const click = () => {
        setVar (varOne + 1);

    }

    return (
        <div>
        <h1 onClick={click}>Hello Hooks</h1>
        <h2>{varOne}</h2>
        </div>
    );
}

export default withRouter (Hooks);