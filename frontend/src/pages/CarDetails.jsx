import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../Services/api";

function CarDetails() {
    const { id } = useParams();

    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const res = await API.get(`/cars/${id}`);
                setCar(res.data.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCar();
    }, [id]);

    if (loading) {
        return <h2 className="text-center mt-5">Loading...</h2>;
    }

    if (!car) {
        return <h2 className="text-center mt-5">Car Not Found</h2>;
    }

    return (
        <div className="container py-5">

            <div className="row">

                <div className="col-lg-6">
                    <img
                        src={car.image}
                        alt={car.name}
                        className="img-fluid rounded shadow"
                    />
                </div>

                <div className="col-lg-6">

                    <h1>{car.name}</h1>

                    <h3 className="text-primary mb-4">
                        ₹ {car.price.toLocaleString("en-IN")}
                    </h3>

                    <table className="table table-bordered">

                        <tbody>

                            <tr>
                                <th>Brand</th>
                                <td>{car.brand}</td>
                            </tr>

                            <tr>
                                <th>Model</th>
                                <td>{car.model}</td>
                            </tr>

                            <tr>
                                <th>Variant</th>
                                <td>{car.variant}</td>
                            </tr>

                            <tr>
                                <th>Year</th>
                                <td>{car.year}</td>
                            </tr>

                            <tr>
                                <th>Fuel</th>
                                <td>{car.fuel}</td>
                            </tr>

                            <tr>
                                <th>Transmission</th>
                                <td>{car.transmission}</td>
                            </tr>

                            <tr>
                                <th>KMs Driven</th>
                                <td>{car.kmDriven?.toLocaleString()} km</td>
                            </tr>

                            <tr>
                                <th>Owner</th>
                                <td>{car.owner}</td>
                            </tr>

                            <tr>
                                <th>Location</th>
                                <td>{car.location}</td>
                            </tr>

                            <tr>
                                <th>Color</th>
                                <td>{car.color}</td>
                            </tr>

                            <tr>
                                <th>Rating</th>
                                <td>⭐ {car.rating}</td>
                            </tr>

                        </tbody>

                    </table>
                    <hr />

                    <h4>Description</h4>

                    <p className="text-secondary">
                        {car.description}
                    </p>

                    <div className="mt-4 d-flex gap-3">

                        <button className="btn btn-success">
                            Contact Seller
                        </button>

                        <button className="btn btn-outline-danger">
                            ❤️ Add Wishlist
                        </button>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default CarDetails;