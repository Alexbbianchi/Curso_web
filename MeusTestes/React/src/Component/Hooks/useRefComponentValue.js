import React, { useRef, useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    });

    const prevCount = prevCountRef.current;

    return (
        <>
            <h3>
                Valor do contador agora: {count} <br />
                Valor do contador antes: {prevCount}
            </h3>
            <button onClick={() => setCount(count + 1)}>Somar um ao contador</button>
        </>
    );
}
export default Counter