import './Botao.css';

const Botao = ({ click, texto }) => {

    return (
        <div className='btn'>
            <button className='botao' onClick={click}>
                {texto}
            </button>
        </div>
    )
}

export default Botao;