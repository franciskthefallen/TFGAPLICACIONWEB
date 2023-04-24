import express, { Router } from 'express';

import orgaController from '../controllers/orgaController';

class OrgaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', orgaController.list);
        this.router.get('/:id', orgaController.getOne);
        this.router.post('/', orgaController.create);
        this.router.put('/:id', orgaController.update);
        this.router.delete('/:id', orgaController.delete);
    }

}

export default new OrgaRoutes().router;

