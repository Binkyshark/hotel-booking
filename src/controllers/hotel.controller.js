
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



export const getHotels = async (req, res) => {
  const { min, max, city, type, ...others } = req.query;

  try {
    const hotels = await Hotel.find({
      ...others,
      ...(city && { city }),
      ...(type && { type }),
      cheapestPrice: { $gte: min || 1, $lte: max || 9999 }
    });

    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const countByCity = async (req, res) => {
  const cities = req.query.cities?.split(',');

  try {
    const list = await Promise.all(
      cities.map(city => Hotel.countDocuments({ city: city.trim() }))
    );

    res.status(200).json(
      cities.map((city, index) => ({
        city: city.trim(),
        count: list[index]
      }))
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const countByType = async (req, res) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
