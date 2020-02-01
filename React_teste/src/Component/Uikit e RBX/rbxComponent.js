import React, { useState } from 'react';
import { Textarea, Container } from 'rbx';

function Rbx() {
    const [titulo, setTitulo] = useState('');

    const styles = {
        color: 'white',
        background: 'black',
        margin: '0px 0px 0px 90px',
    };

    return (
        <>
            <Container>
                <Textarea style={styles} value={titulo}
                    onChange={event => setTitulo(event.target.value)} />
                <Textarea style={styles} value={titulo} 
                    onChange={event => setTitulo(event.target.value)} />
            </Container>
        </>
    );
}

export default Rbx

