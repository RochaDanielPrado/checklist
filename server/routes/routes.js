const express = require('express');
const router = express.Router();

const InitChecklistController = require('../controllers/InitChecklistController');

/* LOAD INICIAL */
/* modelos*/
router.get('/initmodelos', InitChecklistController.loadModelos);

/* serial number*/
router.get('/series', InitChecklistController.loadSerial);

/* responsavel*/
router.get('/initresponsavel', InitChecklistController.loadResponsavel);

/* secao*/
router.get('/initsecao', InitChecklistController.loadSecao);

/* topicos*/
router.get('/inittopicos', InitChecklistController.loadTopicos);

/* Monar json inicila  (novo relatorio) */
router.get('/montajsoninit', InitChecklistController.loadJSONDataNew);



/* *************************************************************** */

// router.post('/checklist', InitChecklistController.inserir);
// router.get('/carros', InitChecklistController.buscarTodos);
// router.get('/carro/:codigo', InitChecklistController.buscarUm);
// router.post('/carro', InitChecklistController.inserir);
// router.put('/carro/:codigo', InitChecklistController.alterar);
// router.delete('/carro/:codigo', InitChecklistController.excluir);

module.exports = router;