import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.jpg";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_206lzgl",
        "template_6j6b84f",
        formRef.current,
        "user_PdUHFCGU4pHnP38z6s4tw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's share & critique our story</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <p className="info">+1 515 993 0000</p>
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              <p className="info">tinamariecho@yahoo.com</p>
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              <p className="info">
                1285 SE University #201 Ave Waukee, IA 50263 USA
              </p>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b> What's your story?</b> Get in touch. Available for school visit
            through Zoom or in person
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode ? "#333" : "white" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode ? "#333" : "white" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode ? "#333" : "white" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode ? "#333" : "white" }}
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
            <button>Submit</button>
            {done && <p className="thank">Thank you for reaching out🎈🎈🎈</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
