import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getAllRooms, getSingleRoom, updateRoom, updateRoomAvailability } from "../controllers/Room.js";
const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
router.get("/:id", getSingleRoom);
router.get("/", getAllRooms);

export default router;