import { toTop } from "../js/to-top";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="text-center">
          <button id="toTopButton" className="to-top" onClick={toTop}>
            Back to Top
          </button>
        </div>
        <hr className="socket mx-auto" />
        <p className="copy">&copy; LANDSHAPEZ. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
