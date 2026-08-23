import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, ArrowRight } from "lucide-react";
import {  SiNotion, SiGithub } from 'react-icons/si'; 
// import { FiExternalLink } from "react-icons/fi";


const projects = [
    {
        id: 1,
        title: "Digital Coffee Menu UI",
        description: "Designed a responsive modern mobile app interface for a coffee shop that allows users to explore the menu, place orders, and discover featured drinks with a smooth and visually appealing user experience.",
        image: "/projects/cafe.png",
        tags: ["Figma","Google Forms"],
        demoUrl: "https://www.figma.com/design/O2rQ7eX9y4ehQxraosdi7b/Digital-Coffee-menu-UI?node-id=0-1&t=mjZS0rgiaL6zzMuj-1",
        notionUrl: "https://app.notion.com/p/Digital-Menu-Card-for-a-Traditional-Coffee-Cafe-3a068ba4fae38012b91fe8cbd4c10136",
        category: "design projects",
    },
    {
        id: 2,
        title: "Plastics Manufacturing ERP and Inventory System",
        description: "Developed modules for inventory management, production tracking, sales, purchases, and account management using the MERN stack.",
        image: "/projects/ERP.png",
        tags: ["React.js","Node.js","Express.js","MongoDB","JWT based Authentication", "Postman"],
        githubUrl: "https://github.com/ManviHJ/ERPandInventory",
        category: "technical projects",
    },
    {
        id: 3,
        title: "Web-Integrated AI System for Bone Cancer Prediction",
        description: "Developed a web-based bone cancer detection system using CNN and transfer learning.",
        image: "/projects/Bone.png",
        tags: ["Python","TensorFlow/Keras","OpenCV","Pillow","Flask", "SQLite", "HTML", "CSS", "JavaScript", "CNN", "OpenAI API", "Transfer Learning"],
        githubUrl: "https://github.com/ManviHJ/BoneCancerPredict",
        category: "technical projects",
    },
];

const categories = ["all", "design projects", "technical projects" ];
export const ProjectsSection =()=>{
    const[activeCategory, setActiveCategory] = useState("all");
    
        const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory);
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My <span className="text-primary">Projects</span></h2>

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project,key)=>(
                        <div 
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
                        > 

                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title } className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                        </div>

                        <div className="p-6 flex flex-col flex-1">

                            {/* <div className="flex flex-wrap gap-2 mb-4"> */}
                            <div style={{ minHeight: "7rem" }} className="flex flex-wrap items-start content-start gap-2 mb-4">
                                {project.tags.map((tag, i)=>(
                                    <span key={i} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}
                                    </span>
                                ))}

                            </div>
                        
                    <div>
                        <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    </div>
                        <div className="flex justify-between items-center mt-auto">
                            <div className="flex space-x-3">

                                {project.demoUrl && (
                                    <a href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        < ExternalLink size={20}/>
                                    </a>
                                )}
                                {project.notionUrl && (
                                    <a href={project.notionUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <SiNotion />
                                    </a>
                                )}

                                {project.githubUrl && (
                                    <a href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <SiGithub />
                                    </a>
                                )}

                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank" 
                    href="https://github.com/ManviHJ">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}