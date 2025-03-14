import "../styles/home.scss";
import { useLanguage } from "./LanguageContext";

function Home() {
  const { t } = useLanguage();
  return (
    <section className="home" id="home">
      <h1>Yoann Scherrer</h1>
      <p>{t.texte_home}</p>
      <button onClick={() => document.getElementById("profil").scrollIntoView({ behavior: "smooth" })} className="btn">{t.bouton_home}</button>
    </section>
  );
}

export default Home;
