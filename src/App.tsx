import "./App.css";
import { Navbar } from "./components/Header/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Mission } from "./components/Mission/Mission";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mission />
    </div>
  );
}

export default App;
