import React from "react";
import "./home.css";
import NavBar from "../../components/NavBar/NavBar";
import Articles from "../../components/Articles/Articles";

function Home() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Articles></Articles>
      </main>
    </>
  );
}

export default Home;
