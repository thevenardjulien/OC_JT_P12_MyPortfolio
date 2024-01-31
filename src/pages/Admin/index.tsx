import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { login } from "../../services/userAPI";
import "./style.scss";

const Admin = () => {
  const form = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const password = e.target.password.value;
    connect(userName, password);
    navigate("/admin/dashboard");
  };

  const connect = async (userName: string, password: string) => {
    try {
      const response = await login(userName, password);
      localStorage.setItem("token", response.jwt);
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
          <input type="text" id="name" name="name" />
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" />
          <button className="adminForm__btn" type="submit">
            Login
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Admin;
