import { Router } from 'express';

import userRouter from './userRouter.js';

const appRouter = (app) => {
    const router = Router();
    app.use('/api/v1', router);
    router.use('/users', userRouter);
};

export default appRouter;
