import "../App.css";
import HeroImage from "../assets/Hero_Image.webp";

var heroBackground = {
  backgroundImage: `url(${HeroImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  filter: "brightness(80%)",
};

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero" style={heroBackground}>
        <div className="caption text-center">
          <p className="caption-1">Elevate Your Outdoor Space With</p>
          <p className="caption-2"> Expert Landscaping Services.</p>
          <p className="caption-3">From Lush Green Gardens to Unique Paving</p>
          <p className="caption-4">We&apos;ve Got You Covered!!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
