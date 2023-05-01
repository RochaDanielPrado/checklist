import './Secao.css';
import { useState } from 'react';


let bdSecao = {};
let bdTopicos = [];
let bdResponsavel = {};

const Secao = ({ nome, cor01, cor02, cor03, topicos, chave, responsavel }) => {

    
    const cssFundo01 = { backgroundColor: cor01 };
    const cssFundo02 = { backgroundColor: cor02 };
    const cssFundo03 = { backgroundColor: cor03 };

    let defaultValor = '';

    const [secao, setSecao] = useState(createInitialSecao);

    function createInitialSecao() {
        let secaoFull = {};

        bdSecao = {
            id: chave,
            nome: nome,
        }
        //console.log('Secao', bdSecao);
        // storage(`bdSecao`, bdSecao);

        //secaoFull.push(bdSecao, bdTopicos);

        secaoFull = {
            bdSecao: bdSecao,
            bdTopicos: bdTopicos,
            bdResponsavel: bdResponsavel
        }

        storage(`secaoFull${chave}`, secaoFull);

    }

    let tempArray = [];
    function createInitialTopico() {

        topicos.map((topico, index) => {

            //createInitialTopico(topico.id, topico.chk, topico.item, topico.obs);
            topico = {
                id: topico.id,
                chk: topico.chk,
                item: topico.item,
                obs: topico.obs,
            }


            tempArray[topico.id] = topico;

            //console.log('topico', tempArray);
            //storage(`topico`, tempArray.filter(n => n));

            bdTopicos = [].concat(tempArray.filter(n => n));

        })

        //console.log('topico', bdTopicos);
    }

    function createInitialResponsavel(id, nome) {
        bdResponsavel = {};

        bdResponsavel = {
            id: id,
            nome: nome,
        }
        //console.log('Secao', bdSecao);
        //storage(`bdResponsavel`, bdResponsavel);

        //secaoFull.push(bdSecao, bdTopicos);
    }

    function createInitialData(id, nome) {

        bdResponsavel.data = '';
        //console.log('Secao', bdSecao);
        // storage(`bdResponsavel`, bdResponsavel);

        //secaoFull.push(bdSecao, bdTopicos);
    }

    function storage(name, db) {

        localStorage.setItem(name, JSON.stringify(db));
    }

    function getStorage(name) {
        const get = localStorage.getItem(name);
        const getJSON = JSON.parse(get);

        // console.log('parse', JSON.parse(get));
        return getJSON;
    }

    const [selectedTd, setSelectedTd] = useState(createInitialTopico);

    const handleChangeCB = e => {

        const selected = e.target;
        const indice = e.target.value;
        setSelectedTd(selected.checked);

        const sct = selected.parentNode.parentNode.parentNode.id;

        let getData = getStorage(`secaoFull${sct}`);

        try {

            getData.bdTopicos[indice].chk = selected.checked;

        }
        finally {

           // console.log('checked topico', getData);

            storage(`secaoFull${sct}`, getData);

        }

    };

    const handleChangeObs = e => {

        const selected = e.target;
        const indice = e.target.name;
        setSelectedTd(selected.value);

        const sct = selected.parentNode.parentNode.parentNode.id;

        let getData = getStorage(`secaoFull${sct}`);

        try {

            getData.bdTopicos[indice].obs = selected.value;
            //console.log('testa topico', getData.bdTopicos[indice]);

        }
        finally {

            //console.log('checked topico', getData);

            storage(`secaoFull${sct}`, getData);

        }

    };

    return (
        <section>
            <div className='secao' id={chave} >
                <div className='a' style={cssFundo01}>
                    <p>{nome}</p>
                </div>
                <table className='tabela' style={cssFundo02} id={chave} key={nome}>
                    <thead>
                        <tr id={chave}>
                            <th className='b' style={cssFundo03}></th>
                            <th className='c'>Ponto de checagem</th>
                            <th className='d' style={cssFundo03}></th>
                            <th className='e'>Observação</th>
                        </tr>
                    </thead>
                    <tbody id={chave}>

                        {getStorage(`secaoFull${chave}`)
                            .bdTopicos.map((topico, index) => {

                                //createInitialTopico(topico.id, topico.chk, topico.item, topico.obs);

                                return (

                                    <tr id={topico.id} key={index}>
                                        <td id={chave} className='b' style={cssFundo03}><input value={index} type="checkbox" onChange={handleChangeCB} defaultChecked={topico.chk} /></td>
                                        <td id={chave}>{topico.item}</td>
                                        <td id={chave} className='b' style={cssFundo03}></td>
                                        <td id={chave}><input className='inputobs' style={cssFundo02} placeholder='Digite aqui' onChange={handleChangeObs} value={topico.obs} name={index} /></td>
                                    </tr>
                                )
                            }
                            )}


                    </tbody>

                </table>

            </div>

            <div className='responsavel' style={cssFundo02}>

                <div className='dados' id={chave}>

                    <select className='stl resp' key={nome} defaultValue={'DEFAULT'}>
                        {responsavel.map((resp, index) => {
                            if (index === 0) {
                                defaultValor = 'DEFAULT';
                                createInitialResponsavel(resp.id, resp.nome);
                            } else defaultValor = index;


                            return <option key={index} id={resp.id} value={defaultValor}>{resp.nome}</option>
                        }
                        )}
                    </select>
                </div>
                <div className='dados' id={chave} onClick={createInitialData()}>

                    <input className='stl data' type='date' required ></input>
                </div>
            </div>


        </section>

    )
}

export default Secao;