import "../styles/about-section.css";

const AboutSection = ({ conference, tracks }) => {
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
    <section className="about-section pb-5 lg:flex justify-between">
      <div className="about-section-left">
        <h2 className="mb-1">{conference.name}</h2>
        <p className="mb-6 about-section-description lg:w-[60%]">
          A three-day conference for engineers who build the interfaces humans
          use everyday
        </p>
      </div>

      <div className="about-section-right md:flex justify-between items-center gap-5">
        <ul className="about-section-nav mb-5 self-start">
          <h2>// NAVIGATE</h2>
          <li className="about-section-nav-item">Home</li>
          <li className="about-section-nav-item">Schedule</li>
          <li className="about-section-nav-item">Speakers</li>
        </ul>

        <div className="about-section-tracks">
          <h2>// TRACKS</h2>
          <ul className="about-section-tracks-list-items mb-6">
            {tracks.map((track) => (
              <li className="about-section-list-item" key={track.id}>
                {track.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-section-info self-start">
          <h2>// VENUE</h2>
          <p className="lg:w-[20%]">{conference.location}</p>
          <p>
            {startDate} - {endDate}, {year}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
