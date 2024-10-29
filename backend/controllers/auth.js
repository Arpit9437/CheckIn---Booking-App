import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const register = async (req,res,next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username : req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({message: "User created successfully."});
    } catch (error) {
        next(error)
    }
};

export const login = async (req,res,next) => {
    try {
        const user = await User.findOne({username: req.body.username});

        if(!user){
            return next(createError(404, "User not found."));
        }

        const isPassCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPassCorrect){
            return next(createError(400, "Invalid credentials."));
        }

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET);

        const {password, isAdmin, ...otherDetails} = user._doc;
        res.cookie("token", token, {
            httpOnly: true,
            expiresIn: "7d",
        })
        .status(200)
        .json({details: {...otherDetails}, isAdmin});
    } catch (error) {
        next(error);
    }
};

export const logout = async (req, res, next) => {
    try {
        res.clearCookie("token");
	    res.status(200).json({message: "Logged out successfully" });
    } catch (error) {
        next(error);
    }
};