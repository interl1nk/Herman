import { useState } from "react";
import "./Qualification.css"
import { useTranslation } from "react-i18next";

export default function Qualification() {
    const {t} = useTranslation("global")
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index: number) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">{t("qualification.title")}</h2>
            <span className="section__subtitle">{t("qualification.subtitle")}</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                    className={
                        toggleState === 1
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        {t("qualification.edu")}
                    </div>

                    <div 
                    className={
                        toggleState === 2
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        {t("qualification.work")}
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={
                        toggleState === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{t("qualification.faculty")}</h3>
                                <span className="qualification__subtitle">{t("qualification.university")}<br/>{t("qualification.country")}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">{t("qualification.aws_certified_1")}</h3>
                                <span className="qualification__subtitle">{t("qualification.aws_course")}<br />{t("qualification.country")}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{t("qualification.aws_certified_2")}</h3>
                                <span className="qualification__subtitle">{t("qualification.aws_course")}<br />{t("qualification.country")}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={
                        toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{t("qualification.job_1")}</h3>
                                <span className="qualification__subtitle">{t("qualification.country_by")}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">{t("qualification.job_2")}</h3>
                                <span className="qualification__subtitle">{t("qualification.company_1")}<br />{t("qualification.country")}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Google StartUp</h3>
                                <span className="qualification__subtitle">{t("qualification.country")}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                            <h3 className="qualification__title">{t("qualification.job_1")}</h3>
                                <span className="qualification__subtitle">{t("qualification.company_2")}<br />{t("qualification.country")}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{t("qualification.job_1")}</h3>
                                <span className="qualification__subtitle">{t("qualification.company_3")}<br />{t("qualification.country_by-pl")}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}