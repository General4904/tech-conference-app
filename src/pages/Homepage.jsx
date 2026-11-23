import Hero from "../components/hero/Hero";
import Tracks from "../components/Tracks";
import ConferenceBanner from "../components/hero/ConferenceBanner";
import KeynoteSpeaker from "../components/hero/KeynoteSpeaker";
import { ConferenceContext } from "../context/ConferenceContext";
import Speakers from "../components/Speakers";
import ScheduleHighlights from "../components/ScheduleHighlights";

const Homepage = ({ data }) => {
  const conference = data.conference;
  const featuredKeynote = data.featuredKeynote;
  const speakers = data.speakers;
  const days = data.days;
  const tracks = data.tracks;
  const schedules = data.schedule;
  return (
    <>
      <ConferenceContext.Provider
        value={{ conference, featuredKeynote, speakers, days, tracks }}
      >
        <Hero>
          <ConferenceBanner />
          <KeynoteSpeaker />
        </Hero>
      </ConferenceContext.Provider>

      <Tracks tracks={tracks} />

      <Speakers speakers={speakers} schedules={schedules} />
      <ScheduleHighlights
        schedules={schedules}
        tracks={tracks}
        speakers={speakers}
        days={days}
      />
    </>
  );
};

export default Homepage;
