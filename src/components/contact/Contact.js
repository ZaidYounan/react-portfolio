import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_k1utqk7', 'template_exq7ava', e.target, 'user_K61V87HVCXZ8d2JSf2EXk')
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("Error! Message could not be sent!")
        });
        e.target.reset();
        return <div>Message sent!</div>
    }

    return (
        <div className="wpforms-container-full contact">
            <div className="contact-div">
                <div className="contact-text">
                    <h1 className="contact-title">Want to get in touch?</h1>
                    <h4>You can message me directly with the form below, or email me at <a href="mailto:zaid.younan@gmail.com">zaid.younan@gmail.com</a>.</h4>
                    <h4>Alternatively you can find me on <a href="https://github.com/ZaidYounan">Github <i class="fab fa-github"></i></a> and <a href="https://www.linkedin.com/in/zaid-younan/">Linked<i class="fab fa-linkedin"></i></a>.</h4>
                </div>

                <form className="wpforms-form contact-form" onSubmit={sendEmail}>
                    <label>Subject:</label>
                    <input type="text" name="subject" />
                    <label>Name:</label>
                    <input type="text" name="name" />
                    <label>Email:</label>
                    <input type="email" name="email" />
                    <label>Message:</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" className="submit-button"/>
                </form>
            </div>
        </div>
    )
}

export default Contact
