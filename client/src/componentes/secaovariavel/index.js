import React from 'react';
import './Secaovariavel.css';
import Card from '../card';
import Botao from '../botao';
import RegisterForm from '../../pages/users/useradd.js';

const components = {
  card: Card,
  adduser: RegisterForm,
  botao: Botao,
};

function Secaovariavel(props) {

  let component = Object.values(props); // get o valor de props - array[0]
  const Component = components[component[0]]; //toString

  return (

    <div className="wrapper">
      <Component />
    </div>


  );
}

export default Secaovariavel;