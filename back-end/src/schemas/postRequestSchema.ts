import Joi from "joi";

export const requestSchema = Joi.object({
  description: Joi.string(),
  listRequests: Joi.string().required(),
  restaurantId: Joi.number().required(),
  status: Joi.string().required(),
  tableNumber: Joi.number().required(),
  totalPrice: Joi.number().required()
})