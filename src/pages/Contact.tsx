import NavBar from "../components/Navbar/NavBar";

const Contact = () => {
  return (
    <>
      <NavBar />
      <section className="s-pt-4 ed-grid s-center">
        <h1 className="s-pt-4">Contacto</h1>
        <form className="ed-grid s-grid-1 m-grid-2 lg-grid-3">
          <label>
            Nombre
            <input placeholder="Bob"></input>
          </label>
        </form>
      </section>
    </>
  );
};

export default Contact;
