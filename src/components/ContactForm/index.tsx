import { messagePost } from "../../services/messageAPI";
import "./style.scss";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { userName, email, message } = e.currentTarget;
    console.log(userName.value, email.value, message.value);
    messagePost(userName.value, email.value, message.value);
  };
  return (
    <form className="ContactForm" onSubmit={(e) => handleSubmit(e)}>
      <fieldset className="ContactForm__fieldset">
        <legend className="ContactForm__legend">Contact Form</legend>
        <div className="UserWrapper">
          <div>
            <label className="ContactForm__label" htmlFor="userName">
              Name
            </label>
            <input
              className="ContactForm__input"
              type="text"
              id="userName"
              name="userName"
              required
              minLength={3}
              maxLength={126}
            />
          </div>
          <div>
            <label className="ContactForm__label" htmlFor="email">
              Email
            </label>
            <input
              className="ContactForm__input"
              type="email"
              id="email"
              name="email"
              required
              maxLength={126}
            />
          </div>
        </div>
        <label className="ContactForm__label" htmlFor="message">
          Your message :
        </label>
        <textarea
          className="ContactForm__textarea"
          id="message"
          name="message"
          required
        />
        <button className="ContactForm__button" type="submit">
          Submit
        </button>
      </fieldset>
    </form>
  );
};
export default ContactForm;
