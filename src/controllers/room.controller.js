import { RoomModel } from "../models/room.model.js";
import Hotel from "../models/hotel.model.js";

export const createRoom = async (req, res) => {
  const hotelId = req.params.hotelid;
  const newRoom = new RoomModel(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      res.status(500).json(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getALLRoom = async (req, res) => {
  try {
    const room = await RoomModel.find();
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await RoomModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const getRoom = async (req, res) => {
  try {
    const room = await RoomModel.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  const { id, hotelid } = req.params;
  try {
    await RoomModel.findByIdAndDelete(id);

    
    await Hotel.findByIdAndUpdate(hotelid, {
      $pull: { rooms: id },
    });

    res.status(200).json({ message: "Room deleted successfully" });
  } catch (err) {
    next(err);
  }
};
