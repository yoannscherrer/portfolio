import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "./LanguageContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../styles/portfolio.scss";
import projet1 from "../assets/projet1.webp";
import projet2 from "../assets/projet2.webp";
import projet3 from "../assets/projet3.webp";
import projet4 from "../assets/projet4.webp";
import projet5 from "../assets/projet5.webp";
import projectsData from "../projects.json";

// Associer les images aux clés
const imagesMap = {
  booki: projet1,
  sophie_bluel: projet2,
  nina_carducci: projet3,
  kasa: projet4,
  mon_vieux_grimoire: projet5
};

// Fusionner données JSON + image
const projects = projectsData.map((project) => ({
  ...project,
  image: imagesMap[project.key]
}));

function Portfolio() {
  const { t } = useLanguage();
  return (
    <section className="portfolio" id="portfolio">
      <h1>{t.titre_portfolio}</h1>
      <p className="description">{t.texte_portfolio}</p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop={true}
        style={{ padding: "0 50px 50px 50px" }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project">
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Voir le projet ${project.title} sur GitHub`}>
                <img src={project.image} alt={`Aperçu du projet ${project.title}`} />
              </a>
              <h1>{t.projets[project.key]}</h1>
              <p>{t.projets_description[project.key]}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Portfolio;