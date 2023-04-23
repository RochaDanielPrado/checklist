export function ftopico(id) {

    const domTopicos = document.querySelectorAll('.tabela tbody tr td');
    const arrayTopicos = Array.from(domTopicos);

    const newTopicos = arrayTopicos.filter(filtro => Number(filtro.id) === id);
    //console.log('new', newTopicos)

    let bdTopicos = [];
    let topicos = {};

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