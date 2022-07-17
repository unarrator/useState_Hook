import React , { useState } from "react";
import Header from "./Header";
import Custom from "./custom";


export default function App()   {

    const [counter , setCounter] = useState(0); // usestate accepts a default value of 0
    function Increase(){

        // setCounter(counter + 1)
        // OR 
        setCounter(oldCounterValue => oldCounterValue + 1); // Preferred this way using function
    }
    function decrease(){

        
        setCounter(oldCounterValue => oldCounterValue - 1);
    }
    return <div>

        <Header />
        <div className= "content">
            <p>counter : {counter}</p>
            <button onClick={Increase}><h2>Increase count</h2></button>
            <button onClick={decrease}><h2>decrease count</h2></button>
            <Custom name ="arghyadeep" surname = "dhar" />
        </div>
    </div>
}
