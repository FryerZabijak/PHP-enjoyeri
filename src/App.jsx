import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pocatek from "./components/Pocatek";
import Vyhody from "./components/Vyhody";
import Wrapper from "./components/Wrapper";
import Tipy from "./components/Tipy";
import Recenze from "./components/Recenze";
import Firmy from "./components/Firmy";
import Kontakt from "./components/Kontakt";

function App() {
  return (
    <div className="App mb-52">
        <Navbar />
      <Wrapper>
        <Hero />
        <Pocatek/>
        <Vyhody/>
        <Tipy/>
        <Recenze/>
        <Firmy/>
        <Kontakt/>
      </Wrapper>
    </div>
  );
}

export default App;
