import express from 'express';
const routes = express.Router();

import { ClientController } from './src/Controllers/ClientController.js'

routes.get("/cliente", ClientController.listarTodos);
routes.post("/cliente/novo", ClientController.novoCliente);
routes.put("/cliente/alterar/:id", ClientController.alterarCliente)

export { routes }
