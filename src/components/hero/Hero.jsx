import "../../styles/hero.css";
import ConferenceBanner from "./ConferenceBanner";
import KeynoteSpeaker from "./KeynoteSpeaker";

const Hero = () => {
  return (
    <section className="hero-section mb-12 flex flex-col gap-2 lg:flex-row">
      <ConferenceBanner />
      <KeynoteSpeaker />
    </section>
  );
};

export default Hero;
