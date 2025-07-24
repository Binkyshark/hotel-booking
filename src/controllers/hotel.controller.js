
import Hotel from "../models/hotel.model.js";

export const createHotel = async (req, res, next) => {
  try {
    const imageUrl = req.file?.path;
    if (!imageUrl) {
      return res.status(400).json({ error: "Hotel image is required" });
    }

    const newHotel = new Hotel({
      ...req.body,
      photo: imageUrl,
    });

    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};



export const getHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
};