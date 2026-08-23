import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";


const certifications = [
    {
        id: 1,
        title: "Introduction to UI/UX",
        issuer: "Infosys Springboard",
        description: "Completed an Introduction to UI/UX course where I learned basic design principles, wireframing, prototyping, and how to create user-friendly interfaces.",
        image: "UIUX.png",
        credentialUrl: "https://drive.google.com/file/d/1sTMyNIpNf6qCfvbCKRC6A52Vht-QO6Oo/view?usp=drivesdk",
        category: "design certifications",
    },
    {
        id: 2,
        title: "The Complete Web Development Training Courses",
        issuer: "Infosys Springboard",
        description: "Learned the fundamentals of web development, including HTML, CSS, JavaScript, React.js, and responsive website design.",
        image: "web.png",
        credentialUrl: "https://drive.google.com/file/d/1wlUFFQF-bSln-uhOzlaD0A2jdribAYID/view",
        category: "technical certifications",
    },
    {
        id: 3,
        title: "Design Guidelines and Patterns",
        issuer: "Infosys Springboard",
        description: "Learned basic design guidelines and UI patterns to create consistent, easy-to-use, and visually clear user interfaces.",
        image: "Design.png",
        credentialUrl: "https://drive.google.com/file/d/1Gysm2gs95kDGLTArzGauBtsdLXaHvb0q/view",
        category: "design certifications",
    },
];
const categories = ["all", "design certifications", "technical certifications" ];
export const CertificationsSection = () => {
    const[activeCategory, setActiveCategory] = useState("all");
        
    const filteredCertifications = certifications.filter((certification) => activeCategory === "all" || certification.category === activeCategory);
    return (
        <section id="certifications" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Certifications</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCertifications.map((cert, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
                        >
                            <div className="h-48 overflow-hidden bg-white flex items-center justify-center p-4">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div style={{ minHeight: "4.5rem" }} className="flex flex-col justify-start mb-2">
                                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                                </div>

                                <div>
                                    <p className="text-primary font-medium text-sm">{cert.issuer}</p>
                                    <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
                                </div>

                                <div className="flex items-center mt-auto">
                                    {cert.credentialUrl && (
                                        
                                        <a    href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1 text-sm">
                                        
                                            View Certificate <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};