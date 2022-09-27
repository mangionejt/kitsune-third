
import { useState } from "react";
import "./contact.scss";


const Contact = () => {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e)=> {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <section data-scroll-section>
    <div className="contact" id="contact">
    <div className="left">
    <img src="assets/shake.svg" alt="contact"></img>


    </div>
    <div className="right">
    <h2>Contact.</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="E-mail" name="user_email"/>
      <textarea placeholder="Message" name="message"></textarea>
      <button>Send</button>
      {message && <span>Thanks, We'll reply soon!</span>}

      </form>  

    </div>
      
    </div>
    </section>
  )
}

export default Contact
