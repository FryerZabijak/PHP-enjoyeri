import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pocatek from "./components/Pocatek";
import Vyhody from "./components/Vyhody";
import Wrapper from "./components/Wrapper";
import Tipy from "./components/Tipy";

function App() {
  return (
    <div className="App mb-52">
        <Navbar />
      <Wrapper>
        <Hero />
        <Pocatek/>
        <Vyhody/>
        <Tipy/>
      </Wrapper>
    </div>
  );
}

export default App;
