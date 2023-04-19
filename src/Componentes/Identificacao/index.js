import './Identificacao.css';

const Identificacao = () => {
    return (
        <div className='identificacao'>
            <div className='idpart'>
                <p>Modelo:</p>
                <p>FCG-030</p>
            </div>
            <div className='idpart'>
                <p>Serial</p>
                <p>_________</p>
            </div>
            <div className='idpart'>
                <p>Data Final</p>
                <p>___/___/_____</p>
            </div>
        </div>
    );
}

export default Identificacao;