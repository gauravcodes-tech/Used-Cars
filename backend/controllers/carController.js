import Car from "../models/Car.js";

export const getCars = async (req, res) => {

  try {

    const cars = await Car.find();

    res.status(200).json({
      success: true,
      count: cars.length,
      data: cars
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};