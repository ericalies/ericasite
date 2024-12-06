import './App.css'
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";




const Contact = () => {
    const [message, setMessage] = React.useState('');
    const [showModal, setShowModal] = React.useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_be37kpt',
                'template_4ua4n04',
                form.current,
                {
                    publicKey: 'SwbIeC7Wi2ZCvgtW6',
                },
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    console.log('Message Sent');
                    setMessage('Your message has been sped along through the wonders of technology.');
                    setShowModal(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setMessage('An uh-oh happened. Try again and cross your fingers! ' + error.text);
                    setShowModal(true);
                },
            );
    };

    return <>
    
    <blockquote className="montserrat-alternates-bold align-middlex"><h1 className='montserrat-alternates-regular'>Contact Erica</h1></blockquote>
    <br></br>
    <p>Contact Erica with business inquiries, cute animal pics, and compliments. Insults must be sent elsewhere.</p>
    <br></br>
    
    <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="from_name"/>
            <label>Your Email</label>
            <input type="email" name="email"/>
            <label>Your Message</label>
            <textarea name="message"/>
            <input type="submit" value="Send"/>
        </form>
        {showModal ? (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div
                            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div
                                className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Hooray!
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                    <span
                        className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                    {message}
                                </p>
                            </div>
                            {/*footer*/}
                            <div
                                className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
    </StyledContactForm></>
}

const StyledContactForm = styled.div`
    width: 400px;

    form {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        font-size: 16px;

        input {
            width: 100%;
            height: 35px;
            padding: 7px;
            outline: none;
            border-radius: 5px;
            border: 1px solid rgb(220, 220, 220);

            &:focus {
                border: 2px solid rgba(0, 206, 158, 1);
            }
        }

        textarea {
            max-width: 100%;
            min-width: 100%;
            width: 100%;
            max-height: 100px;
            min-height: 100px;
            padding: 7px;
            outline: none;
            border-radius: 5px;
            border: 1px solid rgb(220, 220, 220);

            &:focus {
                border: 2px solid rgba(0, 206, 158, 1);
            }
        }

        label {
            margin-top: 1rem;
        }

        input[type="submit"] {
            margin-top: 2rem;
            cursor: pointer;
            background: rgb(249, 105, 14);
            color: white;
            border: none;
        }
    }
`;


export default Contact