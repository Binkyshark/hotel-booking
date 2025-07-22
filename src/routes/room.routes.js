import express from "express";
import {
  createRoom,
  deleteRoom,
  getALLRoom,
  getRoom,
  updateRoom,} from "../controllers/room.controller.js";

  import {upload} from "../middlewares/multer.js";
  import{ uploadToCloudinary } from "../utils/cloudinary.js";
  const router = express.Router();

  router.post("/:hotelid", upload.single("image") ,createRoom);
  router.get("/", getALLRoom);
  router.get("/:id", getRoom);
  router.put("/:id", updateRoom);
  router.delete("/:id/:hotelid", deleteRoom);
  export default router;