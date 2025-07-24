import Joi from 'joi';
import { UserModel } from '../models/user.model.js';

export const registerValidation = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().pattern(/[a-zA-Z\u0621-\u064Aء-ئ][^#&<>\"~;$^%{}?]{1,20}$/).min(3).max(30).required(),
        email: Joi.string().email({ minDomainSegments: 2, maxDomainSegments: 4, tlds: { allow: ['com', 'net', 'org', 'eg', 'edu', 'yahoo'] } }).required(),
        password: Joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).min(6).required(),
        nationalId: Joi.string()
       .pattern(/^\d{14}$/)  
       .required()
    });
 const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
  

};

export const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, maxDomainSegments: 4, tlds: { allow: ['com', 'net', 'org', 'eg', 'edu', 'yahoo'] } }).required(),
        password: Joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).min(6).required()
    });
    const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};



export const adminLogin = (data) =>{
    
}

export const adminRegister = (data) => {

}

