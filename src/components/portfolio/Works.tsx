import { useEffect, useState } from "react"
import { projectsData } from "./Data"
import { projectsNav } from "./Data"
import WorkItems from "./WorkItems"

export default function Works() {
    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState<{ id: number; image: any; title: string; category: string }[]>([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter(project => {
                return project.category.toLocaleLowerCase() === item.name;
            })

            setProjects(newProjects);
        }
    }, [item])

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
        const selectedFilter = e.currentTarget.textContent?.toLocaleLowerCase() || "all";
        setItem({ name: selectedFilter });
        setActive(index);
    };
    
    
    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span 
                            onClick={e => handleClick(e, index)}
                            className={`${active === index ? "active-work" : ""} work__item`}
                            key={index}
                        >
                            {item.name}
                        </span>
                    )
                })}
            </div>

            <div className="work__container container grid">
                {projects.map(item => {
                    return <WorkItems item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}