import RetainingPicOne from "../assets/Sleeper 3.webp";
import RetainingPicTwo from "../assets/Landscaping-photo-35.webp";
import RetainingPicThree from "../assets/More-landscaping-photos-15.webp";
import "../App.css";

const Retaining = () => {
  return (
    <>
      <section
        id="retaining"
        className="retaining-section d-flex align-items-center"
      >
        <div className="container">
          <div className="container-retaining col-sm-12">
            <div className="container">
              <h1 className="section-header">Retaining</h1>
              <p className="section-paragraph mx-auto">
                We provide quality service for the construction of sturdy and
                aesthetically pleasing retaining walls using a variety of
                materials, including sleepers and keystone walls. Whether
                it&apos;s to level uneven terrain, prevent erosion, or create
                defined garden beds, our team is dedicated to delivering
                top-quality solutions that enhance both the functionality and
                visual appeal of outdoor environments.
              </p>
            </div>
          </div>
          {/* <!-- Retaining Card Items --> */}
          <div className="container card-items">
            <div className="row justify-content-center">
              {/* <!-- Retaining Item 1 --> */}
              <div className="col-12 col-md-6 col-lg-4 stretch card-1">
                <figure className="figure brown-figure">
                  <img
                    src={RetainingPicOne}
                    className="retaining image"
                    alt="Wooden sleepers stairs"
                    width="500"
                    height="300"
                  />
                  <figcaption className="figcaption">
                    <h2 className="figure-header black-font">Sleepers</h2>
                    <p className="figcaption-paragraph black-font">
                      Landshapez provides hardwood, softwood, and reclaimed
                      railway sleepers, ideal for distinctive landscaping. They
                      add charm and function to gardens and outdoor areas.
                    </p>
                  </figcaption>
                </figure>
              </div>
              {/* <!-- Retaining Item 2 --> */}
              <div className="col-12 col-md-6 col-lg-4 stretch card-2">
                <figure className="figure green-figure">
                  <img
                    src={RetainingPicTwo}
                    className="retaining image"
                    alt="Large keystone wall behind stairs"
                    width="500"
                    height="300"
                  />
                  <figcaption className="figcaption">
                    <h2 className="figure-header white-font">KeyStones</h2>
                    <p className="figcaption-paragraph white-font">
                      Landshapez offers versatile keystone options, from natural
                      stone to concrete, ensuring structural stability and
                      aesthetic appeal in landscaping projects.
                    </p>
                  </figcaption>
                </figure>
              </div>
              {/* <!-- Retaining Item 3 --> */}
              <div className="col-12 col-md-6 col-lg-4 stretch card-3">
                <figure className="figure brown-figure">
                  <img
                    src={RetainingPicThree}
                    className="retaining image"
                    alt="Wooden wall retaining garden"
                    width="500"
                    height="300"
                  />
                  <figcaption className="figcaption">
                    <h2 className="figure-header black-font">
                      Retaining Walls
                    </h2>
                    <p className="figcaption-paragraph black-font">
                      Retaining walls blend function with aesthetics, offering
                      stability for elevated terrain and enhancing landscape
                      beauty. Customize with diverse materials and designs.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="container suppliers">
            <h3 className="suppliers-header">Suppliers We Use</h3>
            <p className="suppliers-paragraph mx-auto">
              Check out the companies below for retaining inspiration!
            </p>
            <ul className="suppliers-list">
              <li className="suppliers-list-item">
                <a
                  className="suppliers-link white-font"
                  href="https://www.bunnings.com.au/products/building-hardware/timber/retaining-walls?page=1&pageSize=36"
                  target="_blank"
                >
                  Bunnings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Retaining;
