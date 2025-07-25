import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
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
    role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
    },
    
}, { timestamps: true });
export const UserModel = mongoose.model('User', UserSchema);