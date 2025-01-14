import { useTranslation } from "react-i18next";
import "./Footer.css"

export default function Footer() {
    const {t} = useTranslation("global")

    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">{t("footer.name")}</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">{t("header.about")}</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">{t("header.skills")}</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">{t("header.services")}</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a 
                        href="https://dzen.ru/interlink?share_to=link" 
                        className="footer__social-link" 
                        target="_blank" rel="noreferrer"
                    >
                        <i className='bx bxl-yahoo'></i>
                    </a>
                    <a 
                        href="https://t.me/interlink_chief" 
                        className="footer__social-link" 
                        target="_blank" rel="noreferrer"
                    >
                        <i className="bx bxl-telegram"></i>
                    </a>
                    <a 
                        href="https://medium.com/@interlink" 
                        className="footer__social-link" 
                        target="_blank" rel="noreferrer"
                    >
                        <i className="bx bxl-medium"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; {t("footer.rights")}
                </span>
            </div>
        </footer>
    );
}