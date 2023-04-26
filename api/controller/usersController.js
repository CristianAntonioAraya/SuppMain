import UserServices from '../services/userServices.js';

const services = new UserServices();

const getAllUsers = async (req, res, next) => {
    try {
        const users = await services.getAll();
        if (users.length === 0) {
            return res.json({ ok: true, msg: 'Theres not users created' });
        }

        res.json({ ok: true, users });
    } catch (error) {
        next(error);
    }
};
const getUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await services.get(id);
        res.json({
            ok: true,
            user: {
                userName: user.userName,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        next(error);
    }
};
const createNewUser = async (req, res, next) => {
    try {
        const { userName, email, password } = req.body;
        const user = await services.create({ userName, email, password });
        res.json({
            ok: true,
            user: {
                userName: user.userName,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        next(error);
    }
};
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        await services.delete(id);
        res.json({ ok: true, msg: 'User delete correctly' });
    } catch (error) {
        next(error);
    }
};
const updateUser = async (req, res, next) => {
    try {
        const userToUpdate = req.body;
        const { id } = req.params;
        await services.update(userToUpdate, id);
        res.json({ ok: true, msg: 'User update correctly' });
    } catch (error) {
        next(error);
    }
};

export { getUser, createNewUser, deleteUser, updateUser, getAllUsers };
