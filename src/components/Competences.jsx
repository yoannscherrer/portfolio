import "../styles/competences.scss";
import cvImage from "../assets/cv.webp";
import cvFile from "../assets/cv.pdf";

function Competences() {
  return (
    <section className="competences" id="competences">
      <h1>Mes Compétences</h1>
      <p className="description">
        Voici un aperçu de mes compétences techniques ainsi que mon CV téléchargeable.
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
        </div>

        <div className="cv">
          <img src={cvImage} alt="Aperçu du CV" />
          <a href={cvFile} download="Yoann_Scherrer_CV.pdf">
            <button className="download-btn">Télécharger mon CV</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Competences;
