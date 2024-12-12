import { useRef, useState } from "react";

const Demo2 = ()=>{
    let x = 0;
    const [y, setY] = useState(0);
    const a = useRef(0);
    return (
        <div className="border border-black m-4 p-2 w-96">
            <div>
            <button className="p-2 m-2 bg-green-400 rounded-md" onClick={()=>{
                x=x+1;
                console.log("x = ", x);
            }}>Increase x</button>

            <span>{x}</span>
            </div>

            <div>
            <button className="p-2 m-2 bg-green-400 rounded-md" onClick={()=>{
                setY(y+1);
                console.log("y = ", y);
            }}>Increase y</button>

            <span>{y}</span>
            </div>

            <div>
            <button className="p-2 m-2 bg-green-400 rounded-md" onClick={()=>{
                a.current = a.current+1;
                console.log("a = ", a.current);
            }}>Increase a</button>

            <span>{a.current}</span>
            </div>
        </div>
    )
}

export default Demo2;