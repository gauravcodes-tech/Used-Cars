import express from "express";

import {
addWishlist,
getWishlist,
removeWishlist
} from "../controllers/wishlistController.js";

import {
protect
} from "../middleware/authMiddleware.js";

const router=express.Router();

router.get("/",protect,getWishlist);

router.post("/:id",protect,addWishlist);

router.delete("/:id",protect,removeWishlist);

export default router;