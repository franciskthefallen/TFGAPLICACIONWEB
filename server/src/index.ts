import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import orgaRoutes from './routes/orgaRoutes';

class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);//3306

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/principal', orgaRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
             console.log('la del angular modificado');
            console.log('Server on port', this.app.get('port'));
           
        });
    }

}

const server = new Server();
server.start();