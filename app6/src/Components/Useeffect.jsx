import { useEffect,useState } from "react";

export default function Useeffect(){


    const [count,setCount]=useState(0)

//Run Mount

useEffect(()=>{console.log("Called at Mount")},[])

//Run when staye chnged

useEffect(()=>{console.log(count)},[])
    
    return(
        <div>
            <h3>Count:{count}</h3>
            <button onClick={IDBCursorf}></button>
        </div>
    )
}