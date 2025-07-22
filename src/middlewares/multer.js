import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "hotel-booking",
        allowedFormats: ["jpg", "png", "jpeg", "gif"],
    },
});
export const upload = multer({ storage: storage });