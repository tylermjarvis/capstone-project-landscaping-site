import ProfilePic from "../assets/andy-profile-pic-1.png";
import "../App.css";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="about-section mx-auto d-flex align-items-center"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="container showcase-left">
                <h1 className="section-header text-shadow">About</h1>
                <p className="section-paragraph mx-auto">
                  Hi I&quot;m Andy, the founder of Landshapez. I have over two
                  decades of experience in landscaping, transforming outdoor
                  spaces into breathtaking and practical havens. At Landshapez,
                  we pride ourselves on attention to detail and a passion for
                  creating landscapes that exceed expectation. From intricate
                  garden designs to fencing solutions, we&quot;re dedicated to
                  bringing your vision to life. Let&quot;s craft the perfect
                  outdoor space together!
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={ProfilePic}
                className="about-image"
                alt="Andy's picture"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
