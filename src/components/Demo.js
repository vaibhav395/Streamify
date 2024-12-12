import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = ()=>{
    const [text, setText] = useState(0);
    // eslint-disable-next-line
    const [dark, setDark] = useState(false);
    
    const prime = useMemo(()=>findNthPrime(text), [text]);

    return (
        <div className={"border border-black m-4 p-2 w-96 " + (dark && "bg-gray-600 text-white")}>
            <div>
                <button className="m-2 p-2 rounded-md bg-blue-400" onClick={()=>{setDark(!dark)}}>Toggle</button>
            </div>
            <div>
                <input className="border border-black w-70 px-2" type="number" value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div>
                <h1>Nth Prime number : {prime}</h1>
            </div>
        </div>
    )
}

export default Demo;