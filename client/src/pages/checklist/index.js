
import React from 'react';
import Botao from '../../componentes/botao';
import Identificacao from '../../componentes/identificacao';
import Titulo from '../../componentes/titulo';
import './Checklist.css';
import Secao from '../../componentes/secao';
import { montarJson } from '../../controllers/MontarJson';

function Checklist() {

    const modelos = [
        { id: 1, nome: "FCA-030" },
    ]

    const responsavel = [
        { id: 1, nome: "João Paulo", ativo: true },
        { id: 2, nome: "Daniel", ativo: true },
    ]

    const numSerie = [
        { id: 1, sn: "202200030", free: false },
        { id: 2, sn: "202200031", free: false },
        { id: 3, sn: "202200032", free: true },
        { id: 4, sn: "202200033", free: true },
        { id: 5, sn: "202200034", free: true },
        { id: 6, sn: "202200035", free: true },
        { id: 7, sn: "202200036", free: true },
        { id: 8, sn: "202200037", free: true },
    ]

    const pontosChecagem = [
        {
            bdSecao: {
                id: 1, titulo: "Mecânica",
                cor01: "#EEE748",
                cor02: "#FCFBE8",
                cor03: "#F5F291"
            },
            bdTopicos: [
                { id: 1, chk: false, item: "Parafusos (apertos, danos, falta de arruelas, etc)", obs: "" },
                { id: 2, chk: false, item: "Paineis (danos, riscos, película, etc)", obs: "" },
            ]
        },
        {
            bdSecao: {
                id: 2, titulo: "Hidráulica",
                cor01: "#ABE6C7",
                cor02: "#E1F7EC",
                cor03: "#8ED4A4"
            },
            bdTopicos: [
                { id: 1, chk: false, item: "Mangueiras (amassados, torções, etc)", obs: "" },
                { id: 2, chk: false, item: "Abraçadeiras (apertos, tamanhos adequados)", obs: "" },
                { id: 3, chk: false, item: "Conexões (vazamentos, engates, danos, aspecto, etc)", obs: "" },
                { id: 4, chk: false, item: "Veda Rosca e apertos em conexões e Venturi", obs: "" },
                { id: 5, chk: false, item: "Caixas: (vedação, limpeza, flange, chegada de mangueiras)", obs: "" },
                { id: 6, chk: false, item: "Vernis na célula", obs: "" },
                { id: 7, chk: false, item: "Veda Calha para finalização", obs: "" },
                { id: 8, chk: false, item: "Conferencia da orientação das saídas (ÁCIDO E ALCALINO)", obs: "" },
                { id: 9, chk: false, item: "Vasamentos (tanques, mangueiras, conexões)", obs: "" },
                { id: 10, chk: false, item: "Limpeza interna dos tanques", obs: "" },
            ]
        },
        {
            bdSecao: {
                id: 3, titulo: "Elétrica",
                cor01: "#BFBCFB",
                cor02: "#E9E7FD",
                cor03: "#9891F9"
            },
            bdTopicos: [
                { id: 1, chk: false, item: "Cabos e Pinos (verificar se não existem pinos soltos ou desconectados)", obs: "" },
                { id: 2, chk: false, item: "Fixação de fonte, disjuntor e placa", obs: "" },
                { id: 3, chk: false, item: "Inspeção visual (potencial riscos elétricos)", obs: "" },
                { id: 4, chk: false, item: "Atuação de sensores (boias)", obs: "" },
                { id: 5, chk: false, item: "Atuação das chaves e Lampadas", obs: "" },
                { id: 6, chk: false, item: "Apertos nas chaves e lampadas", obs: "" },
            ]
        },
        {
            bdSecao: {
                id: 4, titulo: "Finalização",
                cor01: "#B9D5F0",
                cor02: "#D6E9EF",
                cor03: "#6FAFEE"
            },
            bdTopicos: [
                { id: 1, chk: false, item: "CÉLULA: TENSÃO", obs: "" },
                { id: 2, chk: false, item: "CÉLULA: CORRENTE", obs: "" },
                { id: 3, chk: false, item: "PH ALCALINO  [fita ou medidor de PH]", obs: "" },
                { id: 4, chk: false, item: "PH ÁCIDO  [fita ou medidor de PH]", obs: "" },
                { id: 5, chk: false, item: "Tempo de burn-in (h)", obs: "" },
                { id: 6, chk: false, item: "Novo teste de sensores e chaves", obs: "" },
                { id: 7, chk: false, item: "Lavagem Interna", obs: "" },
                { id: 8, chk: false, item: "Drenagem dos tanques e fechamento de tampas", obs: "" },
                { id: 9, chk: false, item: "Inspeção visual final e colagem do No de SERIE", obs: "" },
                { id: 10, chk: false, item: "Fechamento (tampas, paineis, suporte mangueira)", obs: "" },
                { id: 11, chk: false, item: "Itens Acessórios (engates de mangueira, etc)", obs: "" },
            ]
        },
    ]

    return (

        <div>
            <Identificacao
                modelo={modelos}
                sn={numSerie.filter(num => num.free === true)} />
        <Titulo/>
        {pontosChecagem.map((ponto, index) =>
        <Secao key={index}
          chave={ponto.bdSecao.id}
          nome={ponto.bdSecao.titulo}
          cor01={ponto.bdSecao.cor01}
          cor02={ponto.bdSecao.cor02}
          cor03={ponto.bdSecao.cor03}
          topicos={ponto.bdTopicos}
          responsavel={responsavel.filter(resp => resp.ativo === true)} />)}
      <Botao click={montarJson} texto={'Save'} />
      <Botao click={montarJson} texto={'Grava'} />
        </div>



    );
}

export default Checklist;