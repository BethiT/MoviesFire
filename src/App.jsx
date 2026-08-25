import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Row from "./Components/Row/Row";
import movies from "./data copy/data";


function App() {
  return (
    <>
      <Header />
      <Banner />
      <Row title="Popular on Netflix" movies={movies} />

      <Row title="Trending Now" movies={movies} />

      <Row title="Continue Watching" movies={movies} />
      <Footer />
    </>
  );
}

export default App;
