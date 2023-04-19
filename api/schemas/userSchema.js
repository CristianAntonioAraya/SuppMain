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
    role: role.required(),
});

const updateUserSchema = Joi.object({
    userName: userName.required(),
    password: password.required(),
    role: role.required(),
});

export { getUserSchema, createUserSchema, updateUserSchema };
