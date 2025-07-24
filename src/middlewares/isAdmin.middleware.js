export const isAdmin = (req, res, next) => {
    console.log("isAdmin middleware - req.user:", req.user);

    if (req.user && req.user.isAdmin === true) {
        return next();
    }
    return res.status(403).json({ message: "Access denied. Admins only." });
};

