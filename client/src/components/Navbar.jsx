
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-3 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">🌳 Digi-FamTree</h1>
      <div className="space-x-6 text-gray-700">
        <Link to="/login">Login</Link>
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/register" className="hover:text-blue-600">Register</Link>
        <Link to="/profile" className="hover:text-blue-600">My Profile</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
