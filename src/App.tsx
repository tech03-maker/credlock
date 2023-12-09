import "./App.css";
import { Navbar } from "./components/Header/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Mission } from "./components/Mission/Mission";
import { Explore } from "./components/Explore/Explore";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mission />
      <Explore />
    </div>
  );
}

export default App;
