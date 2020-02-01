import React, { useState, useEffect } from 'react'
import Button from 'react-uikit/lib/components/Button';

function Relogio() {
    const [ hora, setHora] = useState(23);
    const [ minuto, setMinuto] = useState(58);
    const [ segundo, setSegundo] = useState(58);

    useEffect(()=>{
        if(segundo ===60){
            setMinuto(minuto => minuto + 1)
            setSegundo(0);
        }
    }, [segundo]);
    
    useEffect(()=>{
        if(minuto === 60){
            setHora(hora => hora + 1);
            setMinuto(0);
        }
    }, [minuto]);
    
    useEffect(()=>{
        if(hora === 24){
            setHora(0);
        }
    }, [hora]);


    return(
        <>
            <h1>{hora}:{minuto}:{segundo}</h1>
            <Button variant="secondary" onClick={() => setSegundo(segundo => segundo + 1)} >Click-me</ Button>
        </>
    );
}

export default Relogio