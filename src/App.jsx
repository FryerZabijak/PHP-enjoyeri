import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <Hero />
      </Wrapper>
    </div>
  );
}

export default App;
