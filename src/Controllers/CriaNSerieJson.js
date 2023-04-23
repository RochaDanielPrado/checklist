export function fserial() {

    const domSerial = document.querySelector('.identificacao .serial').childNodes;
    const numSerie = {};

    

        domSerial.forEach(serie => {

            if (serie.selected === true) {
                numSerie.id = Number(serie.id);
                numSerie.sn = serie.text;
                numSerie.free = false;

            }
        })

        return numSerie;
    
}