import Joi from 'joi';
import { UserModel } from '../models/user.model.js';

export const registerValidation = (data) => {
    const schema = Joi.object({
        username: joi.string().pattern(/[a-zA-Z\u0621-\u064Aء-ئ][^#&<>\"~;$^%{}?]{1,20}$/).min(3).max(30).required(),
        email: joi.string().email({ minDomainSegments: 2, maxDomainSegments: 4, tlds: { allow: ['com', 'net', 'org', 'eg', 'edu', 'yahoo'] } }).required(),
        password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).min(6).required()
    });
    return schema.validate(data);
};


export const loginValidation = (data) => {
    const schema = Joi.object({
        email: joi.string().email({ minDomainSegments: 2, maxDomainSegments: 4, tlds: { allow: ['com', 'net', 'org', 'eg', 'edu', 'yahoo'] } }).required(),
        password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).min(6).required()
    });
    return schema.validate(data);
};



export const adminLogin = (data) =>{
    
}

export const adminRegister = (data) => {

}

