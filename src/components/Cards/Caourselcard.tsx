import Blog from "../../models/blog";

const Caourselcard = (props: Blog) => {
  return (
    <article className="ed-grid s-grid-1 m-grid-2">
      <div className="s-mb-4 lg-mb-0">
        <div className="img-container s-ratio-16-9">
          <img className="s-radius-1" src={props.image} alt="last project" />
        </div>
      </div>
      <div className="s-cross-center">
        <h2 className="s-mb-1 lg-mb-2">{props.title}</h2>
        <p>{props.description}</p>
        <br />
        <div className="">
          <a href={props.url} className="button">
            Ver proyecto
          </a>
        </div>
      </div>
    </article>
  );
};

export default Caourselcard;
