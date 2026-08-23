import { ArrowDown } from 'lucide-react';
import React, { useState, useEffect } from 'react'
const roles = [
    "Design Engineer, in Progress",
    // "Fullstack Developer",
    // "Frontend Developer",
    // "UI/UX Designer",
    // "Software Engineer"
];

export const TypewriterRoles = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typingSpeed = isDeleting ? 40 : 80;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // typing forward
                setText(currentRole.slice(0, text.length + 1));
                if (text.length + 1 === currentRole.length) {
                    // pause at full word before deleting
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                // deleting
                setText(currentRole.slice(0, text.length - 1));
                if (text.length - 1 === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            {text}
            <span className="animate-pulse">|</span>
        </p>
    );
};


export const HeroSection = () => {
    
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I am </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">
                        {" "}
                        Manvi </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">
                        {" "}
                        H J</span>
                </h1>

                {/* <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 min-h-[1.75rem]">
                    {text}
                    <span className="animate-pulse">|</span>
                </p> */} 
                
                <TypewriterRoles className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3"/>

                <div className='p-4 opacity-0 animate-fade-in-delay-4'>
                    <a href="#projects" className='cosmic-button'>
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className='absolute bottom-9 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
        <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
        <ArrowDown className='h-5 w-5 text-primary' />

        </div>
    </section>
}