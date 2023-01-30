import express from "express";
import { getUsers } from "../controllers/UserController.js";
import { Register, Login, Logout, refreshToken } from "../controllers/AuthController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', verifyToken, Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router;

