import { Router } from 'express';

import userRouter from './userRouter.js';
import ticketRouter from './ticketRouter.js';

const appRouter = (app) => {
    const router = Router();
    app.use('/api/v1', router);
    router.use('/users', userRouter);
    router.use('/tickets', ticketRouter);
};

export default appRouter;
