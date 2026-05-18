import React from "react";
import "./FAQs.css";
import { Link } from "react-router-dom";

const FAQs = () => {
    const faqData = [
        {
            question: "Relocation & Work Authorization",
            answer: (
                <>
                    <strong>Are you willing to relocate?</strong> <br />
                    Yes — I am open and enthusiastic about relocating for the right opportunity. I am flexible about location and will relocate for roles that are a good fit.
                    <br />
                    <br />
                    <strong>Do you have a valid work permit?</strong> <br />
                    Yes — I have valid work authorization in Egypt and in Germany. I hold a Chancenkarte (German work permit), which allows me to work in Germany.
                    <br />
                    <br />
                    <strong>Which countries are you allowed to work in?</strong><br />
                    I am currently authorized to work in Egypt and Germany. I am also willing to relocate and work across Europe and the Middle East.
                    <br />
                    <br />
                    <strong> Are you open to remote, on-site, or hybrid work arrangements?</strong><br />
                    Yes — I am open to remote, on-site, and hybrid arrangements. I prefer hybrid work as it balances collaboration and focused time, but I am flexible depending on the role and team needs.
                    A hybrid work environment is ideal. It supports strong team communication and bonding, while still offering the focus and flexibility of remote work. Remote work also contributes positively by reducing commuting and environmental impact.
                    <br />
                    <br />
                </>
            )

        },
        {
            question: "Availability",
            answer: (
                <>
                    <strong>When can you start working?</strong>
                    <br />
                    Immediately available.
                    <br />
                    <br />
                    <strong>Are you available for full-time positions?</strong>
                    <br />
                    Absolutely — full-time roles are my primary preference.
                    <br />
                    <br />
                    <strong>Are you open to contract, freelance, or part-time work?</strong>
                    <br />
                    Yes — I am open to contract and part-time roles. Freelancing is possible, but it is my last preference as I am currently seeking long-term stability.
                    <br />
                    <br />

                </>
            )
        },
        {
            question: "Languages",
            answer: (
                <>
                    <strong>Which languages do you speak and what are your proficiency levels?</strong>
                    <br />
                    • Arabic: Native - Mothertongue
                    <br />
                    • English: C1
                    <br />
                    • German: C1 
                    <br />
                    • Turkish: B1
                    <br />
                    <br />
                    <strong>Do you have any official language certificates?</strong>
                    <br />
                    Yes — I hold a <strong>German telc B2</strong> certificate, and I also have an official certificate from my college confirming that my studies were conducted in <strong>English</strong> in partnership with University of East London <strong>UEL</strong>.
                    <br />
                    <br />


                </>
            )
        },
        {
            question: "Travel",
            answer: (
                <>
                    <strong>Are you willing to travel for work?</strong>
                    <br />
                    Yes — I am open to business trips and work-related travel.
                    <br />
                    <br />
                    <strong>Do you have international travel experience?</strong>
                    <br />
                    Yes — I have <strong>over 10 years</strong> of international travel experience, including Qatar, Germany (frequently), Mauritius, Italy, KSA, and Kosovo. I am excited to explore more worldwide.
                    <br />
                    <br />

                </>
            )
        },
        {
            question: "Skillset & Technical Stack",
            answer: (
                <>
                    <strong>What technologies do you specialize in?</strong>
                    <br />
                    Java (8, 11, 17, 21), Spring Boot, React.js, PostreSQL, AWS Cloud
                    <br />
                    <strong>What areas of software engineering do you focus on?</strong>
                    <br />
                    I focus on <strong>full-stack</strong> and <strong>backend</strong> development, with experience in deploying applications on <strong>AWS</strong> to build modern, cloud-ready solutions.
                    <br />
                    <br />
                    <strong>Do you have experience with cloud platforms (AWS)?</strong>
                    <br />
                    Yes — I have 2+ years of hands-on experience with AWS. I hold an AWS Academy badge for Solutions Architect Associate and a certificate in AWS Cloud Practitioner.
                    <br />
                    <br />
                    <strong>Do you develop full-stack applications?</strong>
                    <br />
                    Absolutely — I have delivered multiple full-stack projects. For a small example, this website itself is developed with React and fully deployed on AWS, demonstrating my full-stack and cloud deployment capabilities.
                    <br />
                    <br />
                </>
            )
        },
        {
            question: "Education & Certificates",
            answer: (
                <>
                    <strong>What certifications do you hold?</strong>
                    <br />
                    I hold multiple certifications, including:
                    <br />
                    • AWS Cloud Practitioner
                    <br />
                    • AWS Solutions Architect Associate badge
                    <br />
                    • UI/UX certificate from Google
                    <br />
                    • React and React Advanced courses from Meta
                    <br />
                    • Four professional internship certificates earned during my university studies
                    <br />
                    <br />
                    <strong>What degrees or academic honors do you have?</strong>
                    <br />
                    I hold a globally recognized Bachelor’s degree. During my studies, I consistently ranked among the top students:
                    <br />
                    • 2nd year: 3rd in class
                    <br />
                    • 3rd year: 2nd in class
                    <br />
                    • 4th year: 1st in class with GPA <strong>A</strong> on the graduation project
                    <br />
                    • Cumulative class honor: 8th overall
                    <br />
                    <br />
                </>
            )
        },
        {
            question: "Work Style & Preferences",
            answer: (
                <>
                    <strong>What is your preferred work environment?</strong>
                    <br />
                    A balanced hybrid environment is preferred — one that combines regular in-person collaboration with the flexibility of remote work.
                    <br />
                    In-office time supports clear communication, stronger teamwork, and faster decision-making, while remote days provide focused, uninterrupted productivity.
                    <br />
                    An environment that values respect, transparency, teamwork, and continuous learning is the most effective for delivering high-quality results.
                    <br />
                    <br />
                    <strong>How do you handle deadlines and pressure?</strong>
                    <br />
                    I plan ahead and always include a buffer to handle unexpected issues.
                    <br />
                    When challenges arise, I take a short break to reset, clear my mind, and reorganize my ideas on paper. This helps me create an alternative plan quickly and continue efficiently.
                    <br /> A solution-oriented mindset and persistence ensure that progress continues smoothly even under pressure, and do not give up easily — I believe every problem has a fix if you keep trying.
                    <br />
                    <br />
                    <strong>Do you prefer working individually or in teams?</strong>
                    <br />
                    Both — I am flexible.
                    Flexibility is key, as projects often require shifting between independent and collaborative modes.
                    <br />
                    Some tasks require focused individual work, while others benefit from collaborative teamwork, parallel progress, and shared knowledge. I am comfortable working independently when needed, but I also enjoy team environments that encourage productivity, creativity, and learning.
                    <br />
                    <br />
                </>
            )
        },
        {
            question: "Projects & Portfolio",
            answer: (
                <>
                    <strong>What major projects have you worked on?</strong>
                    <br />
                    A dedicated Projects page is available <Link to="/#projects"><strong>here</strong></Link> on this website, showcasing detailed descriptions, technologies used, and the outcomes of each project.
                    <br />
                    <br />
                    <strong>Do you have experience designing both frontend and backend?</strong>
                    <br />
                    Yes, Full-stack development is covered, including UI/UX design, frontend implementation, backend engineering, and system integration. Additional details can be found on the Experience and <strong>Projects</strong> pages.
                    <br />
                    <br />
                    <strong>Do you build cloud-ready or scalable systems?</strong>
                    <br />
                    Yes, Systems are developed with scalability, performance, and cloud readiness in mind. This website itself runs on AWS using modern cloud architecture. The Projects page provides deeper insights into cloud deployments and architecture choices.
                    <br />
                    <br />
                </>
            )
        },
        {
            question: "Tools & Collaboration",
            answer: (
                <>


                    <strong>What project management and development tools do you use?</strong>
                    <br />
                    A wide range of tools is used across development, testing, design, and project management, including:
                    Eclipse, IntelliJ, Visual Studio, VS Code, Maven, Git Bash, GitHub, Bitbucket, Jenkins, Postman, SQL Developer, MSSQL Server, PyCharm, Android Studio, Flutter, MATLAB, NetBeans, Unity, Adobe XD, Photoshop, Figma, Sublime, Arduino IDE, JIRA, Camunda, MS Azure, and more.
                    <br />
                    <br />
                    <strong>Are you familiar with Agile/Scrum methodologies?</strong>
                    <br />
                    Yes, Agile and Scrum practices are part of daily work, with experience applying them professionally across multiple projects and teams.
                    <br />
                    <br />
                    <strong>Do you have experience working in multicultural or international teams?</strong>
                    <br />
                    Yes, Work experience includes collaborations within international companies and multicultural teams across different regions.
                    <br />
                    <br />
                    <strong>What technical concepts and engineering principles do you work with?</strong>
                    <br />
                    Professional experience covers a broad set of core concepts, including:
                    Object-Oriented Programming (OOP), Data Structures, Algorithms, SQL, Design Patterns, UI/UX, Artificial Intelligence (AI), Big Data, Component-Based Software Development, Image Processing, Testing methodologies, Agile development, Microservices architecture, CI/CD pipelines, and Business Process Management (BPM).
                    <br />
                    <br />

                </>
            )
        },
        {
            question: "Personal & Soft Skills",
            answer: (
                <>

                    <strong>What soft skills do you bring to your team?</strong>
                    <br />
                    Bringing strong communication, adaptability, teamwork, problem-solving, and a solution-oriented mindset. Collaboration is approached with clarity and respect, ensuring smooth coordination between teams. A consistent focus is placed on organization, critical thinking, and maintaining a positive, productive work atmosphere.
                    <br />
                    Additionally, an ability to think creatively and <strong>“out of the box”</strong> helps identify innovative solutions efficiently. By observing situations carefully, optimal approaches are often found quickly, contributing to faster and effective results.
                    <br />
                    <br />
                    <strong>Do you have leadership or teaching experience?</strong>
                    <br />
                    Yes, Experience includes 8 years of teaching as a freelancer in:
                    <br />

                    • Mathematics
                    <br />
                    • German as a second language in Egypt
                    <br />
                    • Swing dance, including helping others improve technique and rhythm
                    <br />
                    <br />
                    This background contributes to strong skills in explaining complex ideas, supporting others, mentoring teammates, and guiding groups with patience and structure.
                    <br />
                    <br />
                    <strong>How do you handle feedback or conflict?</strong>
                    <br />
                    Feedback is approached with openness and a growth mindset. The goal is always to understand the perspective, improve the outcome, and strengthen collaboration.
                    <br />
                    Conflict is handled calmly and respectfully — by focusing on facts, clear communication, finding common ground, and keeping the team aligned with project goals.
                    <br />
                    <br />

                </>
            )
        },
        {
            question: "Job Preferences",
            answer: (
                <>

                    <strong>What type of roles are you targeting?</strong>
                    <br />
                    Targeting <strong>Java Spring Boot-based backend or full-stack</strong> roles, with a preference for positions that also involve <strong>cloud technologies</strong> and modern software architecture.
                    <br />
                    <br />
                    <strong>What industries are you interested in?</strong>
                    <br />
                    Open to industries that leverage <strong>technology, cloud solutions, and software development,</strong> including e-commerce, fintech, cloud services, and enterprise software. Focus is on environments that allow the use of full-stack and backend expertise.
                    <br />
                    <br />

                    <strong>Are you open to relocation specifically to Germany or EU countries?</strong>
                    <br />
                    Yes — fully authorized to work in Germany and open to relocation across the EU. Holding a <strong>Chancenkarte</strong>, which allows legal employment in Germany.
                    <br />
                    <br />

                </>
            )
        },
        {
            question: "Additional FAQs",
            answer: (
                <>

                    <strong>What motivates you as a software engineer?</strong>
                    <br />
                    Constant learning and new challenges. Routine or repetitive “donkey work” does not motivate me — I am driven by solving real problems, exploring new technologies, and building meaningful features that push me to grow.
                    And for sure seeing my work alive.
                    <br />
                    <br />
                    <strong>How do you keep your skills up-to-date?</strong>
                    <br />
                    By actively applying new technologies in real projects. I learn best by doing — as the quote says:
                    <br />
                    <i>“Tell me and I forget. Teach me and I remember. Involve me and I learn.”</i>
                    <br />
                    So I constantly involve myself in hands-on experiments, side projects, cloud deployments, and new frameworks to stay sharp and relevant.
                    <br />
                    <br />

                    <strong>What makes you different from other candidates?</strong>
                    <br />
                    A combination of persistence, fast learning, and intelligent problem-solving.
                    I do not believe in saying <i>“I do not know”</i> unless I have actually tried. I experiment with different approaches because repeating the same method and expecting a new result is simply not logical.
                    <br />
                    My natural curiosity and adaptability allow me to learn a completely new technology in less than a week, and this helps me integrate smoothly into any new system or environment.
                    I thrive on change, continuous improvement, and thinking creatively to reach optimal solutions efficiently.
                    <br />
                    <br />

                </>
            )
        }
    ];

    return (
        <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            {faqData.map((faq, index) => (
                <details key={index}>
                    <summary>{faq.question}</summary>
                    <p style={{ whiteSpace: "pre-line" }}>{faq.answer}</p>
                </details>
            ))}
        </div>
    );
};

export default FAQs;
