import { Router } from 'express';
import {
    createNewTicket,
    deleteTicket,
    getAllTickets,
    getAllTicketsByOwner,
    getSingleTicket,
    updateTicket,
} from '../controller/ticketsController.js';

const router = Router();

router.get('/', getAllTickets);

router.get('/:id', getSingleTicket);

router.get('/owner/:id', getAllTicketsByOwner);

router.post('/', createNewTicket);

router.delete('/:id', deleteTicket);

router.put('/:id', updateTicket);

export default router;
