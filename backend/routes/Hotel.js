import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotelRooms, getSingleHotel, updateHotel } from "../controllers/Hotel.js";
const router = express.Router();

router.post("/", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);
router.get("/find/:id", getSingleHotel);
router.get("/", getAllHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;