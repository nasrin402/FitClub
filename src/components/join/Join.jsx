import React, {useRef} from "react";
import './Join.css';
import emailjs from "@emailjs/browser";
const Join = () => {
 const form = useRef();
 
 const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rpopu0h', 'template_n9j9pzi', form.current, 'ztSRBB5y0lvIS6aip')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
    <div className="join" id="join">
      <div className="left-j">
      <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
       <form onSubmit={sendEmail} ref={form} className="email-container">
        <input type="email" name="user_email" placeholder="Enter your email to join" />
        <button type="submit" className="btn btn-j">Join now</button>
       </form>
      </div>
    </div>
  );
};

export default Join;
