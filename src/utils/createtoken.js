import jwt from 'jsonwebtoken';
export const createToken = (user) => {
    return jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '7d' });
};