import bcrypt from "bcryptjs";
import { UserModel } from '../models/user.model.js';
import { AdminModel } from '../models/admin.model.js'
import { createToken } from '../utils/createtoken.js';
import jwt from 'jsonwebtoken';


export const registeruser = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newuser = new UserModel({...data, password: hashedPassword});
    return await newuser.save();
};


export const loginuser = async (email , password) => {
    const user = await UserModel.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        throw new Error('Invalid credentials');
    }
    const token = createToken(user);
    return { user, token };
};


export const adminRegister = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newuser = new AdminModel({
        ...data,
        password: hashedPassword,
        isAdmin: true
    });
    return await newuser.save();
};




export const adminLogin = async (email , password) => {
    const user = await AdminModel.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    if (!user.isAdmin) {
        throw new Error('Access denied. Not an admin.');
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );

    return { user, token };
};
