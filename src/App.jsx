import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Tracks from "./components/Tracks";
import ConferenceBanner from "./components/hero/ConferenceBanner";
import KeynoteSpeaker from "./components/hero/KeynoteSpeaker";
import data from "./data.json";
import { ConferenceContext } from "./context/ConferenceContext";
import Speakers from "./components/Speakers";
import ScheduleHighlights from "./components/ScheduleHighlights";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

const App = () => {
  const conference = data.conference;
  const featuredKeynote = data.featuredKeynote;
  const speakers = data.speakers;
  const days = data.days;
  const tracks = data.tracks;
  const schedules = data.schedule;

  return (
    <>
      <Header conferenceName={conference.name} />

      <ConferenceContext.Provider
        value={{ conference, featuredKeynote, speakers, days }}
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
      />
      <AboutSection conference={conference} tracks={tracks} />
      <Footer />
    </>
  );
};

export default App;
/**

 */
