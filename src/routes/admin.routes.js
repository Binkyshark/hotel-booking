import express from "express";
import {countHotels, countUsers, countBookings} from "../controllers/admin.controller.js";
import {verifyAdmin} from "../middlewares/verifyToken.middleware.js"
import { getOccupancyStats } from "../controllers/admin.controller.js";
const router = express.Router();

router.get("/count-hotels", verifyAdmin, countHotels);
router.get("/count-users", verifyAdmin, countUsers);
router.get("/count-bookings", verifyAdmin, countBookings);
router.get("/occupancy", verifyAdmin, getOccupancyStats);
export default router;