import {useState} from "react";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center flex-column">
            <h1>{count}</h1>
            <div className="d-flex">
            <button className="btn btn-primary m-2" onClick={() => setCount(count + 1)}>++</button>
            <button className="btn btn-danger m-2" onClick={() => setCount(count - 1)}>--</button>
             <button className="btn btn-primary m-2" onClick={() => setCount(count*2)}>**</button>
            <button className="btn btn-danger m-2" onClick={() => setCount(count/2)}>//</button>
            <button className="btn btn-primary m-2" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
};

export default App;
