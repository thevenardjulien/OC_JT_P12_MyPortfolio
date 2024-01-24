import "./App.scss";
import SectionTitle from "./components/SectionTitle";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Hero from "./layout/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <SectionTitle title="LATEST PROJECT" />
      </main>
      <Footer />
    </>
  );
}

export default App;
