import "../App.css";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="contact-section d-flex align-items-center"
      >
        <div className="container-contact col-sm-12">
          <div className="container">
            <h1 className="section-header">Contact</h1>
            <p className="section-paragraph mx-auto">
              Contacting Landshapez is your first step towards bringing your
              garden vision to life. You can reach us conveniently via email or
              mobile or by filling out the enquiry form to discuss your
              landscaping needs and desired services. We are dedicated to
              understanding your vision and providing personalized solutions
              tailored to your preferences and budget. Don&apos;t hesitate to
              get in touch with Landshapez today to embark on your journey
              towards a beautiful and functional outdoor oasis.
            </p>
            <div className="details">
              <a
                className="email bolder white-font"
                href="mailto:landshapez@hotmail.com"
              >
                landshapez@hotmail.com
              </a>
              <p className="phone-number bolder">021 827 008</p>
            </div>
          </div>

          {/* <!-- Contact Form --> */}
          <div className="form-container mx-auto">
            <div className="form-background">
              <h2 className="form-title bolder">Enquiry Form</h2>
              <form action="https://formspree.io/f/mleqorne" method="POST">
                <label className="label" htmlFor="full-name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  maxLength="100"
                  required
                />

                <label className="label" htmlFor="email">
                  Email
                </label>
                <input type="email" id="email" name="email" required />

                <label className="label" htmlFor="phone">
                  Phone Number
                </label>
                <input type="tel" id="phone" name="phone" />

                <label className="label" htmlFor="service">
                  Service
                </label>
                <select id="service" name="service" required>
                  <option value="gardening">Gardening</option>
                  <option value="paving-tiling">Paving/Tiling</option>
                  <option value="retaining">Retaining</option>
                  <option value="fencing">Fencing</option>
                </select>

                <label className="label" htmlFor="description">
                  Description
                </label>
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Describe the service you require..."
                  cols="60"
                  rows="8"
                ></textarea>

                <button
                  className="button bolder margin"
                  type="submit"
                  value="Submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
