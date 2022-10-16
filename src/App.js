import Nav from "./Nav";
import requests from "./requests";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <Nav />
      <Row title="Trending movies" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
