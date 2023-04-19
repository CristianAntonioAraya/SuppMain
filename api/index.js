import express from 'express';
import dotenv from 'dotenv';
import appRouter from './router/appRouter.js';

dotenv.config();

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.routes();
    }
    routes() {
        appRouter(this.app);
    }
    init() {
        this.app.listen(this.port);
        console.log(`Server on port ${this.port}`);
    }
}

const server = new Server();

server.init();
