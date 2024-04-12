import Header from "./Header";
import About from "./About";
import Gardening from "./Gardening";
import PavingTiling from "./PavingTiling";
import Retaining from "./Retaining";
import Fencing from "./Fencing";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import "../App.css";

const Home = () => {
  return (
    <div className="">
      <header>
        <div className="">
          <Header />
        </div>
      </header>
      <main>
        <div className="">
          <About />
        </div>
        <div className="">
          <Gardening />
        </div>
        <div className="">
          <PavingTiling />
        </div>
        <div className="">
          <Retaining />
        </div>
        <div className="">
          <Fencing />
        </div>
        <div className="">
          <Portfolio />
        </div>
        <div className="">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Home;
