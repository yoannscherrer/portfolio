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


const projects = [
  {
    key: "booki",
    image: projet1,
    github: "https://github.com/yoannscherrer/Projet-2",
  },
  {
    key: "sophie_bluel",
    image: projet2,
    github: "https://github.com/yoannscherrer/Projet-3",
  },
  {
    key: "nina_carducci",
    image: projet3,
    github: "https://github.com/yoannscherrer/yoannscherrer.github.io",
  },
  {
    key: "kasa",
    image: projet4,
    github: "https://github.com/yoannscherrer/kasa",
  },
  {
    key: "mon_vieux_grimoire",
    image: projet5,
    github: "https://github.com/yoannscherrer/mon_vieux_grimoire_backend",
  }
];

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
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ padding: "0 50px 50px 50px" }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project">
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Voir le projet ${project.title} sur GitHub`}>
                <img src={project.image} alt={`Aperçu du projet ${project.title}`} />
                <span className="visually-hidden">Voir le projet {project.title} sur GitHub</span>
              </a>
              <h3>{t.projets[project.key]}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Portfolio;

