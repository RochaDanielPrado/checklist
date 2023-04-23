import React, { ReactElement } from 'react';
import './Botao.css';
import { montarJson } from '../../Controllers/MonarJson';

const Botao = ({ click }) => {

    return (
        <button className='botao' onClick={click}>
            teste
        </button>
    )
}

export default Botao;