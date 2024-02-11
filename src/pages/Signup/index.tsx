import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { signup } from "../../services/userAPI";
import "./style.scss";

const Signup = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    signup(email, password);
  };
  return (
    <>
      <Header />
      <main>
        <form className="SignupForm" onSubmit={(e) => handleSubmit(e)}>
          <label className="SignupForm__label" htmlFor="email">
            Email
          </label>
          <input
            className="SignupForm__input"
            type="email"
            name="email"
            required
          />
          <label className="SignupForm__label" htmlFor="password">
            Password
          </label>
          <input
            className="SignupForm__input"
            type="password"
            name="password"
            required
          />
          <button className="SignupForm__button" type="submit">
            Submit
          </button>
          <Link className="SignupForm__login" to="/login">
            Already signed up ? Go to login!
          </Link>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
