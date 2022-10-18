import React from "react";
import Row from "../Row";
import SearchBar from "../SearchBar";
import requests from "../requests";

const Home = () => {
  return (
    <>
      <SearchBar />
      <Row title={"Trending movies"} fetchUrl={requests.fetchTrending} />
    </>
  );
};

export default Home;
