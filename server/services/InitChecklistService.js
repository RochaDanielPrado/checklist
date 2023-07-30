const db = require('../config/db');

module.exports = {

    loadModelos: () => {
        return new Promise((aceito, rejeitado) => {

            const q = 'SELECT * FROM modelo';

            db.query(q, (error, data) => {
                if (error) { rejeitado(error); return; }
  
                aceito(data);
            });
        });
    },

    loadSerial: () => {
        return new Promise((aceito, rejeitado) => {

            const q = 'SELECT * FROM numSerie';

            db.query(q, (error, data) => {
                if (error) { rejeitado(error); return; }

                aceito(data);
            });
        });
    },

    loadResponsavel: () => {
        return new Promise((aceito, rejeitado) => {

            const q = 'SELECT * FROM responsavel WHERE ativo = 1';

            db.query(q, (error, data) => {
                if (error) { rejeitado(error); return; }

                aceito(data);
            });
        });
    },

    loadSecao: () => {
        return new Promise((aceito, rejeitado) => {

            const q = `SELECT secao.id, secao.titulo, cor01, cor02, cor03 FROM secao 
                INNER JOIN aux_cor ON secao.id = aux_cor.secao_id` ;

            db.query(q, (error, data) => {
                if (error) { rejeitado(error); return; }

                aceito(data);
            });
        });
    },
    
    loadTopicos: (secao_id) => {
        return new Promise((aceito, rejeitado) => {
            console.log(secao_id)
            const q = `SELECT id, item FROM topico 
                WHERE secao_id = ?` ;

                //let secao_id = 2;

            db.query(q, [secao_id], (error, data) => {
                if (error) { rejeitado(error); return; }

                aceito(data);
            });
        });
    },

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {

            const q = 'SELECT * FROM carros';

            db.query(q, (error, data) => {
                if (error) { rejeitado(error); return; }

                aceito(data);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM carros WHERE codigo = ?', [codigo], (error, data) => {
                if (error) { rejeitado(error); return; }
                if (data.length > 0) { //vai verificar se retornou mais de 1 e pegar o 1
                    aceito(data[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },
    inserir: (nome, teste) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO modelo (nome) VALUES (?)',
                [nome],
                (error, data) => {
                    if (error) { rejeitado(error); return; }
                    aceito(data.insertCodigo); //insertId
                }
            );
        });
    },
    alterar: (codigo, modelo, placa) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?',
                [modelo, placa, codigo],
                (error, data) => {
                    if (error) { rejeitado(error); return; }
                    aceito(data);
                }
            );
        });
    },

    excluir: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM carros WHERE codigo = ?', [codigo], (error, data) => {
                if (error) { rejeitado(error); return; }
                aceito(data);
            });
        });
    }
};
