import "../styles/profil.scss";
import profil from "../assets/profil.webp";
import { useLanguage } from "./LanguageContext";

function Projects() {
  const { t } = useLanguage();

  return (
    <section className="profil" id="profil">
      <h1>{t.titre_profil}</h1>
      <div className="separator">
        <img src={profil} alt="profil"/>
        <p>{t.texte_profil}</p>
      </div>
    </section>
  );
}

export default Projects;
