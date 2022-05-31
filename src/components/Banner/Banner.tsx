import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner l-section s-py-4">
      {/* <!-- Separación del contenido en columnas --> */}
      <div className="ed-grid lg-grid-2 row-gap banner__content">
        {/* <!-- Contenido de la columna 1 --> */}
        <div className="s-column s-main-center lg-main-center lg-cross-start s-center lg-left">
          <h1 className="banner__title">
            ¡Hola! <br /> Soy Jonathan Bello, Desarrollador Web
          </h1>
          {/* <!-- Botones --> */}
          <div className="s-main-center">
            <Link className="button--white s-mr-2 m-mb-0" to="/Projects">
              Mira mis proyectos
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.fenix.artesanos_a_la_mano"
              className={"button--link"}
            >
              Ver mi ultimo proyecto{""}
            </a>
          </div>
        </div>

        {/* <!-- Contenido de la columna 2 --> */}
        <div className="">
          <div className="img-container s-ratio-16-9">
            <img
              className="s-radius-1"
              src="https://res.cloudinary.com/fenixgames/image/upload/v1653971421/PortafolioWeb/mdohdpmpsk4n3vg0teab.jpg"
              alt="last project"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
