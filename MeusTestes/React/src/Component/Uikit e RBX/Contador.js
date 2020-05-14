import React, { useState } from 'react';

import { Button, Tab, Divider, Card, Title } from "rbx";

function Contador() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Button color="dark" size="large" onClick={() => setCount(count + 1)}>
                Contador
            </Button>
            <p>{count}</p>

            <Tab.Group>
                <Tab active>Pictures</Tab>
                <Tab>Music</Tab>
                <Tab>Videos</Tab>
                <Tab>Documents</Tab>
            </Tab.Group>

            <Card>
                <Card.Content>
                    <Title>
                        “There are two hard things in computer science: 
                        cache invalidation,
                        naming things, and off-by-one errors.”
                    </Title>
                </Card.Content>
            </Card>
            
            <Divider color="light" >RBX</Divider>
        </>
    );
}

export default Contador













// import React, { useState } from 'react';
// import Button from 'react-uikit/lib/components/Button/Button';

// function Contador(){
//     const [count, setCount] = useState(0);
//     return (
//         <>
//             <Button onClick={()=>setCount(count=>count+1)}>Contador</Button>
//             <p>You clicked {count} times</p>
//         </>
//     );
// }
// export default Contador