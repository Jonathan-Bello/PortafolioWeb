import AboutMe from "../components/AboutMe/AboutMe";
import Banner from "../components/Banner/Banner";
import BannerSimple from "../components/Banner/BannerSimple";
import LastProjects from "../components/Carousel/LastProjects";
import Footer from "../components/Footer/Footer";
import MyTechs from "../components/MyTechs/MyTechs";
import NavBar from "../components/Navbar/NavBar";
import Primaryskills from "../components/Skills/Primaryskills";

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Primaryskills />
      <AboutMe />
      {/* <BestProjects /> */}
      <LastProjects />
      <MyTechs />
      <BannerSimple />
      <Footer />
    </>
  );
};

export default Home;
