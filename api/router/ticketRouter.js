import { Router } from 'express';
import {
    createNewTicket,
    getAllTickets,
    getAllTicketsByOwner,
    getSingleTicket,
} from '../controller/ticketsController.js';

const router = Router();

router.get('/', getAllTickets);

router.get('/:id', getSingleTicket);

router.get('/owner/:id', getAllTicketsByOwner);

router.post('/', createNewTicket);

export default router;
