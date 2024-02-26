import { useRef } from "react";
import "./style.scss";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { userName, email, message } = e.currentTarget;
    if (
      userName.value.trim() !== "" &&
      userName.reportValidity() &&
      email.value.trim() !== "" &&
      email.reportValidity() &&
      message.value.trim() !== "" &&
      message.reportValidity()
    ) {
      emailjs
        .sendForm("service_1sptgu6", "template_g9actwj", form.current, {
          publicKey: "sArzFEUNT8gIWgywT",
        })
        .then(
          () => {
            toast.success("Message sent successfully!");
          },
          (error) => {
            toast.error(
              "Unable to send message. Try again later...",
              error.text
            );
          }
        );
      form.current?.reset();
    } else {
      toast.error(
        `Problem sending the form.
         Check the fields before trying again...`
      );
    }
  };
  return (
    <form ref={form} className="ContactForm" onSubmit={(e) => handleSubmit(e)}>
      <fieldset className="ContactForm__fieldset">
        <legend className="ContactForm__legend">Contact Form</legend>
        <div className="UserWrapper">
          <div>
            <input
              className="ContactForm__input"
              type="text"
              id="userName"
              name="userName"
              placeholder="Name"
              required
              minLength={3}
              maxLength={126}
            />
          </div>
          <div>
            <input
              className="ContactForm__input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              maxLength={126}
            />
          </div>
        </div>

        <textarea
          className="ContactForm__textarea"
          id="message"
          name="message"
          placeholder="Message"
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
