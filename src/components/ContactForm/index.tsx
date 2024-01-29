import { Form } from "react-router-dom";
import "./style.scss";

const ContactForm = () => {
  return (
    <Form className="ContactForm">
      <fieldset className="ContactForm__fieldset">
        <legend className="ContactForm__legend">Contact Form</legend>
        <div className="UserWrapper">
          <div>
            <label className="ContactForm__label" htmlFor="userName">
              UserName
            </label>
            <input
              className="ContactForm__input"
              id="userName"
              name="userName"
            />
          </div>
          <div>
            <label className="ContactForm__label" htmlFor="Email">
              Email
            </label>
            <input className="ContactForm__input" id="Email" name="Email" />
          </div>
        </div>
        <label className="ContactForm__label" htmlFor="Message">
          Your message :
        </label>
        <textarea
          className="ContactForm__textarea"
          id="Message"
          name="Message"
        />
        <button className="ContactForm__button" type="submit">
          Submit
        </button>
      </fieldset>
    </Form>
  );
};
export default ContactForm;
