import TicketServices from '../services/ticketServices.js';

const services = new TicketServices();

const getAllTickets = async (req, res, next) => {
    try {
        const tickets = await services.getAll();
        res.json({ ok: true, tickets });
    } catch (error) {
        next(error);
    }
};
const createNewTicket = async (req, res, next) => {
    try {
        const ticket = req.body;
        const createdTicket = await services.create(ticket);
        res.json({
            ok: true,
            ticket: {
                title: createdTicket.title,
                description: createdTicket.description,
                state: createdTicket.state,
                assignTo: createdTicket.assignTo,
                owner: {
                    ownerId: createdTicket.ownerId,
                    ownerName: createdTicket.ownerName,
                },
            },
        });
    } catch (error) {
        next(error);
    }
};
const getSingleTicket = async (req, res, next) => {
    try {
        const { id } = req.params;
        const ticket = await services.get(id);
        res.json({
            ok: true,
            ticket: {
                title: ticket.title,
                description: ticket.description,
                state: ticket.state,
                assignTo: ticket.assignTo,
                owner: {
                    ownerId: ticket.ownerId,
                    ownerName: ticket.ownerName,
                },
            },
        });
    } catch (error) {
        next(error);
    }
};

const getAllTicketsByOwner = async (req, res, next) => {
    try {
        const { id } = req.params;
        const resp = await services.getByOwner(id);
        res.json({ ok: true, resp });
    } catch (error) {
        next(error);
    }
};

const deleteTicket = async (req, res, next) => {
    try {
        const { id } = req.params;
        await services.delete(id);
        res.json({ ok: true, msg: 'Ticket delete correcly' });
    } catch (error) {
        next(error);
    }
};
const updateTicket = async (req, res, next) => {
    try {
        const { id } = req.params;
        const ticketData = req.body;
        await services.update(id, ticketData);
        res.json({
            ok: true,
            msg: 'Ticket updated correcly',
            ticket: ticketData,
        });
    } catch (error) {
        next(error);
    }
};
export {
    getAllTickets,
    createNewTicket,
    getSingleTicket,
    getAllTicketsByOwner,
    deleteTicket,
    updateTicket,
};
