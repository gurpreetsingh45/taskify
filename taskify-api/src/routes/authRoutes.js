import { Router } from "express";
import validate from "../middlewares/validateMiddleware.js";
import { login, register } from "../controllers/authController.js";
import { loginSchema, registerSchema } from "../validators/authValidator.js"

const router = Router();

// login route
router.post('/login', validate(loginSchema), login);
// register route
router.post('/register', validate(registerSchema), register);

export default router;