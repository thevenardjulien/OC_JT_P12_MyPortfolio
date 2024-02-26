import ContactForm from "../../components/ContactForm";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <h2 className="main-title">CONTACT ME</h2>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};
export default Contact;
