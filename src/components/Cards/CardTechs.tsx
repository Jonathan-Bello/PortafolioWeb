import Tech from "../../models/tech";

const CardTechs = (props: Tech) => {
  return (
    <article className="cardtech">
      <img className="cardtech__image" src={props.image} alt={props.name} />
      <span className="cardtech__title s-pt-2">{props.name}</span>
    </article>
  );
};

export default CardTechs;
