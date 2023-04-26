import express from 'express';
import 'dotenv/config';
import './database.js';
import appRouter from './router/appRouter.js';
import {
    boomErrorHandler,
    handleError,
    logError,
} from './middleware/ErrorHandler.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use(express.json());
    }
    routes() {
        appRouter(this.app);
        this.handleErrors();
    }
    handleErrors() {
        this.app.use(logError);
        this.app.use(boomErrorHandler);
        this.app.use(handleError);
    }
    init() {
        this.app.listen(this.port);
        console.log(`Server on port ${this.port}`);
    }
}

const server = new Server();

server.init();
