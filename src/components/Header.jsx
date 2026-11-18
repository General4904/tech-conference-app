import "../styles/header.css";
import { useState } from "react";
import { FiCalendar, FiHome, FiUsers } from "react-icons/fi";

const Header = ({ conferenceName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationItems = [
    { label: "HOME", href: "#top", Icon: FiHome },
    { label: "SCHEDULE", href: "#schedule", Icon: FiCalendar },
    { label: "SPEAKERS", href: "#speakers", Icon: FiUsers },
  ];

  return (
    <header
      className="w-full flex justify-between items-center py-2 mb-3"
      id="top"
    >
      <div className="brand py-3 self-center">{conferenceName}</div>
      <nav className="header-nav" aria-label="Main navigation">
        <button
          className={`hamburger-init${isMenuOpen ? " active" : ""}`}
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="bar top-bar" aria-hidden="true"></span>
          <span className="bar middle-bar" aria-hidden="true"></span>
          <span className="bar bottom-bar" aria-hidden="true"></span>
        </button>

        <ul
          className={`nav-list${isMenuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          {navigationItems.map(({ label, href, Icon }) => (
            <li key={href}>
              <a
                className="nav-item transition"
                href={href}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className="nav-icon" aria-hidden="true" focusable="false" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
