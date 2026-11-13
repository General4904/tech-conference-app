import "../styles/speakers.css";

const Speakers = ({ speakers, schedules }) => {
  const speeches = schedules.find(
    (schedule) => speakers.talkId === schedule.id,
  );
  console.log(speeches);
  return (
    <section className="speakers-section">
      <h2 className="text-2xl font-bold mb-3">// Featured speakers</h2>
      <ul className="speakers-section-list flex flex-col gap-3 md:grid grid-cols-2 lg:grid-cols-4">
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
              <h3 className="font-bold mb-2">{speaker.name}</h3>
              <p className="mb-2">
                {speaker.title} @{speaker.company}
              </p>
              <hr />
              <p className="mt-2"></p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Speakers;
