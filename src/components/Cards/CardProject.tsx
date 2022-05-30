import Blog from "../../models/blog";
import RowTools from "../RowTools/RowTools";

const CardProject = (props: Blog) => {
  return (
    <article className="cardproject s-radius-bl s-radius-br">
      <div className="img-container s-ratio-16-9 s-radius-tl s-radius-tr">
        <img src={props.image} alt="project" />
      </div>

      <div className="cardproject__data s-pxy-2">
        <span className="cardproject__date s-mb-1">
          {Date.parse(props.updated_at)
            ? new Date(props.updated_at).toLocaleDateString()
            : ""}
        </span>
        <h3 className="cardproject__title s-mb-1">{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.url} className="button s-mb-4">
          Ver proyecto
        </a>
        <RowTools tools={props.techs} />
      </div>
    </article>
  );
};

export default CardProject;
