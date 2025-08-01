import multer from "multer";

const storage = multer.diskStorage({});
const fileFilter = (req, file, cb) => {
    if(
        file.mimetype.startsWith("image/")
    ) {
        cb(null, true);
    } else {
        cb("only image files are allowed", false);
    }
};
const upload = multer({storage, fileFilter});
export default upload;