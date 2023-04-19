import './Secao.css';

const Secao = ({ nome, cor01, cor02, cor03, secoes }) => {

    const cssFundo01 = { backgroundColor: cor01 };
    const cssFundo02 = { backgroundColor: cor02 };
    const cssFundo03 = { backgroundColor: cor03 };


    return (
        <section>
            <div className='secao'>
                <div className='a' style={cssFundo01}>
                    <p>{nome}</p>
                </div>
                <table className='tabela' style={cssFundo02}>
                    <thead>
                        <tr>
                            <th className='b' style={cssFundo03}></th>
                            <th className='c'>Ponto de checagem</th>
                            <th className='d' style={cssFundo03}></th>
                            <th className='e'>Observação</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {secoes.map(secao => 
                            <tr>
                                <td className='b' style={cssFundo03}><input type="checkbox" /></td>
                                <td>{secao}</td>
                                <td className='b' style={cssFundo03}></td>
                                <td><input className='inputobs' style={cssFundo02} placeholder='Digite aqui' /></td>
                            </tr>
                        )}


                    </tbody>

                </table>

            </div>

            <div className='responsavel' style={cssFundo02}>
                <p>Responsável:</p>
            </div>


        </section>

    )
}

export default Secao;