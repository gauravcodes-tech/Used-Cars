import { createContext, useContext, useEffect, useState } from "react";
import {
  getAllCars,
  addCar,
  updateCar,
  deleteCar,
} from "../Services/carService";

const CarContext = createContext();

export const useCars = () => useContext(CarContext);

export const CarProvider = ({ children }) => {

  const [cars, setCars] = useState([]);

  const [loading, setLoading] = useState(true);

  const loadCars = async () => {

    try {

      const data = await getAllCars();

      setCars(data);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadCars();

  }, []);

  const createNewCar = async (car) => {

    await addCar(car);

    await loadCars();

  };

  const editCar = async (id, car) => {

    await updateCar(id, car);

    await loadCars();

  };

  const removeCar = async (id) => {

    await deleteCar(id);

    await loadCars();

  };

  return (

<CarContext.Provider

value={{

cars,

loading,

loadCars,

createNewCar,

editCar,

removeCar

}}

>

{children}

</CarContext.Provider>

  );

};