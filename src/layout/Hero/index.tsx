import logo from "../../assets/images/logo.png";
import "./style.scss";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__left">
        <img className="Hero__logo" src={logo} alt="logo JT" />
      </div>
      <div className="Hero__right">
        <div className="Hero__right__content">
          <h1>Hello ! I'm Julien,</h1>
          <br />
          <h2>33 years old</h2>
          <h2>Passionate about design</h2>
          <h2>& web development</h2>
          <br />
          <p>I invite you to discover my modest projects...</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
