// import mongoose from "mongoose";
// const RoomSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     maxPeople: {
//       type: Number,
//       required: true,
//     },
//     desc: {
//       type: String,
//       required: true,
//     },
// <<<<<<< HEAD
//     image: {
//     type: String,
//     required: true,
//     },
//      hotel: {
// =======
//     hotel: {
// >>>>>>> 909828aa3a5826057b4d46b44fec3d80ea6d0cda
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Hotel",
//       required: true,
//     },
//     roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
//   },
//   { timestamps: true }
// );
// export const  RoomModel = mongoose.model("Room", RoomSchema);
import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  { timestamps: true }
);

export const RoomModel = mongoose.model("Room", RoomSchema);
