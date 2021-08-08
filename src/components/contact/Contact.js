import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_k1utqk7', 'template_exq7ava', e.target, 'user_K61V87HVCXZ8d2JSf2EXk')
        .then((result) => {
            console.log(result.text);
            alert("Email sent successfully!");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        return <div>Message sent!</div>
    }

    return (
        <div className="contact">
            <form className="contact-form" onSubmit={sendEmail}>
                <label>Subject</label>
                <input type="text" name="subject" />
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact
