import { useTranslation } from "react-i18next";

export default function Info() {
    const {t} = useTranslation("global")

    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">{t("about.first_card.exp")}</h3>
                <span className="about__subtitle">{t("about.first_card.desc")}</span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">{t("about.second_card.exp")}</h3>
                <span className="about__subtitle">{t("about.second_card.desc")}</span>
            </div>

            <div className="about__box">
                <i className="bx bx-support about__icon"></i>
                <h3 className="about__title">{t("about.third_card.support")}</h3>
                <span className="about__subtitle">{t("about.third_card.desc")}</span>
            </div>
        </div>
    );
}