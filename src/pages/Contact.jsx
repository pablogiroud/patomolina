import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
    let contact = 'Contact me';
    return (
        <main>
            <div className="pages contact">
                <h1 className="main">{contact}</h1>
                <ContactForm />
            </div>
        </main>
    );
}

export default Contact;