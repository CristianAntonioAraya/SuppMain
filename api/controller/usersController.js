import UserServices from '../services/userServices.js';

const services = new UserServices();

const getUsers = async (req, res, next) => {
    try {
        // Make query to dataBase
        // await services.getOneUser()
        res.json({ ok: true, msg: 'User Find' });
    } catch (error) {
        next(error);
    }
};

export { getUsers };
