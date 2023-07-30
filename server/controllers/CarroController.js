const CarroService = require('../services/CarroService');

module.exports = {

    buscarTodos: async (req, res) => {
        let json = { error: '', data: [] };

        let carros = await CarroService.buscarTodos();

        for (let i in carros) {
            json.data.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            });
        }

        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = { error: '', data: {} };

        let codigo = req.params.codigo; //para pegar o parametro
        let carro = await CarroService.buscarUm(codigo);

        if (carro) {
            json.data = carro; //se tiver nota ele joga no json
        }

        res.json(json);
    },

    inserir: async (req, res) => {
        let json = { error: '', data: {} };

        let nome = req.body.nome;
        let placa = '';//req.body.placa;

        if (nome) {
            let CarroCodigo = await CarroService.inserir(nome);
            json.data = {
                codigo: CarroCodigo,
                nome
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async (req, res) => {
        let json = { error: '', data: {} };

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (codigo && modelo && placa) {
            await CarroService.alterar(codigo, modelo, placa);
            json.data = {
                codigo,
                modelo,
                placa
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    excluir: async (req, res) => {
        let json = { error: '', data: {} };

        await CarroService.excluir(req.params.codigo);

        res.json(json);
    },
}
