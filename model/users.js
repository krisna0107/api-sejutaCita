import mongoose from "mongoose";

const user = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    fullName: 'String',
    role: { type: String, default: 'user' },
    createAt: {
        type: Date,
        default: new Date()
    }
})

const Users = mongoose.model('users', user);

export default Users;