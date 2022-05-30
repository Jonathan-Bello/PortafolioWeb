import { useEffect, useState } from "react";
import Tech from "../../models/tech";
import CardTechs from "../Cards/CardTechs";

const MyTechs = () => {
  const [techs, setTechs] = useState<Tech[]>([]);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    const data = await fetch("https://api--portafolio.herokuapp.com/techs")
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.log(err));
    setTechs(data.data);
  };

  return (
    <section className="section s-py-3">
      <h2 className="s-center s-mb-4">Tecnologias que he usado</h2>
      <div className="ed-grid s-grid-3 lg-grid-6">
        {techs.map((tech) => (
          <CardTechs key={tech.id} {...tech} />
        ))}
      </div>
    </section>
  );
};

export default MyTechs;
