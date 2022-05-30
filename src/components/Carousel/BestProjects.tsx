// import { useEffect, useState } from "react";
// import Glider from "react-glider";
// import "glider-js/glider.min.css";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
// import Caourselcard from "../Cards/Caourselcard";

// import Blog from "../../models/blog";

// const BestProjects = () => {
//   const [projects, setProjects] = useState<Blog[]>([]);

//   useEffect(() => {
//     fetch("https://api--portafolio.herokuapp.com/blogs/favorites")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.data);
//         setProjects(data.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <>
//       <section className="carouselBP l-section">
//         <div className="carouselBP__container ed-grid s-grid-8 lg-grid-12 s-cross-center">
//           <button aria-label="Anterior" className="carouselBP__back">
//             <ChevronLeftIcon className="s-pt-05" />
//           </button>
//           <div className="s-cols-6 lg-cols-10">
//             <Glider
//               draggable
//               hasArrows
//               arrows={{
//                 prev: ".carouselBP__back",
//                 next: ".carouselBP__next",
//               }}
//               slidesToShow={1}
//               scrollToSlide={1}
//             >
//               <Caourselcard {...projects[0]} />
//               <Caourselcard {...projects[1]} />
//               <Caourselcard {...projects[2]} />
//               <Caourselcard {...projects[3]} />
//               <Caourselcard {...projects[4]} />
//             </Glider>
//           </div>
//           <button aria-label="Siguiente" className="carouselBP__next">
//             <ChevronRightIcon className="s-pt-05" />
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BestProjects;

import React from 'react'

const BestProjects = () => {
  return (
    <div>BestProjects</div>
  )
}

export default BestProjects