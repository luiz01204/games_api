require("dotenv").config();
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Pegando o token do header

    if (!token) {
        return res.status(401).json({ error: "Token não fornecido!" });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Token inválido ou expirado!" });
    }
}

module.exports = authMiddleware;