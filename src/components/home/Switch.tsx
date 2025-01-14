import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./Switch.css";

export default function Switch() {
    const [t, i18next] = useTranslation("global");

    useEffect(() => {
        const savedLanguage = sessionStorage.getItem("language");
        if (savedLanguage) {
            i18next.changeLanguage(savedLanguage);
        }
    }, [i18next]);

    const handleChangeLanguage = (lang: string) => {
        i18next.changeLanguage(lang);
        sessionStorage.setItem("language", lang); 
    };

    return (
        <span className="switch">
            <input 
                type="checkbox" 
                id="switcher" 
                onChange={() => handleChangeLanguage(i18next.language === "ru" ? "en" : "ru")}
                checked={i18next.language === "ru"}
            />
            <label htmlFor="switcher"></label>
        </span>
    );
}
