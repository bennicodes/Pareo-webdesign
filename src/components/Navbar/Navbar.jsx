import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import { useTheme } from "../../Context/ThemeContext";
import styles from "./Navbar.module.css";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        {/* --- Your Brand Logo SVG --- */}
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logoLink}>
            <svg
              className={styles.logoSvg}
              viewBox="0 0 400 150"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="pareoGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  {/* These now use variables so the logo looks good on both themes */}
                  <stop offset="0%" stopColor="var(--accent-color)" />
                  <stop offset="100%" stopColor="var(--logo-stop-secondary)" />
                </linearGradient>
              </defs>
              <path
                d="M 10 90 Q 80 30, 200 90 Q 320 150, 390 90 Q 320 30, 200 90 Q 80 150, 10 90 Z"
                fill="url(#pareoGradient)"
              />
              <text
                x="200"
                y="105"
                fontFamily="Inter, sans-serif"
                fontWeight="700"
                fontSize="42"
                fill="var(--logo-text-inside)"
                textAnchor="middle"
              >
                Pareo
              </text>
            </svg>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul
          className={`${styles.navLinks} ${
            isMenuActive ? styles.navLinksActive : ""
          }`}
        >
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => setIsMenuActive(false)}
            >
              Hjem
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tjenester"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => setIsMenuActive(false)}
            >
              Tjenester
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/om-oss"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => setIsMenuActive(false)}
            >
              Om oss
            </NavLink>
          </li>
        </ul>

        <div className={styles.actions}>
          {/* Theme Toggle */}
          <button
            className={styles.themeToggle}
            onClick={setIsDarkMode}
            type="button"
          >
            <FontAwesomeIcon icon={isDarkMode === "dark" ? faSun : faMoon} />
          </button>

          {/* Call to Action */}
          <NavLink
            to="/kontakt"
            className={styles.contactButton}
            onClick={() => setIsMenuActive(false)}
          >
            Kontakt oss
          </NavLink>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
