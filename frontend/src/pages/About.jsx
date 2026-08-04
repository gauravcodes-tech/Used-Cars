import "./About.css";

import { Link } from "react-router-dom";

import {

FaBullseye,

FaEye,

FaShieldAlt,

FaHandshake,

FaCarSide,

FaStar,

} from "react-icons/fa";

function About() {

return (

<div className="about-page">

{/* HERO */}

<section className="about-top">

<span className="section-tag">

ABOUT US

</span>

<h1>

India's Trusted Premium Used Car Marketplace

</h1>

<p>

UsedCars is built to make buying premium used cars

simple, transparent and completely hassle-free.

Every listing is verified so customers can buy

with complete confidence.

</p>

</section>

{/* MISSION */}

<section className="mission-grid">

<div className="mission-card">

<FaBullseye />

<h3>

Our Mission

</h3>

<p>

To provide India's most trusted platform

for buying and selling premium used cars.

</p>

</div>

<div className="mission-card">

<FaEye />

<h3>

Our Vision

</h3>

<p>

To redefine the used car buying experience

through technology, trust and transparency.

</p>

</div>

</section>

{/* WHY CHOOSE */}

<section className="why-section">

<div className="title">

<h2>

Why Choose UsedCars?

</h2>

<p>

Everything you need for a safe and premium

car buying experience.

</p>

</div>

<div className="why-grid">

<div className="why-card">

<FaShieldAlt />

<h3>

Verified Cars

</h3>

<p>

Every car goes through proper verification

before listing.

</p>

</div>

<div className="why-card">

<FaHandshake />

<h3>

Trusted Sellers

</h3>

<p>

Only genuine and trusted sellers

can publish vehicles.

</p>

</div>

<div className="why-card">

<FaCarSide />

<h3>

Premium Collection

</h3>

<p>

Luxury, SUV, Sedan and Hatchbacks

available in one place.

</p>

</div>

<div className="why-card">

<FaStar />

<h3>

Premium Experience

</h3>

<p>

Modern design, smooth browsing

and transparent pricing.

</p>

</div>

</div>

</section>
      {/* ================= ACHIEVEMENTS ================= */}

      <section className="stats-section">

        <div className="title">

          <h2>

            Our Achievements

          </h2>

          <p>

            Numbers that reflect our commitment towards quality,
            trust and customer satisfaction.

          </p>

        </div>

        <div className="stats-grid">

          <div className="stat-card">

            <h1>20+</h1>

            <span>Premium Cars</span>

          </div>

          <div className="stat-card">

            <h1>100%</h1>

            <span>Verified Listings</span>

          </div>

          <div className="stat-card">

            <h1>50+</h1>

            <span>Happy Customers</span>

          </div>

          <div className="stat-card">

            <h1>24/7</h1>

            <span>Customer Support</span>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="about-cta">

        <div className="cta-box">

          <span>

            READY TO GET STARTED?

          </span>

          <h2>

            Find Your Perfect Used Car Today

          </h2>

          <p>

            Explore our collection of verified used cars,
            compare prices and buy your dream vehicle with confidence.

          </p>

          <div className="cta-buttons">

            <Link
              to="/cars"
              className="primary-btn"
            >

              Browse Cars

            </Link>

            <Link
              to="/contact"
              className="secondary-btn"
            >

              Contact Us

            </Link>

          </div>

        </div>

      </section>

    </div>

  );

}

export default About;