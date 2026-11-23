import barcode from "/assets/images/barcode.svg";
import star from "/assets/images/star-icon-design.svg";
import { useEffect, useState } from "react";

const SchedulesPage = ({ data }) => {
  const schedules = data.schedule;
  const tracks = data.tracks;
  const speakers = data.speakers;
  const days = data.days;

  const [filteredSchedule, setFilteredSchedule] = useState(schedules);
  const [activeFilter, setActiveFilter] = useState({ type: "all" });
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const isActiveFilter = (type, id) =>
    activeFilter.type === type && (id === undefined || activeFilter.id === id);

  useEffect(() => {
    if (!selectedSpeaker) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedSpeaker(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedSpeaker]);

  function saveNewSchedule(scheduleId) {
    const savedData = localStorage.getItem("savedSchedule");
    const savedSchedules = savedData ? JSON.parse(savedData) : [];
    const schedule = schedules.find((schedule) => schedule.id === scheduleId);

    if (savedSchedules.some((item) => item.id === scheduleId)) return;
    const newSavedSchedule = [...savedSchedules, schedule];

    localStorage.setItem("savedSchedule", JSON.stringify(newSavedSchedule));
  }

  function getSavedSchedules() {
    try {
      const data = localStorage.getItem("savedSchedule");
      if (!data) throw new Error();
      const savedSchedules = JSON.parse(data);
      setFilteredSchedule(savedSchedules);
    } catch (error) {
      console.error(error);
    }
  }

  const filterSchedulesByDay = (id) => {
    setFilteredSchedule(schedules.filter((schedule) => schedule.dayId === id));
    setActiveFilter({ type: "day", id });
  };
  const filterSchedulesByTrack = (id) => {
    setFilteredSchedule(
      schedules.filter((schedule) => schedule.trackId === id),
    );
    setActiveFilter({ type: "track", id });
  };
  return (
    <section
      className="schedule-highlights-section  my-7 p-3 pb-4 z-10"
      id="schedule"
    >
      <h2 className="mb-2">// FILTER</h2>

      <div className="filter-section mb-4">
        <div className="days-filter gap-3 flex flex-col md:flex-row justify-between mb-6">
          <div className="day grid grid-cols-6 text-xs lg:flex gap-2">
            <div
              className={`filter-item cursor-pointer${isActiveFilter("all") ? " active-filter" : ""}`}
              onClick={() => {
                setFilteredSchedule(schedules);
                setActiveFilter({ type: "all" });
              }}
            >
              All Days
            </div>
            {days.map((day) => (
              <div
                key={day.id}
                onClick={() => filterSchedulesByDay(day.id)}
                className={`filter-item cursor-pointer${isActiveFilter("day", day.id) ? " active-filter" : ""}`}
              >
                {day.label}
              </div>
            ))}
          </div>

          <div
            className={`filter-item saved-item self-baseline cursor-pointer${isActiveFilter("saved") ? " active-filter" : ""}`}
            onClick={() => {
              getSavedSchedules();
              setActiveFilter({ type: "saved" });
            }}
          >
            Saved
          </div>
        </div>

        <div className="tracks-filter gap-3 flex flex-col md:flex-row justify-between">
          <div className="track grid grid-cols-3 text-xs lg:flex gap-2">
            <div
              className={`filter-item cursor-pointer${isActiveFilter("all") ? " active-filter" : ""}`}
              onClick={() => {
                setFilteredSchedule(schedules);
                setActiveFilter({ type: "all" });
              }}
            >
              All Tracks
            </div>
            {tracks.map((track) => (
              <div
                key={track.id}
                onClick={() => filterSchedulesByTrack(track.id)}
                className={`filter-item cursor-pointer${isActiveFilter("track", track.id) ? " active-filter" : ""}`}
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
              <button
                type="button"
                className="show-details-button text-xs"
                onClick={() => {
                  const speaker = speakers.find(
                    (speaker) => speaker.id === schedule.speakerId,
                  );
                  if (speaker) setSelectedSpeaker(speaker);
                }}
              >
                + SHOW DETAILS
              </button>
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
              <div
                className="star-icon md:block cursor-pointer"
                onClick={() => saveNewSchedule(schedule.id)}
              >
                <img src={star} alt="" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedSpeaker && (
        <div
          className="speaker-overlay"
          onClick={() => setSelectedSpeaker(null)}
        >
          <section
            className="speaker-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="speaker-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="speaker-dialog-close"
              aria-label="Close speaker details"
              onClick={() => setSelectedSpeaker(null)}
            >
              &times;
            </button>
            <img
              className="speaker-dialog-avatar"
              src={selectedSpeaker.avatar}
              alt={selectedSpeaker.name}
            />
            <h2 id="speaker-dialog-title">{selectedSpeaker.name}</h2>
            <p className="speaker-dialog-title-company">
              {selectedSpeaker.title} at {selectedSpeaker.company}
            </p>
            <p className="speaker-dialog-bio">{selectedSpeaker.bio}</p>
            {selectedSpeaker.socials && (
              <div className="speaker-dialog-socials">
                {Object.entries(selectedSpeaker.socials)
                  .filter(([, url]) => url)
                  .map(([network, url]) => {
                    const labels = {
                      twitter: "Twitter",
                      github: "GitHub",
                      linkedin: "LinkedIn",
                    };

                    return (
                      <a
                        key={network}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {labels[network] || network}
                      </a>
                    );
                  })}
              </div>
            )}
          </section>
        </div>
      )}
    </section>
  );
};

export default SchedulesPage;
