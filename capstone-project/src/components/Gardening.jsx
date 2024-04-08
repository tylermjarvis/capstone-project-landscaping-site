import GardenPicOne from "../assets/Planting 1.jpg";
import GardenPicTwo from "../assets/Landscaping-photo-27.jpg";
import GardenPicThree from "../assets/Landscaping-photo-43.jpg";
import "../App.css";

const Gardening = () => {
  return (
    <>
      <section
        id="gardening"
        className="gardening-section d-flex align-items-center"
      >
        <div className="container">
          <div className="container-gardening col-sm-12">
            <div className="container">
              <h1 className="section-header text-shadow">Gardening</h1>
              <p className="section-paragraph mx-auto">
                Our gardening services encompass a range of offerings, including
                expert planting and filler selection to create vibrant and
                harmonious landscapes. We specialize in the installation of
                ready lawn, providing clients with lush, green lawns that
                instantly elevate the aesthetic appeal of their properties.
                Additionally, our maintenance services ensure that outdoor areas
                remain pristine and healthy year-round, with regular care and
                attention to preserve their beauty.
              </p>
            </div>
          </div>
          {/* <!-- Gardening Card Items --> */}
          <div className="container card-items showcase-card">
            <div className="row justify-content-center">
              {/* <!-- Gardening Item 1 --> */}
              <div className="col-12 col-md-6 col-lg-4 stretch">
                <figure className="figure">
                  <img
                    src={GardenPicOne}
                    className="gardening image"
                    alt="Plants with garden filler"
                  />
                  <figcaption className="figcaption">
                    <h2 className="figure-header">Planting</h2>
                    <p className="figcaption-paragraph">
                      We use stones, bark, or soil to craft visually pleasing
                      landscapes, offering texture, depth, weed control, and
                      moisture preservation. Our planting services cater to
                      diverse preferences, from hedges to native plants.
                    </p>
                  </figcaption>
                </figure>
              </div>
              {/* <!-- Gardening Item 2 --> */}
              <div className="col-12 col-md-6 col-lg-4 stretch">
                <figure className="figure">
                  <img
                    src={GardenPicTwo}
                    className="gardening image"
                    alt="Freshly laid ready lawn"
                  />
                  <figcaption className="figcaption">
                    <h2 className="figure-header">Ready Lawn</h2>
                    <p className="figcaption-paragraph">
                      Ready lawn, offers a convenient solution for quickly
                      establishing a lush and vibrant grass surface in your
                      outdoor space. Enjoy the beauty of a healthy, green lawn
                      without the hassle of traditional seeding or sodding
                      methods.
                    </p>
                  </figcaption>
                </figure>
              </div>
              {/* <!-- Gardening Item 3 --> */}
              <div className="col-12 col-md-6 col-lg-4 stretch">
                <figure className="figure">
                  <img
                    src={GardenPicThree}
                    className="gardening image"
                    alt="A maintained garden area"
                  />
                  <figcaption className="figcaption">
                    <h2 className="figure-header">Maintenance</h2>
                    <p className="figcaption-paragraph">
                      Landshapez provides comprehensive maintenance services to
                      keep your outdoor space looking its best year-round. From
                      pruning to weeding, our skilled team ensures that your
                      garden remains healthy, tidy, and visually appealing.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="container suppliers showcase-bottom">
            <h3 className="suppliers-header text-shadow">Suppliers We Use</h3>
            <p className="suppliers-paragraph mx-auto">
              Check out the companies below for gardening inspiration!
            </p>
            <ul className="suppliers-list">
              <li className="suppliers-list-item">
                <a
                  className="suppliers-link white-font"
                  href="https://www.bunnings.co.nz/products/garden"
                  target="_blank"
                >
                  Bunnings
                </a>
              </li>
              <div className="content-underline black-underline mx-auto"></div>
              <li className="suppliers-list-item">
                <a
                  className="suppliers-link white-font"
                  href="https://www.youtube.com/watch?v=vH2Z3tf-lDc"
                  target="_blank"
                >
                  Roger Hunter&quot;s Garden Centre
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gardening;
