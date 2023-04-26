import ticketModel from '../models/ticketModel.js';


class TicketServices {
    async getAll() {
        const tickets = await ticketModel.find();
        return tickets;
    }
    async get(id) {
        const ticket = await ticketModel.findById(id);
        if (!ticket) {
            throw boom.badRequest('Invalid ticket');
        }
        return ticket;
    }
    async getByOwner(id) {
        const tickets = await ticketModel.find({ ownerId: id });
        return tickets;
    }
    async create(ticket) {
        const newTicket = new ticketModel(ticket);
        await newTicket.save();
        return newTicket;
    }
    async delete() {}
    async update() {}
}

export default TicketServices;
