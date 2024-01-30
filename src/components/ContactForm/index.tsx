import { useState } from "react";
import "./style.scss";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userName = e.currentTarget.userName.value;
    const email = e.currentTarget.Email.value;
    const message = e.currentTarget.Message.value;
    const formData = { userName, email, message };
    setFormResponse("Your form has been sent!");
    console.log(formData);
  };
  const [formResponse, setFormResponse] = useState<string | null>(null);
  return (
    <form className="ContactForm" onSubmit={(e) => handleSubmit(e)}>
      <fieldset className="ContactForm__fieldset">
        <legend className="ContactForm__legend">Contact Form</legend>
        <div className="UserWrapper">
          <div>
            <label className="ContactForm__label" htmlFor="userName">
              UserName
            </label>
            <input
              className="ContactForm__input"
              type="text"
              id="userName"
              name="userName"
            />
          </div>
          <div>
            <label className="ContactForm__label" htmlFor="Email">
              Email
            </label>
            <input
              className="ContactForm__input"
              type="email"
              id="Email"
              name="Email"
            />
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
        <div>{formResponse}</div>
      </fieldset>
    </form>
  );
};
export default ContactForm;
