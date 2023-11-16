import {GiHamburgerMenu} from 'react-icons/gi'

import { NavLink } from "react-router-dom";
import "./NavbarComponents.css";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className='navbar-brand'>
        <img src="./src/assets/sapu.webp" alt="Sapu Icon" />

        <span>Sapu</span>

        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <GiHamburgerMenu color='#E8E8CC'/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink to="/beranda" className="nav-item">
              <li className="nav-link">beranda</li>
            </NavLink>
            <NavLink to="/kontak" className="nav-item">
              <li className="nav-link">kontak</li>
            </NavLink>
            <NavLink to="/tentang" className="nav-item">
              <li className="nav-link">tentang</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
