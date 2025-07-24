
import { adminRegister as registerService, adminLogin as loginService } from "../services/auth.service.js";

export const handleAdminRegister = async (req, res) => {
    try {
        const admin = await registerService(req.body);
        res.status(201).json(admin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const handleAdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await loginService(email, password);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

