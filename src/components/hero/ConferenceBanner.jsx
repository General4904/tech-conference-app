import { useContext } from "react";
import { ConferenceContext } from "../../context/ConferenceContext";

const ConferenceBanner = () => {
  const { conference } = useContext(ConferenceContext);

  let startDate = new Date(conference.date);
  let endDate = new Date(conference.endDate);

  const year = endDate.getFullYear();

  // Start date
  startDate.toISOString();
  startDate = startDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });
  startDate = String(startDate);

  // End date
  endDate.toISOString();
  endDate = endDate.toLocaleString("en-US", {
    day: "numeric",
  });
  endDate = String(endDate);

  return (
    <section className="banner-section relative p-2 lg:flex-1">
      <div className="hero-background absolute w-full h-full flex justify-center items-center z-0 text-transparent p-12">
        <p className="">HORIZON</p>
      </div>
      <div className="hero-content z-50">
        <h1 className="text-2xl mb-[5em]">{conference.tagline}</h1>

        <div className="hero-footer py-2 flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center text-md mt-auto font-extralight">
          <div className="hero-footer-date">
            {startDate} - {endDate}, {year}.
          </div>
          <div className="hero-footer-text">{conference.location}.</div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceBanner;
