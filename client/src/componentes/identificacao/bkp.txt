import './Identificacao.css';

const Identificacao = ({modelo, sn}) => {

    let defaultValor = '';

    return (
        <div className='identificacao'>
            <div>
                <label>Modelo:</label>
                <select className='modelo' defaultValue={'DEFAULT'}>
                    {modelo.map((item, index) => {
                        index === 0 ? defaultValor = 'DEFAULT' : defaultValor = index;
                        return <option id={item.id} value={defaultValor} key={index}>{item.nome}</option>
                    })}
                </select>
                
            </div>
            <div>
                <label>Serial</label>
                <select className='serial' defaultValue={'DEFAULT'}>
                    {sn.map((serial, index) => {
                        index === 0 ? defaultValor = 'DEFAULT' : defaultValor = index;

                        return <option id={serial.id} value={defaultValor} key={index} >{serial.sn}</option>
                    })}
                </select>
            </div>
            {/* <div className='idpart'>
                <label>Data Final</label>
                <input type='date'></input>
            </div> */}
        </div>
    );
}

export default Identificacao;