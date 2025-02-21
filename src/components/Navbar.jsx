import "../styles/navbar.scss";
import avatar from "../assets/avatar.png";

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <img src={avatar} alt="avatar"/>
      <ul>
        <li><button onClick={() => scrollToSection("home")}>Accueil</button></li>
        <li><button onClick={() => scrollToSection("profil")}>Profil</button></li>
        <li><button onClick={() => scrollToSection("competences")}>Compétences</button></li>
        <li><button onClick={() => scrollToSection("portfolio")}>Portfolio</button></li>
        <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
