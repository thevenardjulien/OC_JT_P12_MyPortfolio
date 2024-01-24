import "./App.scss";
import Project from "./components/Project";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Hero from "./layout/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Project />
      </main>
      <Footer />
    </>
  );
}

export default App;
