import AboutMe from "./AboutMe";
import Banner from "./Banner";

import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import SkillSection from "./SkillSection";




const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <AboutMe></AboutMe>
        <ExperienceSection></ExperienceSection>
        <SkillSection></SkillSection>
        <EducationSection></EducationSection>

    <ProjectsSection></ProjectsSection>

        <ContactSection></ContactSection>
        </div>
    );
};

export default Home;