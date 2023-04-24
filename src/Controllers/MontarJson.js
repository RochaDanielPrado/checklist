import { fmodelo } from "./CriaModeloJson.js";
import { fserial } from "./CriaNSerieJson.js";
import { fsecao } from "./CriaSecaoJson.js";

export function montarJson() {
    var pontosChecagem = [];
    
    setTimeout(() => {


        const modelo = fmodelo();
        pontosChecagem.push({ bdModelo: modelo });

        const numSerie = fserial();
        pontosChecagem.push({ bdNumSerie: numSerie });

        const montaPontos = fsecao();
        //console.log('montaPontos', montaPontos)
        pontosChecagem = pontosChecagem.concat(montaPontos);

        //console.log('node',domSerial.childNodes[0].selected)
        console.log(modelo, numSerie, pontosChecagem);



    }, 1000);

    return pontosChecagem;

}
