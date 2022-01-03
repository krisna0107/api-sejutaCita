import dotenv from 'dotenv';
dotenv.config();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Users from "../model/users.js";

export const signInUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const checkUser = await Users.findOne({ username: username });

        if (!checkUser) return res.status(404).json({ message: 'Not Found' });

        const checkCredential = await bcrypt.compare(password, checkUser.password);

        if (!checkCredential) return res.status(404).json({ message: 'Invalid' });

        const token = jwt.sign({ username: checkUser.username, id: checkUser._id }, process.env.JWT_SECRET, { expiresIn: '10m' });

        res.status(200).json({ data: checkUser, token: token });
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: 'AUTH Failed' });
    }
}

export const refreshToken = async (req, res) => {
    try {
        const oldData = jwt.decode(req.headers.authorization.split(" ")[1]);
        const addTime = oldData.exp + (60 * 10);

        if (addTime <= Math.floor(Date.now() / 1000)) return res.status(401).json({ message: 'Expired!' });

        const token = jwt.sign({ username: oldData.username, id: oldData.id }, process.env.JWT_SECRET, { expiresIn: '10m' });

        res.status(200).json({ message: 'Token Refreshed!', token: token });
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
}