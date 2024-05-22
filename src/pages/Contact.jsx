import { React, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Formik } from 'formik';
import { successAlert, errorAlert } from '../utils/toastifyAlerts'
import { ToastContainer } from 'react-toastify'
import '../styles/form.css'
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
    let contact = 'Contact me';

    const [captcha, setCaptcha] = useState();

    const handleSubmit = async (values) => {
        try {
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                values,
                process.env.REACT_APP_PUBLIC_KEY,
            ).then(function (response) {
                successAlert('Done! we have your message.')
            });
        } catch (e) {
            console.log(e);
            errorAlert(`Someting went wrong: \n ${e}`)
        }
    }

    return (
        <main>
            <div className="pages contact">
                <h1 className="main">{contact}</h1>
                <Formik
                    initialValues={{ name: '', email: '', subject: '', message: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Please, enter a valid email address';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        } else if (!values.name) {
                            errors.name = 'Pleas, enter a name';
                        }
                        return errors;
                    }}
                    onSubmit={async (values) => {
                        await handleSubmit(values);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <form className='form-login' onSubmit={handleSubmit}>
                            <input
                                placeholder="Name"
                                className='input-form'
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && errors.name}
                            <input
                                placeholder="Email"
                                className='input-form'
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <input
                                placeholder="Subject"
                                className='input-form'
                                type="text"
                                name="subject"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.subject}
                            />
                            {errors.subject && touched.subject && errors.subject}
                            <textarea
                                placeholder="text me please :)"
                                className='input-form'
                                type="text"
                                name="message"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                            />
                            {errors.subject && touched.subject && errors.subject}
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_CAPTCHA}
                                onChange={(val) => setCaptcha(val)}
                            />
                            <button
                                className='btnSCV-long btnSCV-register'
                                type="submit"
                                disabled={isSubmitting || !captcha}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
            <ToastContainer />
        </main >
    );
}

export default Contact;