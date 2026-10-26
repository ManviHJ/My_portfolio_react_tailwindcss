import { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
    //languages
    {name: "C" , level: 70, category: "programming language"},
    // {name: "Python" ,level: 70, category: "programming language"},
    {name: "JavaScript" , level: 70, category: "programming language"},

    //frontend
    {name: "HTML",level: 90, category: "frontend"},
    {name: "CSS", level: 90, category: "frontend"},
    {name: "React.js", level: 70, category: "frontend"},

    //Backend
    {name: "Node.js", level: 60, category: "backend"},
    {name: "Express.js", level: 60, category: "backend"},

    //tools
    {name: "Figma" , level: 77, category: "tools"},
    {name: "VS Code" , level: 60,category: "tools"},
    {name: "Basic Git/Github" , level:55, category: "tools"},
    {name: "ChatGPT" , level: 50, category: "tools"},
    {name: "Claude" , level: 60, category: "tools"},
    {name: "Cursor IDE" , level: 50, category: "tools"},
    {name: "Codex IDE" , level: 50, category: "tools"},

    //database
    {name: "MongoDB" , level: 65 , category: "databases"},

    //design
    {name: "User Research" , level: 70 , category: "design"},
    {name: "Wireframing" , level: 70 , category: "design"},
    {name: "User Flow" , level: 70 , category: "design"},
    {name: "Prototyping" , level: 70 , category: "design"},
    {name: "Variables" , level: 70 , category: "design"},
    {name: "Components" , level: 70 , category: "design"},
    {name: "Basic Design Systems" , level: 70 , category: "design"},

    //soft skills
    {name: "Verbal & Written Communication Skills " , level: 75 , category: "soft skills"},
    {name: "Teamwork & Collaboration " , level: 70 , category: "soft skills"},
    {name: "Continuous Learning" , level: 85 , category: "soft skills"},
    
];

const categories = ["all", "programming language", "frontend", "backend", "tools" ,"databases" , "design" , "soft skills"];



export const SkillsSection = () => {

    const[activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                    key={key} 
                    onClick={()=> setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover: bg-secondary"
                    )}>
                        {category}
                        </button>
                ))}

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} 
                    className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{ width: skill.level + "%"}}
                        />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
    );
}