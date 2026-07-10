import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";

function Home() {

  return (

    <>

      <Navbar />

      <div style={{padding:"40px"}}>

        <h1>Find Your Dream Used Car</h1>

        <p>Best marketplace to buy quality used cars.</p>

        <br />

        <CarCard />

      </div>

      <Footer />

    </>

  );

}

export default Home;