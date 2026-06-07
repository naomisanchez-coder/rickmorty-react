import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <Rocket size={24} />
        <span>Rick & Morty Universe</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/entities">Entities</Link>
      </div>
    </nav>
  );
}

export default Navbar;