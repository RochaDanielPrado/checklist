import './Identificacao.css';
import { useState } from 'react';

let bdModelo = {};
let bdNumSerie = {};

const Identificacao = ({ modelo, sn }) => {

    function createInitialModelo() {
        const initialModelo = modelo[0].nome;
        bdModelo = {
            id: modelo[0].id,
            sn: modelo[0].nome,
        }
        console.log('modelo', bdModelo);
        storage('bdModelo', bdModelo);


        return initialModelo;
    }

    function createInitialSerie() {

        const initialSN = sn[0].sn;
        bdNumSerie = {
            id: sn[0].id,
            sn: sn[0].sn,
            free: false,
        }
        console.log(bdNumSerie);
        storage('bdNumSerie', bdNumSerie);


        return initialSN;
    }


    const [selectedModelo, setSelectedModelo] = useState(createInitialModelo);

    //console.log(selectedModelo)

    const handleChangeModelo = e => {
        //console.log(e.target.value);
        setSelectedModelo(e.target.value);
    };

    
    function storage(name, db) {
        
        localStorage.setItem(name, JSON.stringify(db));
    }
    
    
    const [selectedSerial, setSelectedSerial] = useState(createInitialSerie);

    const handleChangeSerial = e => {
        const selected = e.target;
        const valor = e.target.value;
        setSelectedSerial(selected.value);
        const optionId = selected.selectedOptions[0].id;

        bdNumSerie = {
            id: optionId,
            sn: valor,
            free: false,
        }
        console.log('handle', bdNumSerie);
        storage('bdNumSerie', bdNumSerie);
    };


    return (
        <div className='identificacao'>
            <div>
                <label>Modelo:</label>
                <select value={selectedSerial} onChange={handleChangeModelo}>
                    {modelo.map((option, index) => (
                        <option key={index} value={option.nome} id={option.id}>
                            {option.nome}
                        </option>
                    ))}
                </select>

            </div>
            <div>
                <label>Serial</label>
                <select value={selectedSerial} onChange={handleChangeSerial}>
                    {sn.map((option, index) => (
                        <option key={index} value={option.sn} id={option.id}>
                            {option.sn}
                        </option>
                    ))}
                </select>

            </div>
        </div>
    );
}

export default Identificacao;
