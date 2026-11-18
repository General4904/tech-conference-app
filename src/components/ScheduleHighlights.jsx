import "../styles/schedule-highlights.css";

const ScheduleHighlights = ({ schedules, tracks, speakers }) => {
  return (
    <section className="schedule-highlights-section my-7 pb-4" id="schedule">
      <h2 className="text-sm mb-3 font-bold">// SCHEDULE_HIGHLIGHTS</h2>

      <ul className="schedule-highlights-section-list-items">
        {schedules.map((schedule) => (
          <li
            key={schedule.id}
            className="schedule-highlights-section-list-item flex mb-3 border border-accent flex-col md:flex-row md:items-center"
          >
            <p className="schedule-highlights-section-list-item-track p-3 text-center flex-1">
              {tracks.find((track) => track.id === schedule.trackId)?.name}
            </p>

            <div className="flex flex-col flex-3 bg-black">
              <p className="self-start">{schedule.title}</p>
              <p className="self-start">
                {
                  speakers.find((speaker) => speaker.id === schedule.speakerId)
                    ?.name
                }{" "}
                //{" "}
                {
                  speakers.find((speaker) => speaker.id === schedule.speakerId)
                    ?.company
                }
              </p>
            </div>

            <p className="p-3 flex-2 flex flex-col">
              <span>
                {schedule.time} - {schedule.endTime}
              </span>
              <span></span>
              <span>{schedule.dayId}</span>
            </p>
          </li>
        ))}
        <div className="text-center">
          <button
            className="
          p-3 font-semibold active:translate-0.5 transition"
          >
            VIEW FULL SCHEDULE
          </button>
        </div>
      </ul>
    </section>
  );
};

export default ScheduleHighlights;
