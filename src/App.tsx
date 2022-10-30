import "./assets/styles/all.scss";
import Header from "./components/Header";
import BannerHero from "./components/BannerHero";
import DesignColab from "./components/DesginColab";
import DesignLove from "./components/DesignLove";
import Dedicated from "./components/Dedicated";
import LevelUp from "./components/LevelUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <BannerHero />
      <DesignColab />
      <DesignLove />
      <Dedicated />
      <LevelUp />
      <Footer />
    </>
  );
}

export default App;
