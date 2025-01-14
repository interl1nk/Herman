import { useTranslation } from "react-i18next";

export default function Backend() {
    const {t} = useTranslation("global")

    return (
        <div className="skills__content">
            <h3 className="skills__title">{t("skills.back")}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Go</h3>
                            <span className="skills__level">{t("skills.intermidiate")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Rust</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check as"></i>

                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Kafka</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">RabbitMQ</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Patterns</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}