import { useTranslation } from "react-i18next";

export default function DevOps() {
    const {t} = useTranslation("global")

    return (
        <div className="skills__content">
            <h3 className="skills__title">{t("skills.devops")}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Shell</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check as"></i>

                        <div>
                            <h3 className="skills__name">K8S</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Prometheus</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Git Actions</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">AWS</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}