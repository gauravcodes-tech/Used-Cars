import Car from "../models/Car.js";

export const getCars = async (req, res) => {
  try {
    const cars = await Car.find();

    res.status(200).json({
      success: true,
      count: cars.length,
      data: cars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    res.status(200).json({
      success: true,
      data: car,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const createCar = async (req, res) => {

  try {

    const car = await Car.create(req.body);

    res.status(201).json({

      success: true,

      data: car

    });

  } catch (error) {

    res.status(400).json({

      success: false,

      message: error.message

    });

  }

};
export const updateCar = async (req, res) => {

  try {

    const car = await Car.findByIdAndUpdate(

      req.params.id,

      req.body,

      {
        new: true,
        runValidators: true,
      }

    );

    if (!car) {

      return res.status(404).json({

        success: false,

        message: "Car not found",

      });

    }

    res.status(200).json({

      success: true,

      data: car,

    });

  } catch (error) {

    res.status(400).json({

      success: false,

      message: error.message,

    });

  }

};

export const deleteCar = async (req, res) => {

  try {

    const car = await Car.findById(req.params.id);

    if (!car) {

      return res.status(404).json({

        success: false,

        message: "Car not found"

      });

    }

    await car.deleteOne();

    res.status(200).json({

      success: true,

      message: "Car deleted successfully"

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};