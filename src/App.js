import { useState } from 'react';
import Cabecalho from './Componentes/Cabecalho';
import Identificacao from './Componentes/Identificacao';
import Secao from './Componentes/Secao';
import Titulo from './Componentes/Titulo';

function App() {

  const pontosChecagem = [
    {
      nome: 'Mecânica',
      cor01: '#EEE748',
      cor02: '#FCFBE8',
      cor03: '#F5F291',
      topicos: [
        `Parafusos (apertos, danos, falta de arruelas, etc)`,
        `Paineis (danos, riscos, película, etc)`,
      ]
    },
    {
      nome: 'Hidráulica',
      cor01: '#ABE6C7',
      cor02: '#E1F7EC',
      cor03: '#8ED4A4',
      topicos: [
        `Mangueiras (amassados, torções, etc)`,
        `Abraçadeiras (apertos, tamanhos adequados)`,
        `Conexões (vazamentos, engates, danos, aspecto, etc)`,
        `Veda Rosca e apertos em conexões e Venturi`,
        `Caixas: (vedação, limpeza, flange, chegada de mangueiras)`,
        `Vernis na célula`,
        `Veda Calha para finalização`,
        `Conferencia da orientação das saídas (ÁCIDO E ALCALINO)`,
        `Vasamentos (tanques, mangueiras, conexões)`,
        `Limpeza interna dos tanques`,
      ]
    },
    {
      nome: 'Elétrica',
      cor01: '#BFBCFB',
      cor02: '#E9E7FD',
      cor03: '#9891F9',
      topicos: [
        `Cabos e Pinos (verificar se não existem pinos soltos ou desconectados)`,
        `Fixação de fonte, disjuntor e placa`,
        `Inspeção visual (potencial riscos elétricos)`,
        `Atuação de sensores (boias)`,
        `Atuação das chaves e Lampadas`,
        `Apertos nas chaves e lampadas`,
      ]
    },
    {
      nome: 'Finalização',
      cor01: '#B9D5F0',
      cor02: '#D6E9EF',
      cor03: '#6FAFEE',
      topicos: [
        `CÉLULA: TENSÃO`,
        `CÉLULA: CORRENTE`,
        `PH ALCALINO  [fita ou medidor de PH]`,
        `PH ÁCIDO  [fita ou medidor de PH]`,
        `Tempo de burn-in (h)`,
        `Novo teste de sensores e chaves`,
        `Lavagem Interna`,
        `Drenagem dos tanques e fechamento de tampas`,
        `Inspeção visual final e colagem do No de SERIE`,
        `Fechamento (tampas, paineis, suporte mangueira)`,
        `Itens Acessórios (engates de mangueira, etc)`,
      ]
    },
  ]


  return (

    <div className='App'>
      <Cabecalho />
      <Identificacao />
      <Titulo />
      {pontosChecagem.map(ponto =>
        <Secao key={ponto.nome}
          nome={ponto.nome}
          cor01={ponto.cor01}
          cor02={ponto.cor02}
          cor03={ponto.cor03}
          secoes={ponto.topicos} />)}
    </div>

  );
}

export default App;
