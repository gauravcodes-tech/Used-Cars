import {
  FaShieldAlt,
  FaCarSide,
  FaMoneyBillWave,
  FaHeadset,
} from "react-icons/fa";

import "./WhyChooseUs.css";

function WhyChooseUs() {

  const features = [

    {
      icon: <FaShieldAlt />,
      title: "Verified Cars",
      text: "Every listed car is inspected and verified before being published.",
    },

    {
      icon: <FaCarSide />,
      title: "Premium Collection",
      text: "Choose from hundreds of luxury and budget used cars.",
    },

    {
      icon: <FaMoneyBillWave />,
      title: "Best Price",
      text: "Transparent pricing with no hidden charges.",
    },

    {
      icon: <FaHeadset />,
      title: "24×7 Support",
      text: "Dedicated customer support whenever you need help.",
    },

  ];

  return (

    <section className="why-section">

      <div className="container">

        <div className="section-title">

          <h2>Why Choose UsedCars?</h2>

          <p>

            Trusted by thousands of buyers across India.

          </p>

        </div>

        <div className="why-grid">

          {

            features.map((item, index) => (

              <div
                key={index}
                className="why-card"
              >

                <div className="why-icon">

                  {item.icon}

                </div>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.text}

                </p>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default WhyChooseUs;