import "./Skills.css"
import Frontend from "./Frontend";
import Backend from "./Backend";
import { useTranslation } from "react-i18next";
import DevOps from "./DevOps";
import Database from "./Database";

export default function Skills() {
    const {t} = useTranslation("global")

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">{t("skills.title")}</h2>
            <span className="section__subtitle">{t("skills.subtitle")}</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <Database />
                <DevOps />
            </div>
        </section>
    );
}