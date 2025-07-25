import express from 'express';
import { createHotel, getHotels } from '../controllers/hotel.controller.js';
import {authMiddleware} from '../middlewares/auth.middleware.js';
import { isAdmin }   from '../middlewares/isAdmin.middleware.js';
import { uploadCloud } from '../middlewares/multer.js';
import { countByCity, countByType } from "../controllers/hotel.controller.js";

const router = express.Router();

router.post('/', authMiddleware , isAdmin ,uploadCloud.single("photo") ,createHotel);
router.get('/' , getHotels); 
router.get("/count-by-city", countByCity);
router.get("/count-by-type", countByType);

export default router;