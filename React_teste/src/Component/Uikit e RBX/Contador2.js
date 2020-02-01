import React, { useState } from 'react';

import { Button, Tab, Divider, Card } from "react-uikit";

function Contador2() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Button size="large" variant="secondary" onClick={() => setCount(count + 1)}>
                Contador
            </Button>
            <p>{count}</p>

            <Tab>
                <Tab.Item active>Pictures</Tab.Item>
                <Tab.Item>Music</Tab.Item>
                <Tab.Item>Videos</Tab.Item>
                <Tab.Item >Documents</Tab.Item>
            </Tab>

            <Card body>
                <Card.Title>
                    “There are two hard things in computer science: 
                    cache invalidation,
                    naming things, and off-by-one errors.”
                </Card.Title>
            </Card>
            <Divider icon />
        </>
    );
}
export default Contador2