import { useTranslation } from 'react-i18next';
import './Header.css'
import { useEffect, useState } from "react";

export default function Header() {
    const {t} = useTranslation("global")
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")

    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header?.classList.add("scroll-header");
        else header?.classList.remove("scroll-header")
    })

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const handleScroll = () => {
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 50; 
                const sectionBottom = sectionTop + section.clientHeight;

                if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                    setActiveNav(`#${section.id}`);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">{t("header.name")}</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a 
                                href="#home" 
                                onClick={() => setActiveNav("#home")} 
                                className={
                                    activeNav === "#home" 
                                    ? "nav__link active-link" 
                                    : "nav__link"
                                }
                            >
                                <i className="uil uil-estate nav__icon"></i> {t("header.home")}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#about" 
                                onClick={() => setActiveNav("#about")} 
                                className={
                                    activeNav === "#about" 
                                    ? "nav__link active-link" 
                                    : "nav__link"
                                }
                            >
                                <i className="uil uil-user nav__icon"></i> {t("header.about")}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#skills" 
                                onClick={() => setActiveNav("#skills")} 
                                className={
                                    activeNav === "#skills" 
                                    ? "nav__link active-link" 
                                    : "nav__link"
                                }
                            >
                                <i className="uil uil-file-alt nav__icon"></i> {t("header.skills")}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#services" 
                                onClick={() => setActiveNav("#services")} 
                                className={
                                    activeNav === "#services" 
                                    ? "nav__link active-link" 
                                    : "nav__link"
                                }
                            >
                                <i className="uil uil-briefcase-alt nav__icon"></i> {t("header.services")}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#qualification" 
                                onClick={() => setActiveNav("#qualification")} 
                                className={
                                    activeNav === "#qualification" 
                                    ? "nav__link active-link" 
                                    : "nav__link"
                                }
                            >
                                <i className="uil uil-briefcase-alt nav__icon"></i> {t("header.qualification")}
                            </a>
                        </li>

                        {/* <li className="nav__item">
                            <a 
                                href="#portfolio" 
                                onClick={() => setActiveNav("#portfolio")} 
                                className={
                                    activeNav === "#portfolio" 
                                    ? "nav__link active-link" 
                                    : "nav__link"
                                }
                            >
                                <i className="uil uil-scenery nav__icon"></i> {t("header.portfolio")}
                            </a>
                        </li> */}

                        <li className="nav__item">
                            <a 
                                href="#contact" 
                                onClick={() => setActiveNav("#contact")} 
                                className={
                                    activeNav === "#contact" 
                                    ? "nav__link active-link" 
                                    : "nav__link"
                                }
                            >
                                <i className="uil uil-message nav__icon"></i> {t("header.contact")}
                            </a>
                        </li>
                    </ul>

                    <i 
                        className="uil uil-times nav__close"
                        onClick={() => showMenu(!Toggle)}
                    ></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}