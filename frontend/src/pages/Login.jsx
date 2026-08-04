import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import API from "../Services/api";
import { useAuth } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await API.post("/auth/login", form);

      login(res.data.user, res.data.token);

      alert("Login Successful ✅");

      const redirectPath = location.state?.from?.pathname;

      if (res.data.user.role === "admin") {

        navigate("/admin");

      } else {

        navigate(redirectPath || "/");

      }

    } catch (err) {

      alert(err.response?.data?.message || "Login Failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-lg-5">

          <div className="card shadow border-0">

            <div className="card-body p-4">

              <h2 className="text-center mb-4">

                Login

              </h2>

              <form onSubmit={handleSubmit}>

                <input
                  className="form-control mb-3"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <input
                  className="form-control mb-4"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />

                <button
                  className="btn btn-dark w-100"
                  disabled={loading}
                >
                  {loading ? "Logging In..." : "Login"}
                </button>

              </form>

              <p className="text-center mt-3">

                Don't have an account?{" "}

                <Link to="/register">

                  Register

                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Login;