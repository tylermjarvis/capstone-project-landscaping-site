import LogoImage from "../assets/Landshapez_Logo.png";
import PortfolioPicOne from "../assets/Last-landscaping-photos-60.jpg";
import PortfolioPicTwo from "../assets/Landscaping-photo-71.jpg";
import PortfolioPicThree from "../assets/Last-landscaping-photos-47.jpg";
import PortfolioPicFour from "../assets/More-landscaping-photos-27.jpg";
import PortfolioPicFive from "../assets/Landscaping-photo-58.jpg";
import PortfolioPicSix from "../assets/Landscaping-photo-11.jpg";
import PortfolioPicSeven from "../assets/Last-landscaping-photos-5.jpg";
import PortfolioPicEight from "../assets/Last-landscaping-photos-56.jpg";
import PortfolioPicNine from "../assets/Landscaping-photo-1.jpg";
import PortfolioPicTen from "../assets/Landscaping-photo-14.jpg";
import PortfolioPicEleven from "../assets/Landscaping-photo-19.jpg";
import PortfolioPicTwelve from "../assets/Landscaping-photo-42.jpg";
import PortfolioPicThirteen from "../assets/More-landscaping-photos-34.jpg";
import PortfolioPicFourteen from "../assets/Fencing-3.jpg";
import PortfolioPicFifteen from "../assets/Landscaping-photo-68.jpg";
import PortfolioPicSixteen from "../assets/Last-landscaping-photos-40.jpg";
import PortfolioPicSeventeen from "../assets/More-landscaping-photos-60.jpg";
import PortfolioPicEighteen from "../assets/Landscaping-photo-65.jpg";
import PortfolioPicNineteen from "../assets/More-landscaping-photos-15.jpg";
import PortfolioPicTwenty from "../assets/Landscaping-photo-18.jpg";
import PortfolioPicTwentyOne from "../assets/Landscaping-photo-38.jpg";
import PortfolioPicTwentyTwo from "../assets/Landscaping-photo-45.jpg";
import PortfolioPicTwentyThree from "../assets/More-landscaping-photos-23.jpg";
import PortfolioPicTwentyFour from "../assets/Landscaping-photo-52.jpg";
import "../App.css";
import FilterButtons from "../js/filter-by";
import "../js/scroll-animation";
import "../js/sticky-navbar";

