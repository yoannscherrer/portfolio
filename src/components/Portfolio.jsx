import { Swiper, SwiperSlide } from "swiper/react";
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
    title: "Booki (HTML & CSS)",
    image: projet1,
    github: "https://github.com/yoannscherrer/Projet-2",
  },
  {
    title: "Site de Sophie Bluel (JavaScript)",
    image: projet2,
    github: "https://github.com/yoannscherrer/Projet-3",
  },
  {
    title: "Optimisation SEO du site de Nina Carducci",
    image: projet3,
    github: "https://github.com/yoannscherrer/yoannscherrer.github.io",
  },
  {
    title: "Kasa (React)",
    image: projet4,
    github: "https://github.com/yoannscherrer/kasa",
  },
  {
    title: "Mon vieux grimoire (Node.js et Express)",
    image: projet5,
    github: "https://github.com/yoannscherrer/mon_vieux_grimoire_backend",
  }
];

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h1>Mon Portfolio</h1>
      <p className="description">Voici quelques projets que j'ai réalisés :</p>

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
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
              <h3>{project.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Portfolio;

