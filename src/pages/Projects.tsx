import { useEffect, useState } from "react";
import BannerLastProject from "../components/Banner/BannerLastProject";
import BannerSimple from "../components/Banner/BannerSimple";
import CardProject from "../components/Cards/CardProject";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/NavBar";
import Blog from "../models/blog";

const Projects = () => {
  const [projects, setProjects] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("https://api--portafolio.herokuapp.com/blogs")
      .then((response) => response.json())
      .then((data) => setProjects(data.data));
  }, []);

  return (
    <>
      <NavBar />
      <BannerLastProject />
      {/* <BannerSimple /> */}

      {/* Projectos */}
      {(projects && (
        <section className="ed-grid s-grid-1 m-grid-2 lg-grid-3 s-pt-4">
          {projects.map((project) => (
            <CardProject key={project.id} {...project} />
          ))}
        </section>
      )) || (
        <div className="s-center">
          <h1>Loading...</h1>
        </div>
      )}

      {/* Logros */}
      <BannerSimple />
      <Footer />
    </>
  );
};

export default Projects;
