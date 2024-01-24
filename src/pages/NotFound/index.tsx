import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import "./index.scss";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="NotFound">
        <h1 className="NotFound__title">Erreur 404</h1>
        <p>
          Toutes nos excuses, nous sommes dans l'incapacité de retrouver la
          page.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
