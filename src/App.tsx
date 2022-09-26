import "./assets/styles/all.scss";
import Header from "./components/Header";
import BannerHero from "./components/BannerHero";
import DesignColab from "./components/DesginColab";
import DesignLove from "./components/DesignLove";
import Dedicated from "./components/Dedicated";

function App() {
  return (
    <>
      <Header />
      <BannerHero />
      <DesignColab />
      <DesignLove />
      <Dedicated />
    </>
  );
}

export default App;
