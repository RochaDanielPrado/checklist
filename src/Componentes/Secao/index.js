import './Secao.css';

const Secao = ({ nome, cor01, cor02, cor03, topicos, chave, responsavel }) => {

    const cssFundo01 = { backgroundColor: cor01 };
    const cssFundo02 = { backgroundColor: cor02 };
    const cssFundo03 = { backgroundColor: cor03 };

    let defaultValor = '';

    return (
        <section>
            <div className='secao' id={[chave, nome]}>
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

                        {topicos.map((topico, index) =>

                            <tr id={topico.id} key={index}>
                                <td id={chave} className='b' style={cssFundo03}><input value={topico.id} type="checkbox" defaultChecked={topico.chk} /></td>
                                <td id={chave}>{topico.item}</td>
                                <td id={chave} className='b' style={cssFundo03}></td>
                                <td id={chave}><input className='inputobs' style={cssFundo02} placeholder='Digite aqui' defaultValue={topico.obs} /></td>
                            </tr>
                        )}


                    </tbody>

                </table>

            </div>

            <div className='responsavel' style={cssFundo02}>

                <div className='dados' id={chave}>

                    <select className='stl resp' key={nome} defaultValue={'DEFAULT'}>
                        {responsavel.map((resp, index) => {
                            index === 0 ? defaultValor = 'DEFAULT' : defaultValor = index;

                            return <option key={index} id={resp.id} value={defaultValor}>{resp.nome}</option>
                        }
                        )}
                    </select>
                </div>
                <div className='dados' id={chave}>
                    <input className='stl data' type='date' required></input>
                </div>
            </div>


        </section>

    )
}

export default Secao;