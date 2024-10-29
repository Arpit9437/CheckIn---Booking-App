import express from "express";
import { deleteUser, getAllUsers, getSingleUser, updateUser } from "../controllers/User.js";
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js";
const router = express.Router();

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getSingleUser);
router.get("/", verifyAdmin, getAllUsers);

export default router;