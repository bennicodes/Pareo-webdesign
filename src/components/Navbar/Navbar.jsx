import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuActive((prev) => !prev);
  };

  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}>
        <Link to="/" className={styles.titleLink}>
          Limited Designs
        </Link>
      </h1>
      <nav>
        <ul
          className={`${styles.navLinks} ${
            isMenuActive ? styles.navLinksActive : ""
          }`}
        >
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/"
            >
              Hjem
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/tjenester"
            >
              Tjenester
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/om-oss"
            >
              Om oss
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" className={styles.contactLink}>
              Kontakt oss
            </NavLink>
          </li>
        </ul>
      </nav>
      <Button classname={styles.menuButton} onClick={handleMenuToggle}>
        <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
      </Button>
    </div>
  );
};

export default Navbar;
