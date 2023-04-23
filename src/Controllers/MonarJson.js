export function montarJson() {
    setTimeout(() => {

        const identificacaoModelo = document.querySelector('.identificacao .modelo').childNodes;
        const identificacaoSerial = document.querySelector('.identificacao .serial').childNodes;

        const identificacaoSecao = document.querySelectorAll('.secao');
        const identificacaoTopicos = document.querySelectorAll('.tabela tbody tr td');
        const arrayTopicos = Array.from(identificacaoTopicos);
        //const arraySerial = identificacaoSerial.getAttributeNode('text')/

        const identificacaoResponsavel = document.querySelectorAll('.responsavel .dados');
        const arrayResponsavel = Array.from(identificacaoResponsavel);

        var modelo = {};
        var numSerie = {};
        var bdSecao = {};
        var topicos = {};
        var responsavel = {};

        var pontosChecagem = [];
        var bdTopicos = [];
        var bdResponsavel = [];

        var montaPontos = {};


        //console.log('node', identificacaoTopicos);
        Modelo();
        Serial();
        Secao();

        //console.log('node',identificacaoSerial.childNodes[0].selected)
        console.log(modelo, numSerie, pontosChecagem);


        function Modelo() {

            identificacaoModelo.forEach(mod => {

                if (mod.selected === true) {
                    modelo.id = Number(mod.id);
                    modelo.nome = mod.text;
                }
            })

            return modelo;
        }

        function Serial() {

            identificacaoSerial.forEach(serie => {

                if (serie.selected === true) {
                    numSerie.id = Number(serie.id);
                    numSerie.sn = serie.text;
                    numSerie.free = false;

                }
            })

            return numSerie;
        }

        function Secao() {
            //console.log(`doc`, identificacaoSecao)
            identificacaoSecao.forEach(sec => {
                bdSecao = {};
                bdTopicos = {};
                montaPontos = {};

                let arraySec = sec.id.split(",");

                bdSecao.id = Number(arraySec[0]);
                bdSecao.titulo = arraySec[1];

                const newTopicos = arrayTopicos.filter(filtro => Number(filtro.id) === bdSecao.id);
                //console.log('new', newTopicos)

                //console.log('postos', pontosChecagem);

                const newResponsavel = arrayResponsavel.filter(filtro => Number(filtro.id) === bdSecao.id);
                //console.log('new', newResponsavel)

                Topicos(newTopicos);
                
                Responsavel(newResponsavel);

                montaPontos = {
                    bdSecao: bdSecao,
                    bdTopicos: bdTopicos,
                };

                pontosChecagem.push(montaPontos);

                

                
            })
            pontosChecagem.push({bdResponsavel: bdResponsavel});
            console.log('pontos', pontosChecagem);

            return bdSecao;
        }

        function Topicos(newTopicos) {

            let cont = 0;
            let step = 4;
            let temp = [];

            for (let i = 0; i < newTopicos.length; i = i + step) {
                let id = null;
                let chk = null;
                let item = null;
                let obs = null;

                //  if (start === cont) {
                for (let u = 0; u < 4; u++) {
                    let index = u + cont;
                    id = Number(newTopicos[i].parentNode.id);

                    if (index === cont) {
                        let checkar = newTopicos[index].childNodes[0].checked;

                        if (checkar === true) {
                            chk = true;
                        } else {
                            chk = false;
                        }
                    }

                    if (index === cont + 1) { item = newTopicos[index].textContent };


                    if (index === cont + 3) { obs = newTopicos[index].childNodes[0].value };

                    topicos = {
                        id: id,
                        chk: chk,
                        item: item,
                        obs: obs

                    }
                };

                temp.push(topicos);
                //console.log('topicos', topicos)
                bdTopicos = [].concat(temp);
                cont = cont + step;

                //console.log('bdTopicos', bdTopicos);

            };

            return bdTopicos;
        }

        
        function Responsavel(newResponsavel) {
            let aux_temp = []    
            let step = 1;
            let idSecao = null;
            let id = null;
            let nome = null;
            let data = null;

            for (let i = 0; i < 2; i++) {


                idSecao = Number(newResponsavel[i].id);
                //console.log('idSecao', idSecao);

                let tipo = newResponsavel[i].childNodes[0].type;
                //console.log('tipo', tipo)

                if (tipo === "select-one") {
                    let options = newResponsavel[i].childNodes[0].childNodes;
                    let lng = options.length;

                    for (let u = 0; u < lng; u++) {
                        let slct = options[u].selected;
                        //console.log('slct', slct)

                        if (slct) {
                            id = Number(options[u].id);
                            nome = options[u].textContent;
                            // console.log('id', id, nome);
                        }
                    }


                }

                if (tipo === "date") {
                    let input = newResponsavel[i].childNodes;
                    // console.log('tipo', tipo)

                    //id = Number(input[0].id);
                    data = input[0].valueAsDate;
                    //console.log('id',id, nome);

                };


                responsavel = {
                    idSecao: idSecao,
                    id: id,
                    nome: nome,
                    data: data,

                };

                if (i % 2) {

                    aux_temp.push(responsavel);
                    //console.log('responsavel', responsavel)
                }
            }
            
            bdResponsavel = bdResponsavel.concat(aux_temp);
            console.log('resp', bdResponsavel)
            return bdResponsavel;
        }

    }, 1000);
}
