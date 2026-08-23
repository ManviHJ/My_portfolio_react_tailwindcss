import React from 'react';
// import { ThemeToggle } from '../components/ThemeToggle';
// import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer'
import { EducationSection } from '@/components/EducationSection';
import { InternshipsSection } from '@/components/InternshipsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { AchievementsSection } from '@/components/AchievementsSection';



const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toggle */}
        {/* <ThemeToggle/> */}

        {/*Background effects */}
        {/* <StarBackground/> */}

        {/*Navbar */}
        <Navbar/>

        {/*Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <InternshipsSection />
            <ProjectsSection />
            <SkillsSection />
            <CertificationsSection />
            <AchievementsSection />
            <ContactSection />
        </main>

        {/*Footer */}
        <Footer />

    </div>
  )
}

export default Home