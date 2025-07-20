import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from './DB/config/db.config.js';
import hotelRoutes from './src/routes/hotel.routes.js';
import roomRoutes from './src/routes/room.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import bookingRoutes from './src/routes/booking.routes.js';

dotenv.config();
const app = express();

app.use(express.json());
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
    res.send('Hotel booking api is running');
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});