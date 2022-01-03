import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        let decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded?.id;
        req.username = decoded?.username;
        next();
    } catch (error) {
        res.status(401).json({
            name: 'Unauthorized',
            message: error.message
        });
    }
}

export default authentication;