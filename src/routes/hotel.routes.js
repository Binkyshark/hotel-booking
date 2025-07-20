import express from 'express';
import { createHotel, getHotels } from '../controllers/hotel.controller.js';
import {authMiddleware} from '../middlewares/auth.middleware.js';
import { isAdmin }   from '../middlewares/isAdmin.middleware.js';


const router = express.Router();

router.post('/', authMiddleware , isAdmin ,createHotel);
router.get('/' , getHotels); 

export default router;