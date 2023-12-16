import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Movies from "./Movies";
import TvSeries from "./TvSeries";
import Bookmarked from "./Bookmarked";
import Provider from "./Components/Provider";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvseries" element={<TvSeries />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
