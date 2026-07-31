import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import Experience from './_components/Experiences';

export default function Home() {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Skills />
            <Experience />
            <ProjectList />
        </div>
    );
}
