import { Booking } from "../models/booking.model.js";
import { RoomModel as  Room } from "../models/room.model.js";

export const createBookingService = async (data) => {
  const { user, room, startDate, endDate } = data;

  const foundRoom = await Room.findById(room);
  if (!foundRoom) {
    throw new Error("Room not found");
  }

  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const numberOfNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const totalPrice = numberOfNights * foundRoom.price;
  const hotel = foundRoom.hotel;

  const booking = new Booking({
    user,
    room,
    hotel,
    startDate,
    endDate,
    totalPrice
  });

  return await booking.save();
};

export const getBookingsByUserService = async (userId) => {
  return await Booking.find({ user: userId }).populate("user hotel room");
};

export const updateBookingService = async (id, data) => {
  return await Booking.findByIdAndUpdate(id, { $set: data }, { new: true });
};

export const deleteBookingService = async (id) => {
  return await Booking.findByIdAndDelete(id);
};

export const getAllBookingsService = async () => {
  return await Booking.find().populate("user hotel room");
};
