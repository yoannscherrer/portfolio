import "../styles/navbar.scss";
import avatar from "../assets/avatar.png";
import { useLanguage } from "./LanguageContext";

function Navbar() {
  const { t, language, setLanguage } = useLanguage();

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <nav className="navbar">
      <img src={avatar} alt="avatar" />
      <ul>
        <li><button onClick={() => scrollToSection("home")}>{t.home}</button></li>
        <li><button onClick={() => scrollToSection("profil")}>{t.about}</button></li>
        <li><button onClick={() => scrollToSection("competences")}>{t.skills}</button></li>
        <li><button onClick={() => scrollToSection("portfolio")}>{t.projects}</button></li>
        <li><button onClick={() => scrollToSection("contact")}>{t.contact}</button></li>
      </ul>
      <select className="lang-select" value={language} onChange={handleLanguageChange}>
        <option value="fr">🇫🇷 Français</option>
        <option value="en">🇬🇧 English</option>
        <option value="de">🇩🇪 Deutsch</option>
      </select>
    </nav>
  );
}

export default Navbar;
