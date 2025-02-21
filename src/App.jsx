import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profil from "./components/Profil";
import Competences from "./components/Competences";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Profil />
      <Competences />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
