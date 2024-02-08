import Analytics from "./component/Analytics";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import NewsLetter from "./component/NewsLetter";

function App() {
  return (
    <div className="App">
      {/* <h1 className="bg-slate-600">hello word</h1> */}
      <NavBar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
