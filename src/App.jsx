import "./App.css";
import {
  Banner,
  Discount,
  Features,
  LearnMore,
  Social,
  Vitctory,
} from "./components";

function App() {
  return (
    <main className="max-w-[1300px] mx-auto max-w-screen lg:overflow-visible overflow-x-hidden relative">
      <Banner />
      <Features />
      <Discount />
      <Vitctory />
      <Social />
      <div className="faded_bg_2" />
      <LearnMore />
    </main>
  );
}

export default App;
