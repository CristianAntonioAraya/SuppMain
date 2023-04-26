// * Create all schema for users, CREATE, UPDATE, AND GET ONE

import Joi from 'joi';

const id = Joi.string();
const userName = Joi.string();
const password = Joi.string().min(6);
const email = Joi.string().email();
const role = Joi.string();

const getUserSchema = Joi.object({
    id: id.required(),
});
const createUserSchema = Joi.object({
    userName: userName.required(),
    password: password.required(),
    email: email.required(),
    role: role.default('user'),
});

const updateUserSchema = Joi.object({
    userName: userName.required(),
    password: password.required(),
    email: email.required(),
});

export { getUserSchema, createUserSchema, updateUserSchema };
