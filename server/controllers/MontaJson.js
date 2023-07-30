const ChecklistController = require('./InitChecklistController');

module.exports = {

    loadJSONDataNew: (req, res) => {
        let json = {error: '', data: []};

       let modelo = ChecklistController.loadModelosinit;

        console.log(modelo);

        json.data.push(modelo);


    },


}
