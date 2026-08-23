import { GraduationCap, BookOpen, Presentation } from "lucide-react";

const education = [
    {
        degree: "Bachelor of Computer Science and Engineering",
        institution: "SDM Institute of Technology, Ujire",
        duration: "2022 - 2026",
        grade: "CGPA: 7.94",
        icon: GraduationCap ,
    },
    {
        degree: "Pre-University (PCMC)",
        institution: "SDM Pre-University College, Ujire",
        duration: "2020 - 2022",
        grade: "Percentage: 79.5",
        icon: BookOpen,
    },
    {
        degree: "SSLC",
        institution: "Sacred Heart English Medium School, Madanthyar",
        duration: "2020",
        grade: "Percentage: 89.76 ",
        icon: Presentation,
    },
];

export const EducationSection = () => {
    return (
        <section id="education" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Education</span>
                </h2>

                <div className="space-y-6">
                    {education.map((edu, i) => {
                        const Icon = edu.icon;
                        return (
                        <div
                            key={i}
                            className="gradient-border p-6 card-hover flex items-start gap-4"
                        >
                            <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                            <div>
                                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                                <p className="text-muted-foreground text-sm">
                                    {edu.institution} · {edu.duration}
                                </p>
                                </div>
                                <span className="font-bold text-primary whitespace-nowrap">{edu.grade}</span>
                            </div>
                        </div>
                        );
                 })}
                </div>
            </div>
        </section>
    );
};