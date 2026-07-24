import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
{
    name:String,

    brand:String,

    model:String,

    variant:String,

    year:Number,

    fuel:String,

    transmission:String,

    kmDriven:Number,

    owner:String,

    location:String,

    color:String,

    price:Number,

    image:String,

    featured:Boolean,

    rating:Number

},
{
timestamps:true
});

export default mongoose.model("Car",carSchema);