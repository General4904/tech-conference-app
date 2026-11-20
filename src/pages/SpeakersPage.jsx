import "../styles/speakers.css";

const SpeakersPage = ({ data }) => {
  const speakers = data.speakers;
  const schedules = data.schedule;
  return (
    <section className="speakers-section mb-4" id="speakers">
      <div className="speakers-section-list flex flex-col gap-3 mb-5 md:grid grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker) => (
          <li
            className="speakers-section-list-item list-none h-fit"
            key={speaker.id}
          >
            <div
              className={`bg-center bg-no-repeat bg-cover w-full aspect-4/3`}
              style={{ backgroundImage: `url(${speaker.avatar})` }}
            ></div>
            <div className="about-speaker-section p-3">
              <h3 className="font-bold">{speaker.name}</h3>
              <p className="speaker-title-company-section pb-6 mb-2">
                {speaker.title} @{speaker.company}
              </p>
              {schedules
                .filter((schedule) => speaker.talkIds.includes(schedule.id))
                .map((schedule) => (
                  <p key={schedule.id} className="topics">
                    {schedule.title}.
                  </p>
                ))}
            </div>
          </li>
        ))}
      </div>
    </section>
  );
};

export default SpeakersPage;
