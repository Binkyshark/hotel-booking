import { adminRegister as registerService, adminLogin as loginService } from "../services/auth.service.js";
import Hotel from "../models/hotel.model.js";
import {UserModel} from "../models/user.model.js";
import {Booking} from "../models/booking.model.js";
import { RoomModel } from "../models/room.model.js";
export const countHotels = async (req, res) => {
  try {
    const count = await Hotel.countDocuments();
    res.status(200).json({ totalHotels: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const countUsers = async (req, res) => {
  try {
    const count = await UserModel.countDocuments();
    res.status(200).json({ totalUsers: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const countBookings = async (req, res) => {
  try {
    const count = await Booking.countDocuments();
    res.status(200).json({ totalBookings: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getOccupancyStats = async (req, res) => {
  try {
    const totalRooms = await RoomModel.countDocuments();

    const bookings = await Booking.find({}, "room");
    const bookedRoomIds = new Set(bookings.map((b) => b.room.toString()));
    const bookedRooms = bookedRoomIds.size;
    const availableRooms = totalRooms - bookedRooms;
    const occupancyRate = ((bookedRooms / totalRooms) * 100).toFixed(2);

    res.status(200).json({
      totalRooms,
      bookedRooms,
      availableRooms,
      occupancyRate: `${occupancyRate}%`
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const handleAdminRegister = async (req, res) => {
    try {
        const admin = await registerService(req.body);
        res.status(201).json(admin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const handleAdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await loginService(email, password);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

