import './Home.css';
import personalImage from '../../assests/Profile.jpg';
import Experience from '../../components/Experience/Experience';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import EducationCerts from '../../components/EducationCerts/EducationCerts';
import CTA from '../../components/CTA/CTA';

const Home = () => {


  return (
    <div className="home">
     
{/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span>Tasneem Kadous</span></h1>
          <h2 className="hero-subtitle">Fullstack Software Engineer | AWS Certified Solutions Architect – Associate | Java Spring Boot | Advanced React | C1 German</h2>
          <p className="hero-text">
            
          </p>

          <div className="hero-buttons">
            <a href="/contact" className="btn primary">Contact Me</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={personalImage} alt="Tasneem Kadous" />
        </div>
      </section>
       <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <EducationCerts />
      </section>
    
     <CTA />



     

   
     
    </div>
  );
};

export default Home;
