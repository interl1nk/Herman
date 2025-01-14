import { useEffect, useState } from "react";
import "./Services.css"
import { useTranslation } from "react-i18next";

export default function Services() {
    const {t} = useTranslation("global")
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index: number) => {
        setToggleState(index);
    }

    useEffect(() => {
        if (toggleState !== 0) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [toggleState]);

    return (
        <section className="services section" id="services">
            <h2 className="section__title">{t("services.title")}</h2>
            <span className="section__subtitle">{t("services.subtitle")}</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            IT <br /> {t("services.first_card.title")}
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        {t("buttons.more")}
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div
                        className={
                            toggleState === 1
                                ? "services__modal active-modal"
                                : "services__modal"
                        }
                    >
                        <div className="services__modal-content">
                            <i 
                                className="uil uil-times services__modal-close"
                                onClick={() => toggleTab(0)} 
                            ></i>

                            <h3 className="services__modal-title">{t("services.first_card.title")}</h3>
                            <p className="services__modal-description">{t("services.first_card.desc")}</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.first_card.first")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.first_card.second")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.first_card.third")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.first_card.fourth")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.first_card.fifth")}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            IT/Bio <br /> {t("services.second_card.title")}
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        {t("buttons.more")}
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div                         
                        className={
                            toggleState === 2
                                ? "services__modal active-modal"
                                : "services__modal"
                        }>
                        <div className="services__modal-content">
                            <i 
                            className="uil uil-times services__modal-close"
                            onClick={() => toggleTab(0)}
                            ></i>

                            <h3 className="services__modal-title">{t("services.second_card.title")}</h3>
                            <p className="services__modal-description">{t("services.second_card.desc")}</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.second_card.first")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.second_card.second")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.second_card.third")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.second_card.fourth")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.second_card.fifth")}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">
                            {t("services.second_card.title")}<br /> {t("services.third_card.title")}
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>
                        {t("buttons.more")}
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div
                        className={
                            toggleState === 3
                                ? "services__modal active-modal"
                                : "services__modal"
                        }
                    >
                        <div className="services__modal-content">
                            <i 
                                className="uil uil-times services__modal-close" 
                                onClick={() => toggleTab(0)}
                            ></i>

                            <h3 className="services__modal-title">{t("services.third_card.title")}</h3>
                            <p className="services__modal-description">{t("services.third_card.desc")}</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.third_card.first")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.third_card.second")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.third_card.third")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.third_card.fourth")}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="services__modal-info">
                                        {t("services.third_card.fifth")}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}