import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { login } from "../../services/userAPI";
import { useAppStore } from "../../store/userStore";
import "./style.scss";

const Login = () => {
  const form = useRef();
  const navigate = useNavigate();
  const { updateIdentifier, updateToken, updateIsLogged } = useAppStore();
  const [loginResponse, setLoginResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const password = e.target.password.value;
    connect(userName, password);
  };

  const connect = async (userName: string, password: string) => {
    try {
      const response = await login(userName, password);
      const token = response.jwt;
      localStorage.setItem("identifier", userName);
      localStorage.setItem("token", token);
      updateIdentifier(userName);
      updateToken(token);
      navigate("/dashboard");
      updateIsLogged(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <main>
        <form
          className="adminForm"
          action="#"
          onSubmit={(e) => handleSubmit(e)}
          ref={form}
        >
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            id="name"
            name="name"
            min-length="6"
            max-length="125"
            required
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            min-length="8"
            max-length="125"
            required
          />
          <button className="adminForm__btn" type="submit">
            Login
          </button>
          <p>{loginResponse}</p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Login;
