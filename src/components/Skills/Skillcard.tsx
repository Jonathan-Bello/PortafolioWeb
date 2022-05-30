import { ColorSwatchIcon } from "@heroicons/react/outline";

const Skillcard = () => {
  return (
    <article className="skillcard">
      <div className="s-main-center s-mb-1 lg-mb-2">
        <span className="skillcard__iconcontainer s-main-center s-cross-center">
          <ColorSwatchIcon className="skillcard__icon" />
        </span>
      </div>
      <h3 className="skillcard__title s-center s-mb-05 lg-mb-1">Skillcard</h3>
      <p className="skillcard__description s-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum non
        in illo fugit cumque eum quidem doloribus, modi ipsa consequuntur
        necessitatibus reprehenderit tempore ex dolor incidunt culpa eaque
        molestiae voluptas.
      </p>
    </article>
  );
};

export default Skillcard;
