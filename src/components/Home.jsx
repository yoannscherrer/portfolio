import "../styles/home.scss";
import background from "../assets/background.webp";

function Home() {
  return (
    <section className="home" id="home">
      <h1>Yoann Scherrer</h1>
      <p>Développeur Web</p>
      <button onClick={() => document.getElementById("profil").scrollIntoView({ behavior: "smooth" })} className="btn">Qui suis-je?</button>
    </section>
  );
}

export default Home;
