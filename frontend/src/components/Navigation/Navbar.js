import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars ,faHome,faMale,faFemale,faChildren, faPhone} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faBars} color="black" />
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
           
          <NavLink to="/"><FontAwesomeIcon icon={faHome} />Home</NavLink>
        </li>
        <li>
            
          <NavLink to="/Men"><FontAwesomeIcon icon={faMale} />Men</NavLink>
        </li>
        <li>
           
          <NavLink to="/Women"> <FontAwesomeIcon icon={faFemale} />Women</NavLink>

        </li>
        <li>
            
          <NavLink to="/Kids"><FontAwesomeIcon icon={faChildren} />Kids</NavLink>
        </li>
        <li>
            
          <NavLink to="/contact"><FontAwesomeIcon icon={faPhone} />Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
