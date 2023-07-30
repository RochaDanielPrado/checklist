const ChecklistService = require('../services/InitChecklistService');

var montaJson = [];

module.exports = {

    loadModelos: async function (req, res) {
        let json = { error: '', data: [] };

        let modelos = await ChecklistService.loadModelos();

        for (let i in modelos) {
            json.data.push({
                id: modelos[i].id,
                nome: modelos[i].nome,
            });
        }

        res.json(json);
    },

    loadSerial: async (req, res) => {
        let json = { error: '', data: [] };

        let series = await ChecklistService.loadSerial();

        for (let i in series) {
            json.data.push({
                id: series[i].id,
                sn: series[i].sn,
                free: series[i].free === 0 ? false : true,
            });
        }

        res.json(json);
    },

    loadResponsavel: async (req, res) => {
        let json = { error: '', data: [] };

        let responsavel = await ChecklistService.loadResponsavel();

        for (let i in responsavel) {
            json.data.push({
                id: responsavel[i].id,
                nome: responsavel[i].nome,
                ativo: responsavel[i].ativo === 0 ? false : true,
            });
        }

        res.json(json);
    },

    loadSecao: async (req, res) => {
        let json = { error: '', data: [] };

        let secao = await ChecklistService.loadSecao();

        for (let i in secao) {
            json.data.push({
                id: secao[i].id,
                titulo: secao[i].titulo,
                cor01: secao[i].cor01,
                cor02: secao[i].cor02,
                cor03: secao[i].cor03,
            });
        }

        res.json(json);
    },

    loadTopicos: async (req, res) => {
        let json = { error: '', data: [] };

        let topicos = await ChecklistService.loadTopicos();

        for (let i in topicos) {
            json.data.push({
                id: topicos[i].id,
                chk: false,
                item: topicos[i].item,
                obs: '',
            });
        }

        res.json(json);
    },

    loadJSONDataNew: async (req, res) => {
        let jsonModelos = { error: '', data: [] };
        let modelo = {};
        
        

        return new Promise(async (resolve, reject) => {
            let modelos = await ChecklistService.loadModelos();
            
            for (let i in modelos) {
                jsonModelos.data.push({
                    id: modelos[i].id,
                    nome: modelos[i].nome,
                });
            }
            modelo.bdModelo = jsonModelos.data;
            //console.log(JSON.stringify(modelo));
        
            montaJson.push(JSON.stringify(modelo));

            //res.json(jsonModelos);
        })
            .then (series())
            .then (responsavel())
            .then (secao())
                
                
    }


}

async function series() {
    let json = { error: '', data: [] };
    let nSeries = {};
    let seriesn = await ChecklistService.loadSerial();

    for (let i in seriesn) {
        json.data.push({
            id: seriesn[i].id,
            sn: seriesn[i].sn,
            free: seriesn[i].free === 0 ? false : true,
        });
    }
    nSeries.bdSeries = json.data; 
    montaJson.push(JSON.stringify(nSeries));

   // res.json(json);
    //console.log('json', montaJson);

}

async function responsavel() {
    let json = { error: '', data: [] };
    let respons = {};
    let responsavel = await ChecklistService.loadResponsavel();

    for (let i in responsavel) {
        json.data.push({
            id: responsavel[i].id,
            nome: responsavel[i].nome,
            ativo: responsavel[i].ativo === 0 ? false : true,
        });
    }

    respons.bdResponsavel = json.data; 
    //console.log(responsavel)
    montaJson.push(JSON.stringify(respons));

   // res.json(json);
    //console.log('json', montaJson);

}

async function secao() {
    let json = { error: '', data: [] };
    let secoes = {};
    let secao = await ChecklistService.loadSecao();

    for (let i in secao) {
        json.data.push({
            id: secao[i].id,
            titulo: secao[i].titulo,
            cor01: secao[i].cor01,
            cor02: secao[i].cor02,
            cor03: secao[i].cor03,
        });
        
        secoes.bdSecao = json.data; 
        topico(secao[i].id);
        console.log(secoes)
    }
    montaJson.push(JSON.stringify(secoes));
        
        // res.json(json);
        console.log('json', montaJson);

}

async function topico(id) {
    let json = { error: '', data: [] };
    let tpc = {};
    let topicos = await ChecklistService.loadTopicos();

        for (let i in topicos) {
            json.data.push({
                id: topicos[i].id,
                chk: false,
                item: topicos[i].item,
                obs: '',
            });
        }


        tpc.bdTopicos = json.data; 
    
    montaJson.push(JSON.stringify(tpc));

   // res.json(json);
    console.log('json', montaJson);

}
