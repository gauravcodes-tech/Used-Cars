import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";

function Cars() {

  return (

    <>

      <Navbar />

      <div style={{padding:"40px"}}>

        <h1>Available Cars</h1>

        <div
          style={{
            display:"flex",
            gap:"20px",
            flexWrap:"wrap"
          }}
        >

          <CarCard />
          <CarCard />
          <CarCard />

        </div>

      </div>

      <Footer />

    </>

  );

}

export default Cars;