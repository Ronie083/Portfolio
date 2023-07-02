import Lottie from "lottie-react";
import contactAnimation from '../../../public/contact-sent-email.json'
import emailjs from 'emailjs-com';
import { useRef } from "react";
import { Form } from "react-router-dom";

const Contact = () => {
    const formRef = useRef(null);

    const handleContacts = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_mmyxhfk', 'template_k7ch93t', formRef.current, 'FHDcr9np0w5NqtIGG' )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        event.target.reset();
    }

    return (
        <div className="text-center">
            <h1 className="text-4xl font-semibold">Get In Touch</h1>
            <hr />
            <div className="grid md:grid-cols-4 container mx-auto md:ml-24">
                <div className="container mx-auto ml-10">
                    <Lottie animationData={contactAnimation} loop={true}></Lottie>
                    <h1>Send Me a Message</h1>
                </div>
                {/* form of contact */}
                <div className="col-span-2 p-10">
                    <Form onSubmit={handleContacts} ref={formRef}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" name="subject" placeholder="subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea className="textarea textarea-accent" name="message" placeholder="Bio"></textarea>
                        </div>
                        <input type="submit" className="btn btn-info my-5" value='Send message' />
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
