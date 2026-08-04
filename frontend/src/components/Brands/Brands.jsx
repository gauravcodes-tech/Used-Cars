import "./Brands.css";

const brands = [
  {
    name: "Toyota",
    logo: "/Brands/toyota.png",
  },
  {
    name: "Hyundai",
    logo: "/Brands/hyundai.png",
  },
  {
    name: "Maruti Suzuki",
    logo: "/Brands/suzuki.png",
  },
  {
    name: "Honda",
    logo: "/Brands/honda.png",
  },
  {
    name: "Volkswagen",
    logo: "/Brands/volkswagen.png",
  },
  {
    name: "Tata",
    logo: "/Brands/tata.png",
  },
  {
    name: "Kia",
    logo: "/Brands/kia.png",
  },
  {
    name: "BMW",
    logo: "/Brands/bmw.png",
  },
  {
    name: "Mercedes",
    logo: "/Brands/mercedes.png",
  },
  {
    name: "Audi",
    logo: "/Brands/audi.png",
  },
];

function Brands() {
  return (
    <section className="brands-section">

      <div className="brands-header">

        <h2>Browse by Brand</h2>

        <button className="view-all-btn">
          View All Brands →
        </button>

      </div>

      <div className="brands-grid">

        {brands.map((brand) => (

          <div className="brand-card" key={brand.name}>

            <img
              src={brand.logo}
              alt={brand.name}
              className="brand-logo"
            />

            <h4>{brand.name}</h4>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Brands;