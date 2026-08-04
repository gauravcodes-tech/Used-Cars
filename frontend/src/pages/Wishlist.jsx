import { useEffect, useState } from "react";
import API from "../Services/api";
import CarCard from "../components/CarCard/CarCard";

function Wishlist() {

  const [cars, setCars] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchWishlist();

  }, []);

  const fetchWishlist = async () => {

    try {

      const res = await API.get("/wishlist");

      setCars(res.data.data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return <h2 className="text-center mt-5">Loading Wishlist...</h2>;

  }

  return (

    <div className="container py-5">

      <h2 className="mb-4">

        ❤️ My Wishlist

      </h2>

      {

        cars.length === 0

        ?

        <h4>No Cars Added</h4>

        :

        <div className="row">

          {

            cars.map((item)=>(

              <div

                className="col-lg-4 mb-4"

                key={item._id}

              >

                <CarCard

                  {...item.car}

                />

              </div>

            ))

          }

        </div>

      }

    </div>

  );

}

export default Wishlist;