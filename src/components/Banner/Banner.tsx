import Button from "../Buttons/Button";

const Banner = () => {
  return (
    <section className="banner l-section s-py-4">
      {/* <!-- Separación del contenido en columnas --> */}
      <div className="ed-grid lg-grid-2 row-gap banner__content">
        {/* <!-- Contenido de la columna 1 --> */}
        <div className="s-column s-main-center lg-main-center lg-cross-start s-center lg-left">
          <h1 className="banner__title">Soy Jonathan el chido del lugar</h1>
          {/* <!-- Botones --> */}
          <div className="s-main-center">
            <a className="button--white s-mr-2 m-mb-0" href="/">
              Mira mis proyectos
            </a>
            <Button text="Ver mi ultimo proyecto" btnType={"button--link"} />
          </div>
        </div>

        {/* <!-- Contenido de la columna 2 --> */}
        <div className="">
          <div className="img-container s-ratio-16-9">
            <img
              className="s-radius-1"
              src="./assets/img/portada.png"
              alt="last project"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
