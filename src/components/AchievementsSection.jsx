import { Trophy, ExternalLink } from "lucide-react";

const achievements = [
    {
        title: "Finalist, ANVESHANA'25 — National Level Prototype Competition",
        venue: "IIC-BMSIT, Bengaluru",
        duration: "March 2025",
        certificateUrl: "https://drive.google.com/file/d/1sibGzH1CS1a4qRINJYdQ0rUxiQG5s3bR/view",
        description:"Reached the finals of a national-level prototype competition as part of a team, competing against participants from institutions across the country.",
    },
];

export const AchievementsSection = () => {
    return (
        <section id="achievements" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Achievements</span>
                </h2>

                <div className="space-y-6">
                    {achievements.map((item, i) => (
                        <div
                            key={i}
                            className="gradient-border p-6 card-hover flex items-start gap-4"
                        >
                            <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                <Trophy className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm">
                                        {item.venue}
                                    </p>
                                    <p className="text-muted-foreground text-sm mt-2">
                                        {item.description}
                                    </p>
                                    {item.certificateUrl && (
                                    <div>
                                        
                                        <a    href={item.certificateUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cosmic-button inline-flex items-center mt-4 gap-2"
                                        >
                                            View Certificate
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                )}
                                </div>
                                <span className="font-bold text-primary whitespace-nowrap">
                                    {item.duration}
                                </span>

                                    
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};