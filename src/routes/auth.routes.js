import express from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { adminLogin, adminRegister } from '../controllers/admin.controller.js';
import * as validation from '../validation/auth.validation.js';

const router = express.Router();

router.post('/register',validation.registerValidation, register);
router.post('/login', validation.loginValidation, login);

router.post('/signup-admin',validation.registerValidation, adminRegister)
router.post('/login-admin',validation.loginValidation, adminLogin)

export default router;