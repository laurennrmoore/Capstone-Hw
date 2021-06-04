
Nav Bar Styles
.navlinks{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100vw;
    font-size: 15px;
    list-style-type: none;
    background-color: beige;
    
  };

  navbar{
    
    height: 80px;
  
  }
  
 
New Annual Cincinnati Events slide pics - images and imports  
import Flyingpigrun from '../img/Flyingpigrun.jpg'; 
import Cinmusicfest from '../img/Cinmusicfest.jpg'; 
import Oktoberfest from '../img/Oktoberfest.jpg';
import Ark from '../img/Ark.jpg';
import Riverboat2 from '../img/Riverboat2.jpg';
<img alt='image' src= {Flyingpigrun} />
<p className="legend">Legend 14</p>
</div>
<div>
<img alt='image' src= {Cinmusicfest} />
<p className="legend">Legend 14</p>
</div>
<div>
<img alt='image' src= {Oktoberfest} />
<p className="legend">Legend 16</p>
</div>
<div>
<img alt='image' src= {Ark} />
<p className="legend">Legend 15</p>
</div>
<div>
<img alt='image' src= {Riverboat2} />
<p className="legend">Legend 16</p>
</div>



Contact form Code
import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Jeremiah Jones" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="jeremiah@gmail.com" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;