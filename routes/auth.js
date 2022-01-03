import express from "express";
import { signInUser, refreshToken } from "../controllers/auth.js";

const router = express.Router();

router.post('/login', signInUser);
router.post('/refresh', refreshToken);

export default router;