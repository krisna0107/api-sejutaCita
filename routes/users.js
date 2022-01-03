import express from "express";
import { getUsers, getUserById, getUserInfo, createUser, updateUser, deleteUser } from "../controllers/users.js";
import auth from "../middleware/authentication.js";
import isAdmin from "../middleware/administrator.js";

/**
 * @openapi
 * tags:
 * - name: "User"
 *   description: "Operations about user"
 */
const router = express.Router();

/**
 * @openapi
 * /api/users/details:
 *   post:
 *     tags:
 *     - User
 *     summary: Get info User (All Users)
 *     description: Get info User (All Users)
 *     parameters:
 *     - name: "Authorization"
 *       in: "header"
 *       description: "Bearer eyJhbGciOiJIUzI1NiIsIn..."
 *       required: true
 *     responses:
 *       200:
 *         description: Returns all collection Users.
 */
router.post('/details', auth, getUserInfo);

/**
 * @openapi
 * /api/users:
 *   get:
 *     tags:
 *     - User
 *     summary: Get All Users (Admin)
 *     description: Get All Users (Admin)
 *     parameters:
 *     - name: "Authorization"
 *       in: "header"
 *       description: "Bearer eyJhbGciOiJIUzI1NiIsIn..."
 *       required: true
 *     responses:
 *       200:
 *         description: Returns all collection Users.
 */
router.get('/', [auth, isAdmin], getUsers);

/**
 * @openapi
 * /api/users/{userId}:
 *   get:
 *     tags:
 *     - User
 *     summary: Get User By userID (Admin)
 *     description: Get User By userID (Admin)
 *     parameters:
 *     - name: "Authorization"
 *       in: "header"
 *       description: "Bearer eyJhbGciOiJIUzI1NiIsIn..."
 *       required: true
 *     - name: "userId"
 *       in: "path"
 *       required: true
 *       type: "string"
 *     responses:
 *       200:
 *         description: Returns collection Users.
 */
router.get('/:id', [auth, isAdmin], getUserById);

/**
 * @openapi
 * /api/users:
 *   post:
 *     tags:
 *     - User
 *     summary: Create User (Admin)
 *     description: Create User (Admin)
 *     parameters:
 *     - name: "Authorization"
 *       in: "header"
 *       description: "Bearer eyJhbGciOiJIUzI1NiIsIn..."
 *       required: true
 *     - in: "body"
 *       name: "body"
 *       description: "User object that needs to be added"
 *       required: true
 *       schema:
 *          $ref: "#/definitions/User"
 *     responses:
 *       201:
 *         description: Returns collection Users.
 */
router.post('', [auth, isAdmin], createUser);

/**
 * @openapi
 * /api/users/{userId}:
 *   put:
 *     tags:
 *     - User
 *     summary: Update User (Admin)
 *     description: Update User (Admin)
 *     parameters:
 *     - name: "Authorization"
 *       in: "header"
 *       description: "Bearer eyJhbGciOiJIUzI1NiIsIn..."
 *       required: true
 *     - name: "userId"
 *       in: "path"
 *       required: true
 *       type: "string"
 *     - in: "body"
 *       name: "body"
 *       description: "Only update fullName"
 *       required: true
 *       schema:
 *          type: "object"
 *          required:
 *          - fullName
 *          properties:
 *              fullName:
 *                  type: "string"
 *                  format: "string"
 *     responses:
 *       200:
 *         description: Returns collection Users.
 */
router.put('/:id', [auth, isAdmin], updateUser);

/**
 * @openapi
 * /api/users/{userId}:
 *   delete:
 *     tags:
 *     - User
 *     summary: Delete User (Admin)
 *     description: Delete User (Admin)
 *     parameters:
 *     - name: "Authorization"
 *       in: "header"
 *       description: "Bearer eyJhbGciOiJIUzI1NiIsIn..."
 *       required: true
 *     - name: "userId"
 *       in: "path"
 *       required: true
 *       type: "string"
 *     responses:
 *       200:
 *         description: Returns collection Users.
 */
router.delete('/:id', [auth, isAdmin], deleteUser);

/**
 * @openapi
 * definitions:
 *   User:
 *      type: "object"
 *      required:
 *      - username
 *      - password
 *      - fullName
 *      properties:
 *          username:
 *              type: "string"
 *              format: "string"
 *          password:
 *              type: "string"
 *              format: "string"
 *          fullName:
 *              type: "string"
 *              format: "string"
 *      xml:
 *          name: "User"
 */

export default router;