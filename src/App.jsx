import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import SpeakersPage from "./pages/SpeakersPage";
import SchedulesPage from "./pages/SchedulesPage";
import data from "./data.json";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout data={data} />}>
        <Route index element={<Homepage data={data} />} />
        <Route path="/SpeakersPage" element={<SpeakersPage data={data} />} />
        <Route path="/SchedulesPage" element={<SchedulesPage data={data} />} />
      </Route>
    </Routes>
  );
};

export default App;
/**
 */
