import PortfolioPicOne from "../assets/Last-landscaping-photos-40.jpg";
import PortfolioPicTwo from "../assets/Last-landscaping-photos-13.jpg";
import PortfolioPicThree from "../assets/Last-landscaping-photos-60.jpg";
import PortfolioPicFour from "../assets/Last-landscaping-photos-5.jpg";
import PortfolioPicFive from "../assets/More-landscaping-photos-59.jpg";
import "../App.css";

const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className="portfolio-section d-flex align-items-center"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="container-portfolio col-12 col-md-12 col-lg-5 showcase-portfolio">
              <div className="container grid">
                <h1 className="section-header">Portfolio</h1>
                <p className="section-paragraph mx-auto">
                  Landshapez takes pride in showcasing a diverse portfolio of
                  previous work that reflects our expertise in landscaping
                  services. Our portfolio features an array of projects spanning
                  various landscaping aspects, including gardening, paving and
                  tiling, retaining, and fencing. From lush garden
                  transformations and intricately paved pathways to sturdy
                  retaining walls and stylish fencing solutions. You can browse
                  through our portfolio to gain inspiration and confidence in
                  our ability to bring your landscaping visions to life,
                  tailored to your unique preferences and needs.
                </p>
                <button
                  className="button bolder"
                  onClick={() => (window.location.href = "/portfolio")}
                >
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="picture-container col-12 col-md-12 col-lg-5 showcase-pictures">
              <div className="portfolio-picture-background">
                <div className="row">
                  <div className="column">
                    <img
                      src={PortfolioPicOne}
                      className="portfolio-picture"
                      alt="Entrance with clay pavers"
                    />
                  </div>
                  <div className="column">
                    <img
                      src={PortfolioPicTwo}
                      className="portfolio-picture"
                      alt="Tiled pathway"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <img
                      src={PortfolioPicThree}
                      className="portfolio-picture"
                      alt="Garden with tiled path surrounded by white stone filler"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <img
                      src={PortfolioPicFour}
                      className="portfolio-picture"
                      alt="Backyard with ready lawn and planter box"
                    />
                  </div>
                  <div className="column">
                    <img
                      src={PortfolioPicFive}
                      className="portfolio-picture"
                      alt="Front garden with paved path"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
