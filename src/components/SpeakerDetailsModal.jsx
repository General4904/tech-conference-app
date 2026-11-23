import { useEffect } from "react";

const SpeakerDetailsModal = ({ speaker, schedule, day, track, onClose }) => {
  useEffect(() => {
    if (!speaker) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [speaker, onClose]);

  if (!speaker) return null;

  const socialLabels = {
    twitter: "Twitter",
    github: "GitHub",
    linkedin: "LinkedIn",
  };
  const formattedDate = day?.date
    ? new Date(`${day.date}T00:00:00`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="speaker-overlay" onClick={onClose}>
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
          onClick={onClose}
        >
          &times;
        </button>
        <img
          className="speaker-dialog-avatar"
          src={speaker.avatar}
          alt={speaker.name}
        />
        <h2 id="speaker-dialog-title">{speaker.name}</h2>
        <p className="speaker-dialog-title-company">
          {speaker.title} at {speaker.company}
        </p>
        <p className="speaker-dialog-bio">{speaker.bio}</p>
        {schedule && (
          <div className="speaker-dialog-talk">
            <h3>Talk details</h3>
            <h4>{schedule.title}</h4>
            {schedule.description && <p>{schedule.description}</p>}
            <dl>
              {day && (
                <div>
                  <dt>Date</dt>
                  <dd>
                    {day.label}
                    {formattedDate && ` · ${formattedDate}`}
                  </dd>
                </div>
              )}
              {(schedule.time || schedule.endTime) && (
                <div>
                  <dt>Time</dt>
                  <dd>
                    {schedule.time}
                    {schedule.endTime && `–${schedule.endTime}`}
                  </dd>
                </div>
              )}
              {schedule.location && (
                <div>
                  <dt>Location</dt>
                  <dd>{schedule.location}</dd>
                </div>
              )}
              {track && (
                <div>
                  <dt>Track</dt>
                  <dd>{track.name}</dd>
                </div>
              )}
            </dl>
          </div>
        )}
        {speaker.socials && (
          <div className="speaker-dialog-socials">
            {Object.entries(speaker.socials)
              .filter(([, url]) => url)
              .map(([network, url]) => (
                <a
                  key={network}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {socialLabels[network] || network}
                </a>
              ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default SpeakerDetailsModal;
