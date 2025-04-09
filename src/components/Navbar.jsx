import "../styles/navbar.scss";
import avatar from "../assets/avatar.png";
import { useLanguage } from "./LanguageContext";
import { useState } from "react";

function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <img src={avatar} alt="avatar" className="avatar" />

      {/* Burger visible uniquement sur mobile */}
      <button className="burger" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={isOpen ? "open" : ""}>
        <li><button onClick={() => scrollToSection("home")}>{t.home}</button></li>
        <li><button onClick={() => scrollToSection("profil")}>{t.about}</button></li>
        <li><button onClick={() => scrollToSection("competences")}>{t.skills}</button></li>
        <li><button onClick={() => scrollToSection("portfolio")}>{t.projects}</button></li>
        <li><button onClick={() => scrollToSection("contact")}>{t.contact}</button></li>
      </ul>

      <select
        className={`lang-select ${isOpen ? "open" : ""}`}
        value={language}
        onChange={handleLanguageChange}
        aria-label="Choisir une langue"
      >
        <option value="fr">🇫🇷 Français</option>
        <option value="en">🇬🇧 English</option>
        <option value="de">🇩🇪 Deutsch</option>
      </select>
    </nav>
  );
}

export default Navbar;