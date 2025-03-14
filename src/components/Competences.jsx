import "../styles/competences.scss";
import cvFR from "../assets/cv_fr.pdf";
import cvEN from "../assets/cv_en.pdf";
import cvDE from "../assets/cv_de.pdf";

import cvImageFR from "../assets/cv_fr.webp";
import cvImageEN from "../assets/cv_en.webp";
import cvImageDE from "../assets/cv_de.webp";

import { useLanguage } from "./LanguageContext";

function Competences() {
  const { t, language } = useLanguage();

  const cvFile = language === "fr" ? cvFR : language === "en" ? cvEN : cvDE;
  const cvImage = language === "fr" ? cvImageFR : language === "en" ? cvImageEN : cvImageDE;

  return (
    <section className="competences" id="competences">
      <h1>{t.titre_competences}</h1>
      <p className="description">
        {t.texte_competences}
      </p>

      <div className="content">
        <div className="skills">
          <div className="skill">
            <p>HTML & CSS</p>
            <div className="bar">
              <div className="fill" style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="skill">
            <p>JavaScript</p>
            <div className="bar">
              <div className="fill" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill">
            <p>Git & Github</p>
            <div className="bar">
              <div className="fill" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="skill">
            <p>React</p>
            <div className="bar">
              <div className="fill" style={{ width: "75%" }}></div>
            </div>
          </div>

          <div className="skill">
            <p>Node.js</p>
            <div className="bar">
              <div className="fill" style={{ width: "60%" }}></div>
            </div>
          </div>

          <div className="skill">
            <p>Express</p>
            <div className="bar">
              <div className="fill" style={{ width: "60%" }}></div>
            </div>
          </div>

          <div className="skill">
            <p>MongoDB</p>
            <div className="bar">
              <div className="fill" style={{ width: "50%" }}></div>
            </div>
          </div>

          <div className="skill">
            <p>Vue.js</p>
            <div className="bar">
              <div className="fill" style={{ width: "30%" }}></div>
            </div>
          </div>

        </div>

        <div className="cv">
          <img src={cvImage} alt="Aperçu du CV" />
          <a href={cvFile} download="Yoann_Scherrer_CV.pdf">
            <button className="download-btn">{t.bouton_competences}</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Competences;
