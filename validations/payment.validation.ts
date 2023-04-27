import Joi from 'joi'

export const paymentSchema = Joi.object({
    reservation_id: Joi.object().required(),
    user_id: Joi.object().required(),
    listing_id: Joi.object().required(),
    amount: Joi.number().required(),
    payment_date: Joi.date().required(),
    payment_method: Joi.string().required()
})