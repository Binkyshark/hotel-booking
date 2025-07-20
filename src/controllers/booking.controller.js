import * as bookingService from '../services/booking.service.js';

export const createBooking = async (req, res, next) => {
  try {
    const bookingData = {
      ...req.body,
      user: req.user.id,
    };
    const savedBooking = await bookingService.createBookingService(bookingData);
    res.status(201).json(savedBooking);
  } catch (error) {
    next(error);
  }
};

export const getBookingByUser = async (req, res, next) => {
  try {
    const bookings = await bookingService.getBookingsByUserService(req.user.id);
    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};

export const updateBooking = async (req, res, next) => {
  try {
    const updatedBooking = await bookingService.updateBookingService(req.params.id, req.body);
    res.status(200).json(updatedBooking);
  } catch (error) {
    next(error);
  }
};

export const deleteBooking = async (req, res, next) => {
  try {
    await bookingService.deleteBookingService(req.params.id);
    res.status(200).json({ message: 'Booking has been deleted' });
  } catch (error) {
    next(error);
  }
};


export const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await bookingService.getAllBookingsService();
    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};



