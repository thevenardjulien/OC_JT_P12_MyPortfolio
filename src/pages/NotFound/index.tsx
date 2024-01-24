import Button from "../../components/Button";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import "./style.scss";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="NotFound">
        <div className="NotFound__wrapper">
          <h1 className="NotFound__title">Erreur 404</h1>
          <p>
            Toutes nos excuses, nous sommes dans l'incapacité de retrouver la
            page.
          </p>
        </div>
        <Button text="Retour à l'accueil" link="/" />
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
