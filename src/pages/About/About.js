import "./About.css";
import personalImage from '../../assests/about.jpg';
import swingImage from '../../assests/swing.jpg';
import modellingImage from '../../assests/modelling.jpg';


const About = () => {
    return (
        <div className="about-container">
            <div className="section">
                <img src={personalImage} alt="Tasneem Kadous Image" className="about-image" />
                <div className="text-content">
                    <h2>Tasneem Kadous</h2>
                    <p>
                        Hello, I am Tasneem — a <b>Software Engineer</b> specializing in <b>Java Spring Boot</b>, <b>React</b>, and cloud-based solutions on <b>AWS</b>. I enjoy designing and building systems end-to-end: from gathering requirements and designing the architecture, to implementing clean backend APIs, intuitive frontend interfaces, and deploying secure scalable applications.
                    </p>
                    <p>I have always been drawn to problem-solving and creating things that improve real workflows. Throughout my experience, I have worked on projects involving CRM development, digital business card systems, online shop platforms, and data automation tools. I focus on writing clean, maintainable code and building solutions that are both technically strong and user-centered.
                    </p>
                    <p> Currently, I am expanding my skills in <b></b>AI-driven features and cloud architecture — working toward advanced AWS certifications and exploring the intersection between software engineering and intelligent automation.
                    </p>
                    <p>Feel free to explore my projects or reach out — I am always happy to collaborate or discuss new ideas.
                    </p>
                </div>
            </div>

            <div className="section reverse">
                <img src={swingImage} alt="Swing Dance Image" className="about-image" />
                <div className="text-content">
                    <h2>Hobbies & Interests</h2>
                    <p>
                        Beyond code, I am passionate about Swing dance specially <b>Lindy Hop</b> and love teaching and helping in the community dance sessions — it keeps my creativity and movement alive.
                    </p>
                    <p>
                        I also love traveling. I have held continuous <b>Schengen</b> visas since 2015, and exploring Europe has become a big part of my life — its cultures, streets, cafés, and music inspire me deeply.
                    </p>
                </div>

            </div>

            <div className="section">
                <img src={modellingImage} alt="Fashion Model Image" className="about-image" />
                <div className="text-content">
                    <h2>Creative Expression</h2>
                    <p>
                        When I am not coding, you will probably find me in a studio or in front of a camera. I am a certified fashion model and I really enjoy photo sessions — they let me express myself in a creative and fun way.
                    </p>
                    <p>I genuinely enjoy being photographed — it allows me to express personality through movement, styling, and presence. Modeling is where I channel my artistic side, and it complements the precision and problem-solving focus I bring to engineering.</p>

                </div>
            </div>


        </div>
    );
};

export default About;