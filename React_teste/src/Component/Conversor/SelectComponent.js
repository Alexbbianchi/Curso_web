import React, { useState } from 'react';
import './Conversor.css';

import {
  Conversor
} from '../imports'

import { Select } from 'rbx';

function SelectComponent() {
  const [valorA, setValorA] = useState('USD');
  const [valorB, setValorB] = useState('BRL');

  return (
    <>
      <h1 className="title">Conversor de moedas</h1>
      <div className="container">
        <Select.Container color="primary" className="select">
          <Select onChange={(e) => setValorA(e.target.value)}>
            <Select.Option value="USD" >Dolar EUA</Select.Option>
            <Select.Option value="CAD">Dolar Canadense</Select.Option>
            <Select.Option value="EUR">Euro</Select.Option>
            <Select.Option value="BRL">Real Brasileiro</Select.Option>
            <Select.Option value="GBP">Libra Esterlina</Select.Option>
            <Select.Option value="PYG">Guarani Paraguaio</Select.Option>
            <Select.Option value="ARS">Peso Argentino</Select.Option>
            <Select.Option value="UYU">Peso Uruguaio</Select.Option>
            <Select.Option value="CLP">Peso Chileno</Select.Option>
            <Select.Option value="COP">Peso Colombiano</Select.Option>
            <Select.Option value="MXN">Peso Mexicano</Select.Option>
          </Select>
        </Select.Container>
        <Select.Container color="danger" className="select">
          <Select onChange={(e) => setValorB(e.target.value)}>
          <Select.Option value="USD" >Dolar EUA</Select.Option>
            <Select.Option value="CAD">Dolar Canadense</Select.Option>
            <Select.Option value="EUR">Euro</Select.Option>
            <Select.Option value="BRL">Real Brasileiro</Select.Option>
            <Select.Option value="GBP">Libra Esterlina</Select.Option>
            <Select.Option value="PYG">Guarani Paraguaio</Select.Option>
            <Select.Option value="ARS">Peso Argentino</Select.Option>
            <Select.Option value="UYU">Peso Uruguaio</Select.Option>
            <Select.Option value="CLP">Peso Chileno</Select.Option>
            <Select.Option value="COP">Peso Colombiano</Select.Option>
            <Select.Option value="MXN">Peso Mexicano</Select.Option>
          </Select>
        </Select.Container>
        <div className="linha">
          <Conversor moedaA={valorA} moedaB={valorB}></Conversor>
        </div>
      </div>
    </>
  );
}

export default SelectComponent;
