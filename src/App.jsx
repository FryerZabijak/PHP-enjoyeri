import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pocatek from "./components/Pocatek";
import Vyhody from "./components/Vyhody";
import Wrapper from "./components/Wrapper";
import Tipy from "./components/Tipy";
import Recenze from "./components/Recenze";
import Firmy from "./components/Firmy";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";
import Aos from "aos";
import 'aos/dist/aos.css'

function App() {
  Aos.init();

  return (
    <div className="App">
        <Navbar />
      <Wrapper>
        <Hero/>
        <Pocatek/>
        <Vyhody/>
        <Tipy/>
        <Recenze/>
        <Firmy/>
        <Kontakt/>
      </Wrapper>
        <Footer/>
    </div>
  );
}

export default App;
