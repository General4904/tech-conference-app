import "../styles/schedule-highlights.css";
import { Link } from "react-router";
import barcode from "/assets/images/barcode.svg";
import star from "/assets/images/star-icon-design.svg";
import { useState } from "react";
import SpeakerDetailsModal from "./SpeakerDetailsModal";

const ScheduleHighlights = ({ schedules, tracks, speakers, days }) => {
  let primarySchedules = schedules.slice(0, 3);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  return (
    <section className="schedule-highlights-section my-7 pb-4" id="schedule">
      <h2 className="text-sm mb-3 font-bold">// SCHEDULE_HIGHLIGHTS</h2>

      <ul className="schedule-highlights-section-list-items">
        {primarySchedules.map((primarySchedule) => (
          <li
            key={primarySchedule.id}
            className="schedule-highlights-section-list-item mb-5 h-max flex flex-col justify-center items-center md:flex-row border border-white"
          >
            <h3
              className="schedule-highlights-section-list-item-track text-center py-1"
              style={{
                color: `${tracks.find((track) => track.id === primarySchedule.trackId)?.color}`,
              }}
            >
              {
                tracks.find((track) => track.id === primarySchedule.trackId)
                  ?.name
              }
            </h3>

            <div
              className="schedule-highlights-details justify-between md:self-stretch flex md:flex-7 flex-col py-4 px-2 w-full"
              style={{
                backgroundColor: `${tracks.find((track) => track.id === primarySchedule.trackId)?.color}`,
              }}
            >
              <p className="font-bold text-lg mb-2">{primarySchedule.title}</p>
              <p className="font-semibold text-sm mb-2">
                {
                  speakers.find(
                    (speaker) => speaker.id === primarySchedule.speakerId,
                  )?.name
                }{" "}
                <span className="font-light text-faint uppercase">
                  {" "}
                  //{" "}
                  {
                    speakers.find(
                      (speaker) => speaker.id === primarySchedule.speakerId,
                    )?.company
                  }
                </span>
              </p>
              <button
                type="button"
                className="show-details-button text-xs"
                onClick={() => {
                  const speaker = speakers.find(
                    (speaker) => speaker.id === primarySchedule.speakerId,
                  );
                  if (speaker) {
                    setSelectedSpeaker(speaker);
                    setSelectedSchedule(primarySchedule);
                  }
                }}
              >
                + SHOW DETAILS
              </button>
            </div>

            <div
              className="schedule-time flex md:flex-col md:flex-2 md:gap-3 justify-between items-center p-2 w-full gap-9"
              style={{
                backgroundColor: `${tracks.find((track) => track.id === primarySchedule.trackId)?.color}`,
              }}
            >
              <div
                className="md:h-full
              "
              >
                <p className="font-bold">{primarySchedule.time}</p>
                <p>{primarySchedule.endTime}</p>
              </div>

              <div className="barcode">
                <img src={barcode} alt="" />
              </div>
              <div className="uppercase md:hidden">{primarySchedule.dayId}</div>
              <div className="star-icon hidden md:block">
                <img src={star} alt="" />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="text-center">
        <Link to="/SchedulesPage">
          <button className="p-3 cursor-pointer">VIEW ALL SCHEDULES</button>
        </Link>
      </div>
      <SpeakerDetailsModal
        speaker={selectedSpeaker}
        schedule={selectedSchedule}
        day={days.find((day) => day.id === selectedSchedule?.dayId)}
        track={tracks.find(
          (track) => track.id === selectedSchedule?.trackId,
        )}
        onClose={() => setSelectedSpeaker(null)}
      />
    </section>
  );
};

export default ScheduleHighlights;
