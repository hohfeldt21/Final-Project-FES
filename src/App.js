import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import MoviePage from "./MoviePage";
import Nav from "./Nav";
import Home from "./pages/Home";
import SearchResults from "./SearchResults";

function App() {
  const [loading, setLoading] = useState("false");
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="search" element={<SearchResults />}></Route>
          <Route path="search/:searchInput" element={<SearchResults />}></Route>
          <Route path=":id" element={<MoviePage />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
