import Joi from 'joi'

export const userSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phone_number: Joi.string().required(),
    address: Joi.string().required(),
    avatar_url: Joi.string(),
    is_verified: Joi.boolean().required(),
    verification_token: Joi.string(),
    reset_password_token: Joi.string(),
});