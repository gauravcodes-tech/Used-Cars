import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import Car from "../models/Car.js";

dotenv.config();

const cars = [
  {
name:"Volkswagen Virtus GT",
brand:"Volkswagen",
model:"Virtus",
variant:"GT",
year:2023,
fuel:"Petrol",
transmission:"Manual",
kmDriven:12000,
owner:"First Owner",
location:"Noida",
color:"Carbon Steel Grey",
price:1550000,
image: "/images/virtus.jpg",
featured:false,
rating:4.7
},
 {
name:"Hyundai Creta SX",
brand:"Hyundai",
model:"Creta",
variant:"SX",
year:2022,
fuel:"Diesel",
transmission:"Automatic",
kmDriven:28500,
owner:"First Owner",
location:"New Delhi",
color:"Polar White",
price:1390000,
image:"/images/creta.jpg",
featured:true,
rating:4.8
},
  {
name:"Mahindra XUV700 AX7",
brand:"Mahindra",
model:"XUV700",
variant:"AX7",
year:2023,
fuel:"Diesel",
transmission:"Automatic",
kmDriven:18000,
owner:"First Owner",
location:"Gurugram",
color:"Midnight Black",
price:2150000,
image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
featured:true,
rating:4.9
},
  {
name:"Tata Nexon XZ+",
brand:"Tata",
model:"Nexon",
variant:"XZ+",
year:2022,
fuel:"Petrol",
transmission:"Manual",
kmDriven:31000,
owner:"First Owner",
location:"Noida",
color:"Daytona Grey",
price:980000,
image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
featured:true,
rating:4.7
},
  {
name:"Kia Seltos GTX+",
brand:"Kia",
model:"Seltos",
variant:"GTX+",
year:2023,
fuel:"Petrol",
transmission:"Automatic",
kmDriven:17000,
owner:"First Owner",
location:"Faridabad",
color:"Intense Red",
price:1575000,
image:"https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800",
featured:true,
rating:4.8
},
  {
name:"Honda City ZX",
brand:"Honda",
model:"City",
variant:"ZX",
year:2022,
fuel:"Petrol",
transmission:"CVT",
kmDriven:26000,
owner:"First Owner",
location:"Delhi",
color:"Golden Brown",
price:1190000,
image:"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800",
featured:false,
rating:4.6
},
  {
name:"Toyota Innova Crysta ZX",
brand:"Toyota",
model:"Innova Crysta",
variant:"ZX",
year:2021,
fuel:"Diesel",
transmission:"Manual",
kmDriven:54000,
owner:"Second Owner",
location:"Ghaziabad",
color:"Silver",
price:1980000,
image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",
featured:true,
rating:4.9
},
 {
name:"Skoda Slavia Style",
brand:"Skoda",
model:"Slavia",
variant:"Style",
year:2023,
fuel:"Petrol",
transmission:"Automatic",
kmDriven:14000,
owner:"First Owner",
location:"New Delhi",
color:"Candy White",
price:1490000,
image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",
featured:false,
rating:4.7
},
  {
name:"Toyota Fortuner 4X2",
brand:"Toyota",
model:"Fortuner",
variant:"4X2",
year:2022,
fuel:"Diesel",
transmission:"Automatic",
kmDriven:42000,
owner:"First Owner",
location:"Gurugram",
color:"Super White",
price:3450000,
image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
featured:true,
rating:4.9
},
  {
name:"Mahindra Scorpio N Z8",
brand:"Mahindra",
model:"Scorpio N",
variant:"Z8",
year:2023,
fuel:"Diesel",
transmission:"Manual",
kmDriven:15000,
owner:"First Owner",
location:"Delhi",
color:"Everest White",
price:1990000,
image:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800",
featured:true,
rating:4.8
},
  {
name:"Hyundai Verna SX(O)",
brand:"Hyundai",
model:"Verna",
variant:"SX(O)",
year:2023,
fuel:"Petrol",
transmission:"Automatic",
kmDriven:11000,
owner:"First Owner",
location:"Noida",
color:"Fiery Red",
price:1295000,
image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
featured:false,
rating:4.7
},
  {
name:"Maruti Suzuki Brezza ZXI",
brand:"Maruti Suzuki",
model:"Brezza",
variant:"ZXI",
year:2022,
fuel:"Petrol",
transmission:"Manual",
kmDriven:34000,
owner:"First Owner",
location:"Faridabad",
color:"Magma Grey",
price:1025000,
image:"https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800",
featured:false,
rating:4.6
},
  {
name:"Tata Harrier XZA+",
brand:"Tata",
model:"Harrier",
variant:"XZA+",
year:2022,
fuel:"Diesel",
transmission:"Automatic",
kmDriven:29000,
owner:"First Owner",
location:"Ghaziabad",
color:"Dark Edition",
price:1850000,
image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",
featured:true,
rating:4.8
},

];

const importData = async () => {
  try {
    await connectDB();

    await Car.deleteMany();

    await Car.insertMany(cars);

    console.log("✅ Cars Imported Successfully");

    process.exit();

  } catch (error) {

    console.error(error);

    process.exit(1);

  }
};

importData();