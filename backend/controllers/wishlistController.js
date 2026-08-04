import Wishlist from "../models/Wishlist.js";

// ==========================
// Get Wishlist
// ==========================

export const getWishlist = async (req, res) => {

  try {

    const wishlist = await Wishlist.find({

      user: req.user.id

    }).populate("car");

    res.status(200).json({

      success: true,

      count: wishlist.length,

      data: wishlist

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

// ==========================
// Add Wishlist
// ==========================

export const addWishlist = async (req, res) => {

  try {

    const alreadyExists = await Wishlist.findOne({

      user: req.user.id,

      car: req.params.id,

    });

    if (alreadyExists) {

      return res.status(400).json({

        success: false,

        message: "Car already in wishlist"

      });

    }

    const wishlist = await Wishlist.create({

      user: req.user.id,

      car: req.params.id

    });

    res.status(201).json({

      success: true,

      data: wishlist

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

// ==========================
// Remove Wishlist
// ==========================

export const removeWishlist = async (req, res) => {

  try {

    const wishlist = await Wishlist.findOne({

      user: req.user.id,

      car: req.params.id,

    });

    if (!wishlist) {

      return res.status(404).json({

        success: false,

        message: "Wishlist item not found"

      });

    }

    await wishlist.deleteOne();

    res.status(200).json({

      success: true,

      message: "Removed from wishlist"

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};