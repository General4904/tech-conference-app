import "../styles/schedule-highlights.css";
import { useState } from "react";

const ScheduleHighlights = ({ schedules, tracks, speakers }) => {
  const [showAllSchedules, setshowAllSchedules] = useState(false);
  let primarySchedules = schedules;

  if (!showAllSchedules) {
    primarySchedules = schedules.slice(0, 3);
  }
  return (
    <section className="schedule-highlights-section my-7 pb-4" id="schedule">
      <h2 className="text-sm mb-3 font-bold">// SCHEDULE_HIGHLIGHTS</h2>

      <ul className="schedule-highlights-section-list-items">
        {primarySchedules.map((schedule) => {
          const track = tracks.find((item) => item.id === schedule.trackId);
          const speaker = speakers.find(
            (item) => item.id === schedule.speakerId,
          );

          return (
            <li
              key={schedule.id}
              className="schedule-highlights-section-list-item flex mb-3 flex-col md:flex-row"
            >
              <p
                className="schedule-highlights-section-list-item-track w-full p-3 text-center md:w-[5%]"
                style={{
                  color: track?.color,
                }}
              >
                {track?.name}
              </p>

              <div
                className="flex w-full min-w-0 flex-col p-5 md:w-[80%] schedule-highlights-details"
                style={{ backgroundColor: track?.color }}
              >
                <p className="self-start font-bold">{schedule.title}</p>
                <p className="self-start">
                  {speaker?.name} // {speaker?.company}
                </p>
              </div>

              <p
                className="event-time flex w-full gap-2 flex-row items-center p-2 md:flex-1 md:flex-col md:justify-center md:items-center"
                style={{ backgroundColor: track?.color }}
              >
                <span className="flex-1">
                  {schedule.time} - {schedule.endTime}
                </span>
                <span className="barcode flex-1">
                  <img src="./assets/images/barcode.svg" alt="" />
                </span>
                <span className="flex-1 uppercase">{schedule.dayId}</span>
              </p>
            </li>
          );
        })}
        <div className="text-center">
          <button
            className="
          p-3 font-semibold active:translate-0.5 transition cursor-pointer"
            onClick={() => setshowAllSchedules((prevSchedule) => !prevSchedule)}
          >
            {showAllSchedules ? "SHOW LESS" : "VIEW FULL SCHEDULE"}
          </button>
        </div>
      </ul>
    </section>
  );
};

export default ScheduleHighlights;
