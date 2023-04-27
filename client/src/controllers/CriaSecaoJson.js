import { ftopico } from "./CriaTopicoJson.js";
import { fresponsavel } from "./CriaResponsavelJson.js";

export function fsecao() {

    const domSecao = document.querySelectorAll('.secao');
    var bdSecao = {};
    var montaPontos = {};
    var bdResponsavel = [];
    var pontosChecagem = [];
    
            //console.log(`doc`, domSecao)
            domSecao.forEach(sec => {
                bdSecao = {};
               // bdTopicos = {};
                montaPontos = {};

                let arraySec = sec.id.split(",");

                bdSecao.id = Number(arraySec[0]);
                bdSecao.titulo = arraySec[1];

               // const newTopicos = arrayTopicos.filter(filtro => Number(filtro.id) === bdSecao.id);
                //console.log('new', newTopicos)

                //console.log('postos', pontosChecagem);

                //const newResponsavel = arrayResponsavel.filter(filtro => Number(filtro.id) === bdSecao.id);
                //console.log('new', newResponsavel)

                const bdTopicos = ftopico(bdSecao.id);
                
                bdResponsavel = fresponsavel(bdSecao.id, bdResponsavel);

                montaPontos = {
                    bdSecao: bdSecao,
                    bdTopicos: bdTopicos,
                };

                pontosChecagem.push(montaPontos);
                
            })
            
            pontosChecagem.push({bdResponsavel: bdResponsavel});
            console.log('pontos', pontosChecagem);

            return pontosChecagem;
        
    
}