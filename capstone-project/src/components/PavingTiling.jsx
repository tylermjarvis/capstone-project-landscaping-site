import PavingPicOne from "../assets/Last-landscaping-photos-77.jpg";
import PavingPicTwo from "../assets/More-landscaping-photos-19.jpg";
import "../App.css";

const PavingTiling = () => {
  return (
    <>
      <section
        id="paving-tiling"
        className="paving-tiling-section d-flex align-items-center"
      >
        <div className="container">
          <div className="container-paving-tiling col-sm-12">
            <div className="container">
              <h1 className="section-header">Paving/Tiling</h1>
              <p className="section-paragraph mx-auto">
                We specialize in crafting elegant and durable paving and tiling
                solutions for gardens, pool areas, pool coping, driveways and
                patios. Whether it&apos;s creating a sophisticated pathway
                through a garden oasis or enhancing the functionality and
                aesthetics of pool surroundings, we prioritize quality
                craftsmanship and attention to detail in every project.
              </p>
            </div>
          </div>
          {/* <!-- Paving/Tiling Card Items --> */}
          <div className="container card-items">
            <div className="row justify-content-center">
              {/* <!-- Paving/Tiling Item 1 --> */}
              <div className="col-12 col-md-6 col-lg-4 stretch">
                <figure className="figure">
                  <img
                    src={PavingPicOne}
                    className="paving-tiling image"
                    alt="Paved pathway"
                  />
                  <figcaption className="figcaption">
                    <h2 className="figure-header white-font">Paving</h2>
                    <p className="figcaption-paragraph white-font">
                      Landshapez offers captivating paving displays that
                      showcase a wide range of design options and materials for
                      outdoor spaces. From intricate patterns such as
                      herringbone to modern textures.
                    </p>
                  </figcaption>
                </figure>
              </div>
              {/* <!-- Paving/Tiling Item 2 --> */}
              <div className="col-12 col-md-6 col-lg-4 stretch">
                <figure className="figure">
                  <img
                    src={PavingPicTwo}
                    className="paving-tiling image"
                    alt="Laid tiles in a backyard"
                  />
                  <figcaption className="figcaption">
                    <h2 className="figure-header white-font">Tiling</h2>
                    <p className="figcaption-paragraph white-font">
                      Landshapez presents stunning tiling displays, highlighting
                      an array of styles and materials for various outdoor
                      areas. Visualize the perfect tiling solutions for gardens,
                      pool areas, or patio projects.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="container suppliers">
            <h3 className="suppliers-header">Suppliers We Use</h3>
            <p className="suppliers-paragraph mx-auto">
              Check out the companies below for paving and tiling inspiration!
            </p>
            <ul className="suppliers-list">
              <li className="suppliers-list-item">
                <a
                  className="suppliers-link black-font different-hover"
                  href="https://www.bunnings.co.nz/products/garden/landscaping/paving-stones"
                  target="_blank"
                >
                  Bunnings
                </a>
              </li>
              <div className="content-underline white-underline mx-auto"></div>
              <li className="suppliers-list-item">
                <a
                  className="suppliers-link black-font different-hover"
                  href="https://www.firth.co.nz/paving-and-retaining/residential-pavers/"
                  target="_blank"
                >
                  Firth
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PavingTiling;
