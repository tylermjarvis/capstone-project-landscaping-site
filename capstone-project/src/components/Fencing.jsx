import FencingPicOne from "../assets/Landscaping-photo-19.jpg";
import FencingPicTwo from "../assets/Steel-fencing2.jpg";
import "../App.css";

const Fencing = () => {
  return (
    <>
      <section
        id="fencing"
        className="fencing-section d-flex align-items-center"
      >
        <div className="container">
          <div className="container-fencing">
            <div className="container">
              <h1 className="section-header text-shadow">Fencing</h1>
              <p className="section-paragraph mx-auto">
                Landshapez offers professional landscaping fencing services to
                enhance privacy, security, and aesthetic appeal in outdoor
                spaces. We specialize in the installation of wooden and steel
                fencing solutions tailored to the specific needs of each client,
                whether you&quot;re looking for a rustic charm with wooden
                fencing or a sleek and modern look with steel fencing.
              </p>
            </div>
          </div>
          {/* <!-- Fencing Card Items --> */}
          <div className="container card-items">
            <div className="row justify-content-center">
              {/* <!-- Fencing Item 1 --> */}
              <div className="col-12 col-md-6 col-lg-4 stretch">
                <figure className="figure">
                  <img
                    src={FencingPicOne}
                    className="fencing image"
                    alt="Thin wood fencing"
                  />
                  <figcaption className="figcaption">
                    <h2 className="figure-header white-font">Wooden Fencing</h2>
                    <p className="figcaption-paragraph white-font">
                      Wooden fences combine natural beauty with durability,
                      offering privacy, security, and boundary definition.
                      Crafted from quality materials, customizable to any
                      architectural style.
                    </p>
                  </figcaption>
                </figure>
              </div>
              {/* <!-- Fencing Item 2 --> */}
              <div className="col-12 col-md-6 col-lg-4 stretch">
                <figure className="figure">
                  <img
                    src={FencingPicTwo}
                    className="fencing image"
                    alt="Black steel fencing"
                  />
                  <figcaption className="figcaption">
                    <h2 className="figure-header white-font">Steel Fencing</h2>
                    <p className="figcaption-paragraph white-font">
                      Steel fencing solutions, provide robust security and
                      boundary delineation. Our steel fences are built to
                      withstand harsh weather conditions and offer a sleek,
                      modern aesthetic that adds both functionality and style to
                      any property.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="container suppliers">
            <h3 className="suppliers-header text-shadow">Suppliers We Use</h3>
            <p className="suppliers-paragraph mx-auto">
              Check out the companies below for fencing inspiration!
            </p>
            <ul className="suppliers-list">
              <li className="suppliers-list-item">
                <a
                  className="suppliers-link white-font"
                  href="https://www.bunnings.co.nz/products/building-hardware/fencing"
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

export default Fencing;
