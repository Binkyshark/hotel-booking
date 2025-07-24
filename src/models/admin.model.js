import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
        username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    nationalId:{
        type: String,
        required:true,
        nim: 14,
        max: 14,
    },
},{timestamps: true})

export const AdminModel = mongoose.model('Admin', AdminSchema);




