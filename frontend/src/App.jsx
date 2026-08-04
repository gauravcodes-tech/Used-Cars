import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

/* Customer Layout */
import MainLayout from "./Layouts/MainLayout";
import Wishlist from "./pages/Wishlist";

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
import ViewCars from "./admin/pages/ViewCars";
import AddCar from "./admin/pages/AddCar";
import EditCar from "./admin/pages/EditCar";

function App() {
  return (
    <Routes>

      {/* ================= CUSTOMER ================= */}

      
      <Route element={<MainLayout />}>

      <Route path="/wishlist" element={<Wishlist />} />

        

        {/* <Route path="bookings" element={<Bookings />} />

        <Route path="settings" element={<Settings />} /> */}

        {/* <Route path="*" element={<NotFound />} /> */}

        <Route path="/" element={<Home />} />

        <Route path="/cars" element={<Cars />} />

        <Route path="/cars/:id" element={<CarDetails />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Route>

      {/* ================= ADMIN ================= */}

      <Route path="/admin" element={<ProtectedRoute> <AdminLayout /> </ProtectedRoute>}>

        <Route index element={<Dashboard />} />

        <Route path="view-cars" element={<ViewCars />} />

        <Route path="add-car" element={<AddCar />} />

        <Route path="edit-car/:id" element={<EditCar />} />

      </Route>

    </Routes>
  );
}

export default App;
