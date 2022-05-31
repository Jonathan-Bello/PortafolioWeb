import { CodeIcon, ColorSwatchIcon, UserGroupIcon } from "@heroicons/react/outline";

const Skillcard = (props: ISkillCard) => {
  return (
    <article className="skillcard">
      <div className="s-main-center s-mb-1 lg-mb-2">
        <span className="skillcard__iconcontainer s-main-center s-cross-center">
          {props.icon === "web" && <CodeIcon className="skillcard__icon" />}
          {props.icon === "design" && (
            <ColorSwatchIcon className="skillcard__icon" />
          )}
          {props.icon === "other" && (
            <UserGroupIcon className="skillcard__icon" />
          )}
        </span>
      </div>
      <h3 className="skillcard__title s-center s-mb-05 lg-mb-1">
        {props.title}
      </h3>
      <p className="skillcard__description s-center">{props.description}</p>
    </article>
  );
};

export default Skillcard;

interface ISkillCard {
  title: string;
  description: string;
  icon: string;
}
