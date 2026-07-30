import { Routes, Route } from "react-router-dom";

/* Customer Layout */
import MainLayout from "./Layouts/MainLayout";

/* Customer Pages */
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

/* Admin Layout */
import AdminLayout from "./admin/layout/AdminLayout";

/* Admin Pages */
import Dashboard from "./admin/pages/Dashboard";
import AddCar from "./admin/pages/AddCar";
import ViewCars from "./admin/pages/ViewCars";
import EditCar from "./admin/pages/EditCar";

function App() {
  return (
    <Routes>

      {/* ================= CUSTOMER ================= */}

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/cars" element={<Cars />} />

        <Route path="/cars/:id" element={<CarDetails />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Route>

      {/* ================= ADMIN ================= */}

      <Route path="/admin" element={<AdminLayout />}>

        <Route index element={<Dashboard />} />

        <Route path="view-cars" element={<ViewCars />} />

        <Route path="add-car" element={<AddCar />} />

        <Route path="edit-car" element={<EditCar />} />

      </Route>

    </Routes>
  );
}

export default App;
