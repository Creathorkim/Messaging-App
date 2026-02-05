import passport from "passport";
const authenticate = (req, res, next) => {
    passport.authenticate("jwt-strategy", (error, user, info) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        if (!user) {
            return res.status(401).json({ error: info?.message });
        }
        req.user = user.id;
        next();
    })(req, res, next);
};
export default authenticate;
//# sourceMappingURL=authMiddleware.js.map