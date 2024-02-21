import { useNavigate } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { login } from "../../services/userAPI";
import "./style.scss";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const loginResponse = await login(email, password);
    localStorage.setItem("token", loginResponse.token);
    navigate("/dashboard");
  };
  return (
    <>
      <Header />
      <main>
        <form className="Login" onSubmit={(e) => handleSubmit(e)}>
          <label className="Login__label" htmlFor="email">
            Email
          </label>
          <input className="Login__input" type="email" name="email" required />
          <label className="Login__label" htmlFor="password">
            Password
          </label>
          <input
            className="Login__input"
            type="password"
            name="password"
            required
          />
          <button className="Login__button" type="submit">
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Login;
