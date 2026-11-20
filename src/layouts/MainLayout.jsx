import { Outlet } from "react-router";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

const MainLayout = ({ data }) => {
  const conference = data.conference;
  const tracks = data.tracks;
  return (
    <>
      <Header conferenceName={conference.name} />
      <div className="px-3">
        <Outlet />

        <AboutSection conference={conference} tracks={tracks} />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
