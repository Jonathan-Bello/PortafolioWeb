const BannerLastProject = () => {
  return (
    <section className="bannerLP s-py-4">
      {/* <!-- Separación del contenido en columnas --> */}
      <div className="ed-grid lg-grid-2 row-gap bannerLP__content">
        {/* <!-- Contenido de la columna 1 --> */}
        <div className="s-column s-main-center lg-main-center lg-cross-start s-center lg-left">
          <span className="bannerLP__LPtext s-mb-1">Ultimo proyecto</span>
          <h1 className="bannerLP__title s-mb-2">Valorarte</h1>
          <p>
            Aplicación móvil que permite centralizar los negocios informales de
            artesanías de la región del estado de Puebla en un solo lugar a la
            palma de tu mano.
          </p>
          {/* <!-- Botones --> */}
          <div className="s-main-center">
            <a className="button small s-mr-2 m-mb-0" href="/">
              Ver proyecto
            </a>
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

export default BannerLastProject;
