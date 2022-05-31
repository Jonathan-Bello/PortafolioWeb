import Skillcard from "./Skillcard";

const Primaryskills = () => {
  return (
    <section className="section s-py-4">
      <div className="ed-container s-main-center">
        <h2 className="s-center primaryskills__title">¿Qué puedo hacer?</h2>
        <div className="ed-item">
          <div className="ed-grid lg-grid-3">
            <Skillcard
              icon="design"
              title="Diseño atractivo"
              description="Uno de mis principales fuertes es la creación de sitios y aplicaciones llamativas, siguiendo la teoría efectiva del diseño. "
            />
            <Skillcard
              title={"Desarrollo Web y Mobile"}
              description={
                "Crear sitios y aplicaciones multiplataforma responsivas para cualquier dispositivos, llevando los diseños a la realidad."
              }
              icon={"web"}
            />
            <Skillcard
              title={"Dirección de equipos"}
              description={
                "Liderar, administrar y llevar a flote un proyecto, al sacar el mejor potencial de mis compañeros usando principalmente metodologías agiles."
              }
              icon={"other"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Primaryskills;