const PortfolioPage = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-xl">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={LogoImage}
              className="logo"
              alt="Landshapez logo"
              width="150"
              height="20"
            />
          </a>
          <button
            className="navbar-toggler collapsed d-flex d-xl-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav nav-list">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/portfolio">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        {/* <!-- Portfolio Section --> */}
        <section id="portfolio" className="portfolio-page">
          <div className="container">
            <div className="row showcase-portfolio-page">
              <h1 className="section-header">Portfolio</h1>
              <p className="section-paragraph mx-auto">
                Our portfolio features a user-friendly filter option, allowing
                you to easily retrieve assets specific to the service
                you&quot;re interested in. Whether it&quot;s gardening, paving
                and tiling, retaining or fencing, you can quickly access
                relevant assets that inspire and inform your project ideas. Our
                portfolio offers a visual journey through our expertise and
                creativity. Start exploring today to find inspiration for your
                next landscaping endeavour with Landshapez.
              </p>

              <p className="filter-header">Filter By:</p>
              <div
                className="filter-container text-center mx-auto"
                id="buttons"
              >
                <button className="button-value" data-filter="all">
                  All
                </button>
                <button className="button-value" data-filter="gardening">
                  Gardening
                </button>
                <button className="button-value" data-filter="paving-tiling">
                  Paving/Tiling
                </button>
                <button className="button-value" data-filter="retaining">
                  Retaining
                </button>
                <button className="button-value" data-filter="fencing">
                  Fencing
                </button>
                <FilterButtons />
              </div>
            </div>

            {/* <!-- Portfolio --> */}
            <div className="portfolio-picture-container">
              <div className="portfolio-page-picture-background">
                <div id="pictures" className="figures">
                  {/* <!-- Grid --> */}
                  <figure className="portfolio-figure figure-item gardening paving-tiling">
                    <img
                      src={PortfolioPicOne}
                      className="picture"
                      alt="Side path with pavers, mondo grass and garden"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">
                        Mondo grass between pavers with fern and bromeliad
                        garden
                      </p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item gardening">
                    <img
                      src={PortfolioPicTwo}
                      className="picture"
                      alt="Maintained garden"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">Maintained garden</p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item gardening">
                    <img
                      src={PortfolioPicThree}
                      className="picture"
                      alt="Back garden with ready lawn"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">Backyard with ready lawn</p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item gardening">
                    <img
                      src={PortfolioPicFour}
                      className="picture"
                      alt="Ready lawn"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">Ready lawn</p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item gardening">
                    <img
                      src={PortfolioPicFive}
                      className="picture"
                      alt="Pebble filler in garden"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">
                        Garden with weed mat and pebble filler
                      </p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item gardening">
                    <img
                      src={PortfolioPicSix}
                      className="picture"
                      alt="Garden with white stone as a filler"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">
                        Tropical garden
                        <br />
                        With white stone as a filler
                      </p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item gardening">
                    <img
                      src={PortfolioPicSeven}
                      className="picture"
                      alt="Planter box with ready lawn"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">
                        Planter box
                        <br />
                        With ready lawn
                      </p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item gardening">
                    <img
                      src={PortfolioPicEight}
                      className="picture"
                      alt="Garden with bromeliads"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">Bromeliad garden</p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item paving-tiling">
                    <img
                      src={PortfolioPicNine}
                      className="picture"
                      alt="Paved path and stone planter boxes"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">
                        Paved path
                        <br />
                        With stone planter boxes
                      </p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item gardening">
                    <img
                      src={PortfolioPicTen}
                      className="picture"
                      alt="Garden with white stone filler"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">
                        Garden with white stone filler
                      </p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item fencing">
                    <img
                      src={PortfolioPicEleven}
                      className="picture"
                      alt="Thin wooden fence"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">Thin wooden fence</p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item paving-tiling">
                    <img
                      src={PortfolioPicTwelve}
                      className="picture"
                      alt="Herringbone pathway"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">Herringbone pattern pathway</p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item paving-tiling">
                    <img
                      src={PortfolioPicThirteen}
                      className="picture"
                      alt="Pool coping"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">
                        Pool coping with porphyry paving
                      </p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item fencing">
                    <img
                      src={PortfolioPicFourteen}
                      className="picture"
                      alt="Steel fencing"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">Steel fencing</p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item paving-tiling">
                    <img
                      src={PortfolioPicFifteen}
                      className="picture"
                      alt="Paved garden area"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">Paved garden area</p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item paving-tiling">
                    <img
                      src={PortfolioPicSixteen}
                      className="picture"
                      alt="Large paved area"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">
                        Large paved area with herringbone pattern
                      </p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item paving-tiling">
                    <img
                      src={PortfolioPicSeventeen}
                      className="picture"
                      alt="Paved pathway in frontyard"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">Paved pathway in frontyard</p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item paving-tiling retaining">
                    <img
                      src={PortfolioPicEighteen}
                      className="picture"
                      alt="Paved backyard with keystone wall figures paving-tiling retaining"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">
                        Paved backyard with keystone wall
                      </p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item retaining">
                    <img
                      src={PortfolioPicNineteen}
                      className="picture"
                      alt="Retaining wall"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">Retaining wall</p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item retaining fencing">
                    <img
                      src={PortfolioPicTwenty}
                      className="picture"
                      alt="Retaining wall and fence"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">Retaining wall and fence</p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item paving-tiling">
                    <img
                      src={PortfolioPicTwentyOne}
                      className="picture"
                      alt="Paving with pebble filler"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">Paving with pebble filler</p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item gardening">
                    <img
                      src={PortfolioPicTwentyTwo}
                      className="picture"
                      alt="Maintained backyard"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">Maintained backyard</p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item gardening paving-tiling retaining">
                    <img
                      src={PortfolioPicTwentyThree}
                      className="picture"
                      alt="Ready Lawn, tiling and retaining"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">
                        Ready Lawn, tiling and retaining
                      </p>
                    </figcaption>
                  </figure>

                  <figure className="portfolio-figure figure-item paving-tiling">
                    <img
                      src={PortfolioPicTwentyFour}
                      className="picture"
                      alt="Grass pavers"
                    />
                    <figcaption className="overlay figcaption d-flex justify-content-center align-items-center">
                      <p className="image-text">Grass pavers</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <div className="button-container">
              <button
                className="portfolio-button bolder"
                onClick={() => (window.location.href = "/")}
              >
                Home
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PortfolioPage;
