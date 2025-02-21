import "../styles/profil.scss";
import profil from "../assets/profil.webp";

function Projects() {
  return (
    <section className="profil" id="profil">
      <h1>A propos de moi</h1>
      <div className="separator">
        <img src={profil} alt="profil"/>
        <p>
        Je m'appelle Yoann Scherrer, passionné par le développement web et les nouvelles technologies. 
        Après avoir obtenu mon baccalauréat Scientifique en 2020, j'ai suivi un an de prépa intégrée chez EPITA, puis deux ans de licence Math-Info avant de me spécialiser dans le domaine du web.
        J'ai ensuite suivi une formation de développeur web chez OpenClassrooms d'octobre 2023 jusqu'à son achèvement, où j'ai acquis des compétences en HTML, CSS, JavaScript, React, et bien plus encore.
        Toujours curieux et motivé, j'aime relever de nouveaux défis techniques et travailler sur des projets concrets. 
        Mon objectif est de concevoir des applications web performantes et intuitives tout en continuant à me perfectionner dans ce domaine en constante évolution.
        </p>
      </div>
    </section>
  );
}

export default Projects;
