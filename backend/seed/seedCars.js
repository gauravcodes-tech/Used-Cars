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
kmDriven:14000,
owner:"First Owner",
location:"Noida",
color:"Carbon Steel Grey",
price:1250000,
image: "/images/virtus.jpg",
featured:false,
rating:4.9
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
image:"/images/xuv700.jpg",
featured:true,
rating:4.9
},
{
name:"BMW M3 Competition",
brand:"BMW",
model:"M3",
variant:"Competition",
year:2023,
fuel:"Petrol",
transmission:"Automatic",
kmDriven:7000,
owner:"First Owner",
location:"New Delhi",
color:"Brooklyn Grey",
price:8200000,
image:"/images/bmw-m3.jpg",
featured:true,
rating:5.0
},
{
name:"BMW M4 Competition",
brand:"BMW",
model:"M4",
variant:"Competition",
year:2024,
fuel:"Petrol",
transmission:"Automatic",
kmDriven:6000,
owner:"First Owner",
location:"Gurugram",
color:"Isle of Man Green",
price:9800000,
image:"/images/bmw-m4.jpg",
featured:true,
rating:5.0
},
{
name:"BMW X5 xDrive40i",
brand:"BMW",
model:"X5",
variant:"xDrive40i",
year:2023,
fuel:"Petrol",
transmission:"Automatic",
kmDriven:14000,
owner:"First Owner",
location:"Delhi",
color:"Black Sapphire",
price:7600000,
image:"/images/bmw-x5.jpg",
featured:true,
rating:4.9
},
{
name:"Audi R8 V10",
brand:"Audi",
model:"R8",
variant:"V10",
year:2022,
fuel:"Petrol",
transmission:"Automatic",
kmDriven:7000,
owner:"First Owner",
location:"New Delhi",
color:"Nardo Grey",
price:21500000,
image:"/images/audi-r8.jpg",
featured:true,
rating:5.0
},
{
name:"Audi RS5 Sportback",
brand:"Audi",
model:"RS5",
variant:"Sportback",
year:2023,
fuel:"Petrol",
transmission:"Automatic",
kmDriven:12000,
owner:"First Owner",
location:"Noida",
color:"Turbo Blue",
price:8900000,
image:"/images/audi-rs5.jpg",
featured:true,
rating:4.9
},
{
name:"Mercedes-Benz C300 AMG Line",
brand:"Mercedes-Benz",
model:"C-Class",
variant:"C300 AMG",
year:2023,
fuel:"Petrol",
transmission:"Automatic",
kmDriven:11000,
owner:"First Owner",
location:"Delhi",
color:"Obsidian Black",
price:6500000,
image:"/images/mercedes-c300.jpg",
featured:true,
rating:4.9
},
{
name:"Mercedes-AMG C43",
brand:"Mercedes-Benz",
model:"AMG C43",
variant:"4MATIC",
year:2024,
fuel:"Petrol",
transmission:"Automatic",
kmDriven:5000,
owner:"First Owner",
location:"Gurugram",
color:"Designo White",
price:9200000,
image:"/images/amg-c43.jpg",
featured:true,
rating:5.0
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
image:"/images/nexon.jpg",
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
image:"/images/seltos.jpg",
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
image:"/images/city.jpg",
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
image:"/images/innova.jpg",
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
image:"/images/slavia.jpg",
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
image:"/images/fortuner.jpg",
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
image:"/images/scorpio.jpg",
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
image:"/images/verna.jpg",
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
image:"/images/brezza.jpg",
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
image:"/images/harrier.jpg",
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