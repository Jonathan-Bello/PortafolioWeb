import {
  BookmarkAltIcon,
  CollectionIcon,
  HomeIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import Button from "../Buttons/Button";

const NavBar = () => {
  return (
    <>
      <header className="ed-header s-py-2">
        <div className="ed-grid lg-grid-5">
          {/* <!-- Logo  --> */}
          <div className="s-cross-center s-main-center lg-main-start">
            <img className="logo" src="./assets/svg/Wordmark.svg" alt="" />
          </div>

          {/* <!-- Menu --> */}
          <nav className="nav lg-cols-3 s-cross-center ed-grid full">
            {/* <!--  Menú de navegación    --> */}
            <ul className="menu s-main-distribute lg-to-center s-mb-0 s-pl-0 s-py-1">
              {/* <!--   Item de menú. Contiene link e ícono     --> */}
              <li className="lg-mr-3">
                <NavLink className="link s-column s-cross-center" to="/">
                  {/* <!--  El ícono sólo se mostrará en la versión móvil  --> */}
                  <HomeIcon className="icon to-lg s-mb-0" />
                  <span>Inicio</span>
                </NavLink>
              </li>
              <li className="lg-mr-3">
                <NavLink
                  className="link s-column s-cross-center"
                  to="/projects"
                >
                  <CollectionIcon className="icon to-lg s-mb-0" />
                  <span>Proyectos</span>
                </NavLink>
              </li>
              <li className="lg-mr-3">
                <NavLink className="link s-column s-cross-center" to="/blog">
                  <BookmarkAltIcon className="icon to-lg s-mb-0" />
                  <span>Blog</span>
                </NavLink>
              </li>
              <li className="lg-mr-3">
                <NavLink className="link s-column s-cross-center" to="/aboutMe">
                  <SearchIcon className="icon to-lg s-mb-0" />
                  <span>Acerca de mi</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="from-lg lg-right">
            <Button text={"Contactame"} btnType={"button"} />
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
