import { LanguageProvider } from "./components/LanguageContext";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profil from "./components/Profil";
import Competences from "./components/Competences";
import "./styles/main.scss";

function App() {
  return (
    
    <LanguageProvider>
      <Navbar />
      <Home />
      <Profil />
      <Competences />
      <Portfolio />
      <Contact />
    </LanguageProvider>
      
  );
}

export default App;
