import Row from "./components/Row/Row";
import movies from "./data/data";

function App() {
  return (
    <>
      <Row title="Popular on Netflix" movies={movies} />

      <Row title="Trending Now" movies={movies} />

      <Row title="Continue Watching" movies={movies} />
    </>
  );
}

export default App;
