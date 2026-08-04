import "./Hero.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-circle"></div>

      <div className="hero-left">

        <span className="hero-badge">
          India's Trusted Used Car Marketplace
        </span>

        <h1>
          Find Your
          <br />
          <span>Dream Car</span>
          <br />
          Without The Hassle.
        </h1>

        <p>
          Buy premium certified used cars from trusted sellers
          with complete inspection reports, finance options
          and doorstep assistance.
        </p>

        <div className="hero-buttons">

          <Link
            to="/cars"
            className="browse-btn"
          >
            Browse Cars
            <FaArrowRight />
          </Link>

          <Link
            to="/contact"
            className="contact-btn"
          >
            Contact Us
          </Link>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="/images/bmw.png"
          alt="BMW M4"
          className="hero-car"
        />

      </div>

    </section>
  );
}

export default Hero;