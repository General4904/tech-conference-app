import barcode from "/assets/images/barcode.svg";
import star from "/assets/images/star-icon-design.svg";
import { useState } from "react";

const SchedulesPage = ({ data }) => {
  const schedules = data.schedule;
  const tracks = data.tracks;
  const speakers = data.speakers;
  const days = data.days;

  const [filteredSchedule, setFilteredSchedule] = useState(schedules);
  const filterSchedulesByDay = (id) => {
    setFilteredSchedule(schedules.filter((schedule) => schedule.dayId === id));
  };
  const filterSchedulesByTrack = (id) => {
    setFilteredSchedule(
      schedules.filter((schedule) => schedule.trackId === id),
    );
  };
  return (
    <section
      className="schedule-highlights-section  my-7 p-3 pb-4"
      id="schedule"
    >
      <h2 className="mb-2">// FILTER</h2>

      <div className="filter-section mb-4">
        <div className="days-filter gap-3 flex flex-col md:flex-row justify-between mb-6">
          <div className="day grid grid-cols-6 text-xs lg:flex gap-2">
            <div
              className="filter-item cursor-pointer"
              onClick={() => setFilteredSchedule(schedules)}
            >
              All Days
            </div>
            {days.map((day) => (
              <div
                key={day.id}
                onClick={() => filterSchedulesByDay(day.id)}
                className="filter-item cursor-pointer"
              >
                {day.label}
              </div>
            ))}
          </div>

          <div className="filter-item saved-item self-baseline cursor-pointer">
            Saved
          </div>
        </div>

        <div className="tracks-filter gap-3 flex flex-col md:flex-row justify-between">
          <div className="track grid grid-cols-3 text-xs lg:flex gap-2">
            <div
              className="filter-item cursor-pointer"
              onClick={() => setFilteredSchedule(schedules)}
            >
              All Tracks
            </div>
            {tracks.map((track) => (
              <div
                key={track.id}
                onClick={() => filterSchedulesByTrack(track.id)}
                className="filter-item cursor-pointer"
              >
                {track.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ul className="schedule-highlights-section-list-items">
        {filteredSchedule.map((schedule) => (
          <li
            key={schedule.id}
            className="schedule-highlights-section-list-item mb-5 h-max flex flex-col justify-center items-center md:flex-row border border-white"
          >
            <h3
              className="schedule-highlights-section-list-item-track text-center px-2 py-1"
              style={{
                color: `${tracks.find((track) => track.id === schedule.trackId)?.color}`,
              }}
            >
              {tracks.find((track) => track.id === schedule.trackId)?.name}
            </h3>

            <div
              className="schedule-highlights-details justify-between md:self-stretch flex md:flex-7 flex-col py-4 px-2 w-full"
              style={{
                backgroundColor: `${tracks.find((track) => track.id === schedule.trackId)?.color}`,
              }}
            >
              <p className="font-bold text-lg mb-2">{schedule.title}</p>
              <p className="font-semibold text-sm mb-2">
                {
                  speakers.find((speaker) => speaker.id === schedule.speakerId)
                    ?.name
                }{" "}
                <span className="font-light text-faint uppercase">
                  {" "}
                  //{" "}
                  {
                    speakers.find(
                      (speaker) => speaker.id === schedule.speakerId,
                    )?.company
                  }
                </span>
              </p>
              <p className="text-xs cursor-pointer text-faint">
                + SHOW DETAILS
              </p>
            </div>

            <div
              className="schedule-time self-stretch flex md:flex-col md:flex-2 md:gap-3 items-center p-2 w-full gap-9"
              style={{
                backgroundColor: `${tracks.find((track) => track.id === schedule.trackId)?.color}`,
              }}
            >
              <div
                className="md:h-full
                "
              >
                <p className="font-bold">{schedule.time}</p>
                <p>{schedule.endTime}</p>
              </div>

              <div className="barcode">
                <img src={barcode} alt="" />
              </div>
              <div className="uppercase md:hidden">{schedule.dayId}</div>
              <div className="star-icon hidden md:block">
                <img src={star} alt="" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SchedulesPage;
