import React, { useRef } from "react";
import Back from "../common/back/Back";
import "./contact.css";
import emailjs from '@emailjs/browser'



const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8763994536293!2d36.88679511430506!3d-1.2450214359326062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15ca7016992f%3A0x4b7f89640fb5e285!2sBega%20Kwa%20Bega!5e0!3m2!1sen!2ske!4v1676022392648!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1vgzn7d",
        "template_39ia0rl",
        form.current,
        "kWA-pk8ZZM_g_-Q7h"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>203 Bega kwa Bega, Baba Dogo, Nairobi, Kenya</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> octalideas@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+254 799 444 133</p>
              </div>
            </div>

            <form  ref={form} onSubmit={sendEmail}>
              <div className="flexSB">
                <input type="text" placeholder="Name" name="user_name"/>
                <input type="email" placeholder="Email" name="user_email"/>
              </div>
              <input type="text" placeholder="Subject" name="subject"/>
              <textarea
                cols="30"
                rows="10"
                defaultValue="Create a message here..."
                name="message"
              ></textarea>
              <button className="primary-btn" type="submit">
                SEND MESSAGE
              </button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
