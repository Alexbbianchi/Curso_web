import React from 'react';
import './style.css'

function AnalizadorDeNumeros ()
{
    return (
        <>
            <div className="Body">
                <header>
                    <h1 className="title">Analizador de Números</h1>
                </header>
                <section>
                    <div >
                        <label>Número (entre 1 e 100):</label>
                        <input id="inserir" />
                        <button value="Add" id="btn" onclick="Add()">Adicionar</button>
                    </div>
                    <div id="lista"></div>
                    <button id="fim">Finalizar</button>
                    <div id="saida"></div>
                </section>
                <footer>
                    <p>&copy; AlexBianchi</p>
                </footer>
            </div>
        </>
    );
}

export default AnalizadorDeNumeros;