import "../styles/footer.css";
import { BsArrowUp } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer-section pt-4 text-xs md:flex items-center justify-between">
      <div className="attripution">
        <p className="mb-3">&copy; 2026 DEVHORIZON, ALL RIGHTS RESERVED.</p>
      </div>
      <a
        href="#top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <p className="flex">
          BACK TO TOP <BsArrowUp className="ml-2 text-md" />
        </p>
      </a>
    </section>
  );
};

export default Footer;
