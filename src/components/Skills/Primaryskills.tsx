import Skillcard from "./Skillcard";

const Primaryskills = () => {
  return (
    <section className="section s-py-4">
      <div className="ed-container s-main-center">
        <h2 className="s-center primaryskills__title">¿Qué puedo hacer?</h2>
        <div className="ed-item">
          <div className="ed-grid lg-grid-3">
            <Skillcard />
            <Skillcard />
            <Skillcard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Primaryskills;
