import express from "express";
import { getUsers, getUserById, getUserInfo, createUser, updateUser, deleteUser } from "../controllers/users.js";
import auth from "../middleware/authentication.js";
import isAdmin from "../middleware/administrator.js";

const router = express.Router();

router.post('/details', auth, getUserInfo);

router.get('/', [auth, isAdmin], getUsers);
router.get('/:id', [auth, isAdmin], getUserById);
router.post('', [auth, isAdmin], createUser);
router.put('/:id', [auth, isAdmin], updateUser);
router.delete('/:id', [auth, isAdmin], deleteUser);

export default router;