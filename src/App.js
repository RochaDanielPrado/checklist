import Cabecalho from './Componentes/Cabecalho';
import Identificacao from './Componentes/Identificacao';
import Secao from './Componentes/Secao';
import Titulo from './Componentes/Titulo';
import Botao from './Componentes/Botao';
import { montarJson } from './Controllers/MontarJson';


function App() {

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
        { id: 1, chk: true, item: "Parafusos (apertos, danos, falta de arruelas, etc)", obs: "observacao" },
        { id: 2, chk: true, item: "Paineis (danos, riscos, película, etc)", obs: "observacao" },
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
        { id: 1, chk: true, item: "Mangueiras (amassados, torções, etc)", obs: "observacao" },
        { id: 2, chk: false, item: "Abraçadeiras (apertos, tamanhos adequados)", obs: "observacao" },
        { id: 3, chk: true, item: "Conexões (vazamentos, engates, danos, aspecto, etc)", obs: "observacao" },
        { id: 4, chk: true, item: "Veda Rosca e apertos em conexões e Venturi", obs: "observacao" },
        { id: 5, chk: true, item: "Caixas: (vedação, limpeza, flange, chegada de mangueiras)", obs: "observacao" },
        { id: 6, chk: true, item: "Vernis na célula", obs: "observacao" },
        { id: 7, chk: true, item: "Veda Calha para finalização", obs: "observacao" },
        { id: 8, chk: true, item: "Conferencia da orientação das saídas (ÁCIDO E ALCALINO)", obs: "observacao" },
        { id: 9, chk: true, item: "Vasamentos (tanques, mangueiras, conexões)", obs: "observacao" },
        { id: 10, chk: true, item: "Limpeza interna dos tanques", obs: "observacao" },
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
        { id: 1, chk: true, item: "Cabos e Pinos (verificar se não existem pinos soltos ou desconectados)", obs: "observacao" },
        { id: 2, chk: true, item: "Fixação de fonte, disjuntor e placa", obs: "observacao" },
        { id: 3, chk: true, item: "Inspeção visual (potencial riscos elétricos)", obs: "observacao" },
        { id: 4, chk: true, item: "Atuação de sensores (boias)", obs: "observacao" },
        { id: 5, chk: true, item: "Atuação das chaves e Lampadas", obs: "observacao" },
        { id: 6, chk: true, item: "Apertos nas chaves e lampadas", obs: "observacao" },
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
        { id: 1, chk: true, item: "CÉLULA: TENSÃO", obs: "observacao" },
        { id: 2, chk: true, item: "CÉLULA: CORRENTE", obs: "observacao" },
        { id: 3, chk: true, item: "PH ALCALINO  [fita ou medidor de PH]", obs: "observacao" },
        { id: 4, chk: true, item: "PH ÁCIDO  [fita ou medidor de PH]", obs: "observacao" },
        { id: 5, chk: true, item: "Tempo de burn-in (h)", obs: "observacao" },
        { id: 6, chk: true, item: "Novo teste de sensores e chaves", obs: "observacao" },
        { id: 7, chk: true, item: "Lavagem Interna", obs: "observacao" },
        { id: 8, chk: true, item: "Drenagem dos tanques e fechamento de tampas", obs: "observacao" },
        { id: 9, chk: true, item: "Inspeção visual final e colagem do No de SERIE", obs: "observacao" },
        { id: 10, chk: true, item: "Fechamento (tampas, paineis, suporte mangueira)", obs: "observacao" },
        { id: 11, chk: true, item: "Itens Acessórios (engates de mangueira, etc)", obs: "observacao" },
      ]
    },
  ]


  return (

    <div className="App">
      <Cabecalho />
      <Identificacao
        modelo={modelos}
        sn={numSerie.filter(num => num.free === true)} />
      <Titulo />
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
    </div>

  );
}

export default App;
