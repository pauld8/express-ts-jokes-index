import Joi from 'joi';
import { ContainerTypes, createValidator } from 'express-joi-validation';

const validator = createValidator({
  passError: true,
});

export default {
  JOKE_GET: () => {
    const object = Joi.object({
      id: Joi.number().required(),
    });

    return validator.params(object);
  },
  VALID_NAME: () => {
    const object = Joi.object({
      name: Joi.string().required().min(2),
    });

    return validator.query(object);
  },
};
