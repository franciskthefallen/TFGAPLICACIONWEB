import { Request, Response } from 'express';


import pool from '../database';

class OrgaController {

    public async list(req: Request, res: Response): Promise<void> {
        const expediente_orga = await pool.query('SELECT * FROM expediente_orga');
        res.json(expediente_orga);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id_expediente_orga } = req.params;
        const expediente_orga = await pool.query('SELECT * FROM expediente_orga WHERE id_expediente_orga = ?', [id_expediente_orga]);
        console.log(expediente_orga.length);
        if (expediente_orga.length > 0) {
            return res.json(expediente_orga[0]);
        }
        res.status(404).json({ text: "El expediente ORGA no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO expediente_orga set ?', [req.body]);
        res.json({ message: 'Expediente ORGA guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id_expediente_orga } = req.params;
        const id_expediente_orgaAntiguo = req.body;
        await pool.query('UPDATE expediente_orga set ? WHERE id_expediente_orga = ?', [id_expediente_orgaAntiguo, id_expediente_orga]);
        res.json({ message: "Expediente ORGA actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id_expediente_orgaAntiguo } = req.params;
        await pool.query('DELETE FROM expediente_orga WHERE id_expediente_orgaAntiguo = ?', [id_expediente_orgaAntiguo]);
        res.json({ message: "Expediente ORGA eliminado" });
    }
}

const orgaController = new OrgaController;
export default orgaController;