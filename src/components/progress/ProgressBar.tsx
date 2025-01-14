import { useEffect, useState } from "react";
import "./ProgressBar.css"

export default function ProgressBar() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
        </div>
    );
}