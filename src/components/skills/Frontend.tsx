import { useTranslation } from "react-i18next";

export default function Frontend() {
    const {t} = useTranslation("global")

    return (
        <div className="skills__content">
            <h3 className="skills__title">{t("skills.front")}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check as"></i>

                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">{t("skills.intermidiate")}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Redux</h3>
                            <span className="skills__level">{t("skills.basic")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}