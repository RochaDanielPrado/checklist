export function fresponsavel(idSec) {

    const domResponsavel = document.querySelectorAll('.responsavel .dados');
    const arrayResponsavel = Array.from(domResponsavel);

    const newResponsavel = arrayResponsavel.filter(filtro => Number(filtro.id) === idSec);
    //console.log('new', newResponsavel)

    let bdResponsavel = [];
    let responsavel = {};


    let aux_temp = []
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
    //console.log('resp', bdResponsavel)
    return bdResponsavel;

}