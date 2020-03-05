import React,{ useState } from 'react';
import './style.css'

import ListNumberAdd from './component/listNumberAdd';

function AnalizadorDeNumeros ()
{

    const [ valueList,setValueList ] = useState( [ [] ] );
    const [ valueInput,setValueInput ] = useState( [] );

    const handlerAddItemToList = () => {
        setValueInput( [
            ...valueInput, valueInput
        ] );
    }
    return (
        <>
            <div className="Body">
                <header>
                    <h1 className="title">Analizador de Números</h1>
                </header>

                <section>
                    <div >
                        <label>Número (entre 1 e 100):</label>
                        <input />
                        <button onClick={ handlerAddItemToList }>Adicionar</button>
                    </div>
                    <div>
                        <ListComponent valueInput={valueInput} />
                    </div>
                </section>

                <footer>
                    <p>&copy; AlexBianchi</p>
                </footer>
            </div>
        </>
    );
}

function ListComponent ({valueInput})
{
    return (
        <>
            {valueInput.map(valueInput => {
                return (
                    <div>
                        <span>Valor {valueInput} selecionado</span>
                    </div>
                );
            })}
        </>
    );
}

export default AnalizadorDeNumeros;
24:14
//https://www.youtube.com/watch?v=NoVIe5l1XvE&list=PLpQnvZKeNX4HuwlzMdFpykBLsd_zF82QN