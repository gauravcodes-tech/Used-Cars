export const getCars = (req, res) => {

  const cars = [

    {
      id: 1,
      name: "BMW X5",
      price: 4200000
    },

    {
      id: 2,
      name: "Audi A6",
      price: 3600000
    },

    {
      id: 3,
      name: "Mercedes C-Class",
      price: 4500000
    }

  ];

  res.status(200).json({
    success: true,
    count: cars.length,
    data: cars
  });

};