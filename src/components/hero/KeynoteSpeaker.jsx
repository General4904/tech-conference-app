import { FaArrowRight } from "react-icons/fa";
import { useContext, useState } from "react";
import { ConferenceContext } from "../../context/ConferenceContext";
import SpeakerDetailsModal from "../SpeakerDetailsModal";

const KeynoteSpeaker = () => {
  const { featuredKeynote, speakers, days, tracks } =
    useContext(ConferenceContext);
  const [isSpeakerDetailsOpen, setIsSpeakerDetailsOpen] = useState(false);
  const keynoteSpeaker = speakers.find(
    (speaker) => featuredKeynote.speakerId === speaker.id,
  );

  const keynoteDay = days.find((day) => featuredKeynote.day === day.id);
  const keynoteTrack = tracks.find(
    (track) => track.id === featuredKeynote.trackId,
  );

  const date = new Date(keynoteDay.date);
  date.toISOString();
  const localeDateString = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const keynoteDate = String(localeDateString);

  return (
    <section className="keynote-speaker-section relative p-2 gap-6 lg:py-6 lg:flex-1 flex flex-col justify-between lg:pl-8">
      <p>// FEATURED KEYNOTE</p>
      <h2 className="font-bold text-5xl">{keynoteSpeaker.name}</h2>
      <p>
        {keynoteSpeaker.title}
        <br /> @{keynoteSpeaker.company}
      </p>
      <h3 className="font-bold">{featuredKeynote.title}</h3>
      <p>
        {keynoteDate} / {featuredKeynote.time} / {featuredKeynote.location}
      </p>

      <button
        className="keynote-section-button self-start px-5 py-2 gap-3 md:px-9 md:py-4 flex items-center cursor-pointer active:translate-0.5 transition"
        onClick={() => setIsSpeakerDetailsOpen(true)}
      >
        <p>VIEW TALK</p>
        <p>
          <FaArrowRight />
        </p>
      </button>

      <div
        className={`box absolute hidden lg:block right-0 bottom-0 w-2/5 h-2/3 bg-center bg-no-repeat bg-cover`}
        style={{ backgroundImage: `url(${keynoteSpeaker.avatar})` }}
      >
        {/* <img src={keynoteSpeaker.avatar} alt="" className="w-full h-full" /> */}
      </div>
      <SpeakerDetailsModal
        speaker={isSpeakerDetailsOpen ? keynoteSpeaker : null}
        schedule={featuredKeynote}
        day={keynoteDay}
        track={keynoteTrack}
        onClose={() => setIsSpeakerDetailsOpen(false)}
      />
    </section>
  );
};

export default KeynoteSpeaker;
