import "react-glidejs/dist/index.css";
import { useRef, useEffect, useState } from "react";
import Glide from "react-glidejs";
import Blog from "../../models/blog";
import Caourselcard from "../Cards/Caourselcard";

const LastProjects = () => {
  const gliderRef = useRef(null);
  const [projects, setProjects] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("https://api--portafolio.herokuapp.com/blogs/favorites")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setProjects(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="carouselBP l-section">
      <div className="carouselBP__container">
        <Glide
          ref={gliderRef}
          type="slider"
          customSlideAnimation={{
            timeout: 500,
            classNames: "fade",
          }}
          peek={100}
          perView={1}
          startAt={0}
          focusAt="center"
        >
          {projects.map((project) => (
            <Caourselcard {...project} />
          ))}
        </Glide>
      </div>
    </section>
  );
};

export default LastProjects;
