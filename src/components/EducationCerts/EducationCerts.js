import "./EducationCerts.css";

const EducationCerts = () => {
  const items = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Architecting",
      category: "Certification",
      link: "https://www.credly.com/badges/48876373-439d-4750-a3a9-3ddfaeee7501/print",
    },
    {
      title: "AWS Academy Graduate - AWS Cloud Practitioner",
      category: "Certification",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/415df3be7d164c79aa5ce2c3efb97232"
    },
    {
      title: "Professional Development Skills for the Digital Age",
      category: "Certification",
      link: "https://intranet.alxswe.com/certificates/RxG58eXZ7E"
    },
    {
      title: "Meta React",
      category: "Certification",
      link: "https://coursera.org/verify/S9126F652YVQ"
    },
    {
      title: "Meta Advanced React",
      category: "Certification",
      link: "https://coursera.org/verify/K82RUHHYWQK3"
    },
    {
      title: "Google UI/UX Certificate",
      category: "Certification",
    },
    {
      title: "telc Deutsch B2",
      category: "Certification",
      confidential: true,
    },
    {
      title: "Bachelor of Software Engineering",
      category: "Education",
      confidential: true,
    },
    
  ];

  return (
    <section className="edu-section">
      <h2 className="edu-title">Education & Certifications</h2>

      <div className="badge-grid">
        {items.map((item, index) => (
          <div key={index}>
            {item.confidential ? (
              <div className="badge-card confidential-card">
                <span className="badge-category">{item.category}</span>

                <p className="badge-title">{item.title}</p>

                <p className="confidential-text">
                  Degree documents contain confidential information and
                  will be provided upon request.
                </p>
              </div>
            ) : (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="badge-card clickable-card"
              >
                <span className="badge-category">{item.category}</span>

                <p className="badge-title">{item.title}</p>

                <p className="view-cert">View Certificate</p>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationCerts;
