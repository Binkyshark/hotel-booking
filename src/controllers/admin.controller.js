import {adminRegister, adminLogin} from "../services/auth.service.js"


export const adminRegister = async (req, res) => {
    try {
        const admin = await adminRegister(req.body);
        req.status(201).json(admin);
    } catch (error) {
        res.status(500).json({error: error.message })
    }
};

export const adminLogin = async (req, res)=>{
    try {
        const { email, password } = req.body;
        const { user, token } = await loginuser(email, password);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

