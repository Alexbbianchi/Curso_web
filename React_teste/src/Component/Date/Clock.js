import React, { useEffect, useState } from 'react';
import './style.css'
const Clock = () => {
    const [time, setTime] = useState(realTime());

    useEffect(()=>{
       setTimeout(()=>setTime(realTime()),1000);
    });

    function realTime () { 
        return new Date().toLocaleTimeString();
    }
    return (
        <div className="miniContainer">{time}</div>
    );
}
export default Clock;

//Fazer em Typescript, e usar useContext