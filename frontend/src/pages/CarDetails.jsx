import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CarDetails(){

    const { id } = useParams();

    return(

        <>

        <Navbar/>

        <div style={{padding:"40px"}}>

            <h1>Car Details</h1>

            <h2>Selected Car ID : {id}</h2>

        </div>

        <Footer/>

        </>

    );

}

export default CarDetails;