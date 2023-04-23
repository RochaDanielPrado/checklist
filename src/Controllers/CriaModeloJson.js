export function fmodelo() {

    const domModelo = document.querySelector('.identificacao .modelo').childNodes;
    const modelo = {};

    domModelo.forEach(mod => {

        if (mod.selected === true) {
            modelo.id = Number(mod.id);
            modelo.nome = mod.text;
        }
    })

    // pontosChecagem.push({bdModelo: this._modelo});

    return modelo;


}