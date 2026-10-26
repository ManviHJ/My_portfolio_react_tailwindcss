import { ExternalLink } from "lucide-react";

const internships = [
    {
        role: "Fullstack/MERN Stack Development Internship",
        company: "Kakunje Software Private Limited",
        companyUrl: "https://kakunjesoftware.com/",
        description:"Worked on a full-scale Manufacturing ERP and Inventory Management System for Skanda Plastics using the MERN stack. Contributed to building inventory tracking, production monitoring, and sales/purchase modules, while integrating REST APIs and implementing JWT-based authentication for secure access, gaining hands-on, real-world experience in full-stack development and API testing.",
        logo: "kaku logo.jpg",
        certificateUrl: "https://drive.google.com/file/d/1K1JzxoJu3gAHoU3aTRNc239SeAcltpD7/view?usp=sharing",
    },
    {
        role: "Design Engineer Internship",
        company: "Coco Grid Private Limited",
        companyUrl: "https://www.cocogrid.com/",
        description:"Supporting design engineering projects at CocoGrid, including frontend development, design systems, and AI-assisted workflows.",
        logo: "coco grid logo.jpg",
        certificateUrl: "https://drive.google.com/file/d/1l4_wBdOMxifbpcY8Sr20nPOK1JEvbkoW/view?usp=drive_link",
    },
];

export const InternshipsSection = () => {
    return (
        <section id="internships" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Internships</span>
                </h2>

                <div className="space-y-8">
                    {internships.map((intern, i) => (
                        <div
                            key={i}
                            className="gradient-border card-hover p-8 flex flex-col sm:flex-row gap-8 items-start"
                        >
                            {/* logo */}
                            <div className="w-full sm:w-56 h-32 rounded-lg overflow-hidden bg-white flex items-center justify-center shrink-0 p-4">
                                <img
                                    src={intern.logo}
                                    alt={intern.company}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* content */}
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-3">{intern.role}</h3>
                                <p className="text-muted-foreground mb-4">
                                    {intern.description}
                                </p>

                                
                                   <a href={intern.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-bold inline-block mb-5 hover:underline"
                                >
                                    {intern.company}
                                </a>

                                {intern.certificateUrl && (
                                    <div>
                                        
                                        <a    href={intern.certificateUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cosmic-button inline-flex items-center gap-2"
                                        >
                                            View Completion Certificate
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};