import express from "express";
import { createHotel, deleteHotel, getAllHotels, getSingleHotel, updateHotel } from "../controllers/Hotel.js";
const router = express.Router();

router.post("/", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);
router.get("/:id", getSingleHotel);
router.get("/", getAllHotels);

export default router;