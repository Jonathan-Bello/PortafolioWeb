import Tech from "../../models/tech";

const RowTools = (props: IRowTools) => {
  return (
    <div className="rowtools">
      {/* <div className="rowtools__item figma"></div>
      <div className="rowtools__item react"></div>
      <div className="rowtools__item sass"></div>
      <div className="rowtools__item typescript"></div>
      <div className="rowtools__item golang"></div>
      <div className="rowtools__item flutter"></div> */}
      {props.tools.map((tech) => (
        <img key={tech.id} className="rowtools__item" src={tech.image} alt={tech.name} />
      ))}
    </div>
  );
};

interface IRowTools {
  tools: Tech[];
}

export default RowTools;
