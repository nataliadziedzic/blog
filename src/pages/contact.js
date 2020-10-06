import React from 'react';
// import axios from "axios";
import { Formik, useField } from 'formik';
import * as Yup from "yup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const ContactPage = () => {
    const MyInput = ({ ...props }) => {
        const [field, meta] = useField(props);
        return (
            <div className="form__fieldWrapper">
                <input className='form__input' {...field} {...props} />
                {meta.touched && meta.error ? <div className="form__err">{meta.error}</div> : <div className="form__err"></div>}
            </div>
        );
    }
    const MyMessage = ({ ...props }) => {
        const [field, meta] = useField(props);
        return (
            <div className="form__fieldWrapper">
                <textarea className="form__message"{...field} {...props} />
                {meta.touched && meta.error ? <div className="form__err">{meta.error}</div> : <div className="form__err"></div>}
            </div>
        );
    }
    return (
        <Formik
            initialValues={{
                topic: '',
                email: '',
                message: '',
            }}
            validationSchema={Yup.object({
                topic: Yup.string()
                    .min(5, 'Must be at least 5 characters.')
                    .max(15, "It's too long!")
                    .required('Required.'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required.'),
                message: Yup.string()
                    .min(10, 'Your message is too short :(')
                    .required('Required.'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                // axios.post("http://localhost:5001/fashion-blog-dce5d/us-central1/helloWorld", values).then((res) => {
                //     console.log(res);
                //     setSubmitting(false);
                // }).catch((err) => {
                //     console.log(err)
                //     setSubmitting(false);
                // })
                setTimeout(() => {
                    alert("Contact form is not ready yet :( But you can still write to me: nbaginska667@gmail.com")
                }, 400)
            }}
        >{props => (
            <div className="contact">
                <form className="form" onSubmit={props.handleSubmit}>
                    <h1 className="form__header">Write to me!</h1>
                    <MyInput placeholder="Topic" name="topic" label="Topic" />
                    <MyInput type="email" name="email" placeholder="E-mail" label="e-mail" />
                    <MyMessage placeholder="Message..." name="message" />
                    <button className="form__submit" type="submit">{props.isSubmitting ? "Loading..." : "Submit!"}</button>
                </form>
                <div className="follow">
                    <h1 className="follow__header">Follow me!</h1>
                    <a href="https://www.instagram.com/nurthixblog/" className="follow__instagram">
                        <FontAwesomeIcon icon={faInstagram} size="1x" /> nurthix</a>
                </div>
            </div>
        )}
        </Formik>
    );
};
export default ContactPage