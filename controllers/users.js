import bcrypt from 'bcrypt';
import Users from "../model/users.js";

export const getUsers = (req, res) => {
    Users.find(function (err, usersData) {
        if (err) return res.status(404).json({ message: 'Not Found' });
        res.status(200).json(usersData);
    })
}

export const getUserInfo = (req, res) => {
    Users.findById(req.userId, function (err, userData) {
        if (err) return res.status(404).json({ message: 'Not Found' });

        if (!userData) {
            res.status(404).json({ message: 'Not Found' });
        } else {
            res.status(200).json(userData);
        }
    })
}

export const getUserById = (req, res) => {
    const { id } = req.params;

    Users.findById(id, function (err, userData) {
        if (err) return res.status(404).json({ message: 'Not Found' });

        if (!userData) {
            res.status(404).json({ message: 'Not Found' });
        } else {
            res.status(200).json(userData);
        }
    })
}

export const createUser = async (req, res) => {
    const { username, password, fullName } = req.body;

    try {
        const checkUser = await Users.findOne({ username: username });

        if (checkUser) return res.status(409).json({ message: 'User already exist.' });

        const hashPass = await bcrypt.hash(password, 12);

        const result = await Users.create({ username: username, password: hashPass, fullName: fullName, role: 'user' });

        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { fullName } = req.body;

    Users.findByIdAndUpdate(id, { fullName: fullName }, function (err, userData) {
        if (err) return res.status(400).json({ message: 'Bad Request' });

        if (!userData) {
            res.status(400).json({ message: 'Bad Request' });
        } else {
            res.status(200).json({ message: 'Updated' });
        }
    })
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    Users.findByIdAndDelete(id, function (err, userData) {
        if (err) return res.status(400).json({ message: 'Bad Request' });
        if (!userData) {
            res.status(400).json({ message: 'Bad Request' });
        } else {
            res.status(200).json(userData);
        }
    })
}

