import { useTranslation } from "react-i18next";

export default function Database() {
    const {t} = useTranslation("global")

    return (
        <div className="skills__content">
            <h3 className="skills__title">{t("skills.database")}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">SQL</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">PostgreSQL</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check as"></i>

                        <div>
                            <h3 className="skills__name">ClickHouse</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">NoSQL</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Redis</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}