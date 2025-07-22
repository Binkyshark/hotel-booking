
import express from 'express';
import * as bookingController from '../controllers/booking.controller.js';

import { verifyToken } from '../middlewares/verifyToken.middleware.js';

import { isAdmin } from '../middlewares/isAdmin.middleware.js';

const router = express.Router();


router.post('/', verifyToken, bookingController.createBooking);


router.get('/my-bookings', verifyToken, bookingController.getBookingByUser);


router.get('/all-bookings', verifyToken, isAdmin, bookingController.getAllBookings);


router.put('/:id', verifyToken, isAdmin, bookingController.updateBooking);


router.delete('/:id', verifyToken, isAdmin, bookingController.deleteBooking);

export default router;
