import React from 'react';
import './Main.css';
import Navbar from '../navbar/Navbar';
import Secaovariavel from '../secaovariavel';


function Main(secaovariavel) {

  const component = Object.values(secaovariavel); // get o valor de props - array[0]

  return (
    <div className='backcolor'>
      <div className='topo'>

      </div>
      <div className='body'>

        <div className='menubar'>
          <img className='logo' src='./imagens/logo.png' alt='logo' />
          <div className='linha'>

          </div>
          <div className='menu'>
            <Navbar />
          </div>
        </div>

        <div className='workarea'>
          <Secaovariavel props={component[0]} />
        </div>
      </div>



    </div>

  );
}

export default Main;