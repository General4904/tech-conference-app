import "../styles/speakers.css";
import { Link } from "react-router";

const Speakers = ({ speakers, schedules }) => {
  const primarySpeakers = speakers.slice(0, 3);

  return (
    <section className="speakers-section mb-4" id="speakers">
      <h2 className="text-sm font-bold mb-3">// FEATURED_SPEAKERS</h2>
      <ul className="speakers-section-list flex flex-col gap-3 mb-5 md:grid grid-cols-2 lg:grid-cols-3">
        {primarySpeakers.map((primarySpeaker) => (
          <li
            className="speakers-section-list-item list-none h-fit"
            key={primarySpeaker.id}
          >
            <div
              className={`bg-center bg-no-repeat bg-cover w-full aspect-4/3`}
              style={{ backgroundImage: `url(${primarySpeaker.avatar})` }}
            ></div>
            <div className="about-speaker-section p-3">
              <h3 className="font-bold">{primarySpeaker.name}</h3>
              <p className="speaker-title-company-section pb-6 mb-2">
                {primarySpeaker.title} @{primarySpeaker.company}
              </p>
              {schedules
                .filter((schedule) =>
                  primarySpeaker.talkIds.includes(schedule.id),
                )
                .map((schedule) => (
                  <p key={schedule.id} className="topics">
                    {schedule.title}.
                  </p>
                ))}
            </div>
          </li>
        ))}
      </ul>

      <div className="view-all-speakers-button flex justify-center items-center">
        <Link to="/SpeakersPage">
          <button className="py-3 px-4 font-bold active:translate-0.5 transition cursor-pointer">
            Show All Speakers
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Speakers;
