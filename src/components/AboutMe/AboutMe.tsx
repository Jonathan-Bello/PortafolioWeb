import RowTools from "../RowTools/RowTools";

const AboutMe = () => {
  return (
    <section className="section l-section aboutme s-mt-4 lg-mt-0">
      <div className="ed-grid s-grid-1 m-grid-2">
        <div className="aboutme__foto s-cross-center s-main-center s-mb-2">
          <img src="./assets/img/MeAbout.png" alt="" />
        </div>

        <div className="aboutme__content">
          <div className="s-cross-center">
            <h1 className="s-mb-1 lg-mb-0">Un poco sobre mi</h1>

            <span className="s-mb-2 lg-mb-3">
              First of all, I wanted to say thanks for finding time to go
              through my page! Even if we won’t work together, I appreciate you
              considering me.
            </span>

            <span className="s-mb-1 lg-mb-4">
              My name is Jonathan, and I’m a 20-year-old web developer based in
              Teziutlán, Puebla.My passion is creating creative solutions for
              businesses, using the web and mobile platforms with beautiful
              design.
            </span>

            <div>
              <a className="aboutme__link" href="/">
                Conoce más sobre miii
              </a>
            </div>
          </div>

          <div className="s-pt-2">
            <h4>Principales tecnologías y herramientas</h4>
            <RowTools
              tools={[
                {
                  id: 2,
                  name: "React",
                  image: "./assets/svg/techs/React.svg",
                },
                {
                  id: 3,
                  name: "Flutter",
                  image: "./assets/svg/techs/Flutter.svg",
                },
                {
                  id: 4,
                  name: "Go",
                  image: "./assets/svg/techs/Golang.svg",
                },
                {
                  id: 5,
                  name: "Figma",
                  image: "./assets/svg/techs/Figma.svg",
                },
                {
                  id: 6,
                  name: "Sass",
                  image: "./assets/svg/techs/Sass.svg",
                },
                {
                  id: 7,
                  name: "TypeScript",
                  image: "./assets/svg/techs/Typescript.svg",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
