import React, { useState, useEffect } from 'react';
import './Conversor.css';

function Conversor({ moedaA, moedaB }) {
    const [moedaA_valor, setMoedaA_valor] = useState('');
    const [moedaB_valor, setMoedaB_valor] = useState(null);
    const [cifrao, setCifrao] = useState('R$');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        if (moedaB === 'BRL') {
            setCifrao('R$');
        } else if (moedaB === 'USD') {
            setCifrao('D$');
        } else if (moedaB === 'EUR') {
            setCifrao('€$');
        } else if (moedaB === 'CAD') {
            setCifrao('C$');
        }

    }, [moedaB]);

    function conversor() {
        if (moedaA_valor) {
            let de_para = `${moedaA}_${moedaB}`;
            let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=895c06cbeebf0406a8b0`;
            
            fetch(url)
            .then(res => {
                return res.json();
            }).then(json => {
                let cotacao = json[de_para];
                setMoedaB_valor(parseFloat(moedaA_valor * cotacao).toFixed(2));
                setMsg(cifrao);
            });
        }else{
            setMoedaB_valor(null);
            setMsg('Digite um valor valido');
        }


    }
    return (
        <div >
            <h2 className="moedaName">{moedaA} para {moedaB}</h2>
            <input className="inputConversor" type="text" onChange={(e) => { setMoedaA_valor(e.target.value) }} />
            <button className="btn" value="Converter" onClick={() => conversor()}>Converter</button>
            <h2 className="moedaName">{msg}{moedaB_valor}</h2>
        </div>
    );
}
export default Conversor 
