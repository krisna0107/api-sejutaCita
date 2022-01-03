import express from "express";
import { signInUser, refreshToken } from "../controllers/auth.js";

/**
 * @openapi
 * tags:
 * - name: "Auth"
 *   description: "Authentication Users"
 */
const router = express.Router();

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags:
 *     - Auth
 *     summary: User login (All Users)
 *     description: User login to get Token, token expiry 10 minutes (All Users)
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Login with username and password"
 *       required: true
 *       schema:
 *          type: "object"
 *          required:
 *          - fullName
 *          - password
 *          properties:
 *              username:
 *                  type: "string"
 *                  format: "string"
 *              password:
 *                  type: "string"
 *                  format: "string"
 *     responses:
 *       200:
 *         description: Returns collection Users.
 */
router.post('/login', signInUser);

/**
 * @openapi
 * /api/auth/refresh:
 *   post:
 *     tags:
 *     - Auth
 *     summary: Refresh Token (All Users)
 *     description: Refresh Token if old token < 20 minutes (All Users)
 *     parameters:
 *     - name: "Authorization"
 *       in: "header"
 *       description: "Bearer eyJhbGciOiJIUzI1NiIsIn..."
 *       required: true
 *     responses:
 *       200:
 *         description: Returns collection Users.
 */
router.post('/refresh', refreshToken);

export default router;