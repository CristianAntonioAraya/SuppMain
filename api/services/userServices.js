import boom from '@hapi/boom';
import userModel from '../models/userModel.js';
import bcrypt from 'bcryptjs';

class UserServices {
    async getAll() {
        const users = await userModel.find();
        return users;
    }
    async get(id) {
        const checkUser = await userModel.findById(id);
        if (!checkUser) {
            throw boom.badRequest('User not exists');
        }
        return checkUser;
    }
    async create({ userName, email, password }) {
        const checkUser = await userModel.findOne({ email: email });
        if (checkUser) {
            throw boom.badRequest('User already exists');
        }
        const user = new userModel({ userName, email, password });

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();
        return user;
    }
    async delete(id) {
        const checkUser = await userModel.findById(id);
        if (!checkUser) {
            throw boom.badRequest('User not exists');
        }
        await userModel.findByIdAndDelete(id);
        return;
    }
    async update(user, id) {
        const checkUser = await userModel.findById(id);
        if (!checkUser) {
            throw boom.badRequest('User not exists');
        }
        const userUpdated = await userModel.findByIdAndUpdate(id, user);
        return userUpdated;
    }
}

export default UserServices;
