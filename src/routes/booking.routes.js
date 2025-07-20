
import express from 'express';
import {
  createBooking,
  deleteBooking,
  getAllBookings,
  getBookingByUser,
  updateBooking
} from '../controllers/booking.controller.js';

import { verifyToken } from '../middlewares/verifyToken.middleware.js';

import { isAdmin } from '../middlewares/isAdmin.middleware.js';

const router = express.Router();


router.post('/', verifyToken, createBooking);


router.get('/my-bookings', verifyToken, getBookingByUser);


router.get('/all-bookings', verifyToken, isAdmin, getAllBookings);


router.put('/:id', verifyToken, isAdmin, updateBooking);


router.delete('/:id', verifyToken, isAdmin, deleteBooking);

export default router;
