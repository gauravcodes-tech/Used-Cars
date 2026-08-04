import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Services/api";

function Register() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
  role: "user",
});

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await API.post("/auth/register", form);

      alert(res.data.message || "Registration Successful ✅");

      navigate("/login");

    } catch (err) {

      alert(err.response?.data?.message || "Registration Failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="container py-5">

      <h2 className="mb-4">
        Register
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-3"
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />

        <div className="mb-3">

<label className="form-label">

Role

</label>

<select
className="form-select"
name="role"
value={form.role}
onChange={handleChange}
>

<option value="user">

User

</option>

<option value="admin">

Admin

</option>

</select>

</div>

        <button
          className="btn btn-success"
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Register"}
        </button>

      </form>

    </div>

  );

}

export default Register;