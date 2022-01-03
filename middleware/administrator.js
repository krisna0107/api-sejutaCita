import Users from "../model/users.js";

const administrator = async (req, res, next) => {
    Users.findById(req.userId, function (err, userData) {
        if (!userData) {
            return res.status(404).json({ message: 'Not Found' });
        } else {
            if (userData.role == 'admin'){
                next();
            } else {
                res.status(401).json({ message: 'Unauthorized' });
            }
        }
    })
}

export default administrator;