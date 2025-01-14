import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import Swal from "sweetalert2"
import { useTranslation } from 'react-i18next';

interface FormValues {
    name: string;
    email: string;
    message: string;
}


export default function Contact() {
    const {t} = useTranslation("global")
    const form = useRef<HTMLFormElement | null>(null);
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState<FormValues>({
        name: '',
        email: '',
        message: '',
    });
    const [maxCharsExceeded, setMaxCharsExceeded] = useState<{
        [key: string]: boolean;
    }>({
        name: false,
        email: false,
        message: false,
    });
    const maxLengths = {
        name: 30,
        email: 64,
        message: 120
    }
    const emailjsUserId = process.env.REACT_APP_EMAILJS_USER_ID;
    const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const emailjsApiKey = process.env.REACT_APP_EMAILJS_API_KEY;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const maxLength = maxLengths[name as keyof typeof maxLengths];

        const truncatedValue = value.slice(0, maxLength);

        const urlPattern = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/g;

        if (urlPattern.test(value)) {
            Swal.fire({
                title: t("response.warning"),
                text: t("response.link"),
                icon: "warning",
                backdrop: `rgba(0, 0, 0, 0.6)`,
                timer: 3000,  
                showConfirmButton: false,
            });
            return; 
        }

        setMaxCharsExceeded(prevState => ({
            ...prevState,
            [name]: truncatedValue.length >= maxLength,
        }));

        setFormData((prevData) => ({
            ...prevData,
            [name]: truncatedValue,
        }));
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            Swal.fire({
                title: t("errors.error"),
                text: t("errors.form"),
                icon: "warning",
                backdrop: `rgba(0, 0, 0, 0.6)`,
                timer: 3000,  
                showConfirmButton: false,
            });
            return; 
        }

        setIsSending(true);

        if (form.current) {
            emailjs
                .sendForm(
                    emailjsApiKey as string,
                    emailjsTemplateId as string,
                    form.current,
                    emailjsUserId as string,
                )
                .then(() => {
                    setIsSending(false);
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                    Swal.fire({
                        title: t("response.success"),
                        text: t("response.ok"),
                        icon: "success",
                        backdrop: `rgba(0, 0, 0, 0.6)`,
                        timer: 3000, 
                        showConfirmButton: false,
                    });
                })
                .catch((error) => {
                    setIsSending(false);
                    console.log('FAILED...', error.text);
                    Swal.fire({
                        title: t("errors.error"),
                        text: t("errors.error_msg"),
                        icon: "error",
                        backdrop: `rgba(0, 0, 0, 0.6)`,
                        timer: 3000, 
                        showConfirmButton: false,
                    });
                })
                .finally(() => {
                    setIsSending(false); 
                });
        }
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">{t("contact.title")}</h2>
            <span className="section__subtitle">{t("contact.subtitle")}</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">{t("contact.talk")}</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">hmurauyou@icloud.com</span>

                            <a href="mailto:hmurauyou@icloud.com" className="contact__button">
                                {t("buttons.write")}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">WhatsApp</h3>

                            <a href="https://wa.me/375257774704" target="_blank" rel="noreferrer" className="contact__button">
                                {t("buttons.write")}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-telegram contact__card-icon"></i>

                            <h3 className="contact__card-title">Telegram</h3>
                            <span className="contact__card-data">@interlink_chief</span>

                            <a href="https://t.me/interlink_chief" target="_blank" rel="noreferrer" className="contact__button">
                                {t("buttons.write")}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="contact__content">
                    <h3 className="contact__title">{t("contact.form")}</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                        <label className={`contact__form-tag ${maxCharsExceeded['name'] ? "max_chars_exceeded-tag" : ""}`}>{t("contact.name")}</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                pattern="^[A-Za-zА-Яа-яЁё]{2,50}(?:[\s\-][A-Za-zА-Яа-яЁё]{2,50})*$"
                                onChange={handleChange}
                                autoComplete="off"
                                className={`contact__form-input ${maxCharsExceeded['name'] ? "max_chars_exceeded" : ""}`}
                                placeholder={t("contact.place_name")}
                                maxLength={maxLengths.name}
                                required
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className={`contact__form-tag ${maxCharsExceeded['email'] ? "max_chars_exceeded-tag" : ""}`}>{t("contact.email")}</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                                onChange={handleChange}
                                autoComplete="off"
                                className={`contact__form-input ${maxCharsExceeded['email'] ? "max_chars_exceeded" : ""}`}
                                placeholder={t("contact.place_email")}
                                maxLength={maxLengths.email}
                                required
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className={`contact__form-tag ${maxCharsExceeded['message'] ? "max_chars_exceeded-tag" : ""}`}>{t("contact.message")}</label>
                            <textarea 
                                name="message"
                                cols={30}
                                rows={10}
                                value={formData.message}
                                onChange={handleChange}
                                autoComplete="off"
                                className={`contact__form-input ${maxCharsExceeded['message'] ? "max_chars_exceeded" : ""}`}
                                placeholder={t("contact.place_message")}
                                maxLength={maxLengths.message}
                                required
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="button button--flex" 
                            disabled={isSending ? true : false}
                        >
                            {isSending ? t("contact.sending") : t("buttons.send")}
                            <svg
                                className="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                            <path
                                d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                fill="var(--container-color)"
                            ></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
