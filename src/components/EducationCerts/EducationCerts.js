import "./EducationCerts.css";
import { useTranslation } from "react-i18next";

const EducationCerts = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Architecting",
      categoryKey: "education.category.certification",
      link: "https://www.credly.com/badges/48876373-439d-4750-a3a9-3ddfaeee7501/print",
    },
    {
      title: "AWS Academy Graduate - AWS Cloud Practitioner",
      categoryKey: "education.category.certification",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/415df3be7d164c79aa5ce2c3efb97232"
    },
    {
      title: "Professional Development Skills for the Digital Age",
      categoryKey: "education.category.certification",
      link: "https://intranet.alxswe.com/certificates/RxG58eXZ7E"
    },
    {
      title: "Meta React",
      categoryKey: "education.category.certification",
      link: "https://coursera.org/verify/S9126F652YVQ"
    },
    {
      title: "Meta Advanced React",
      categoryKey: "education.category.certification",
      link: "https://coursera.org/verify/K82RUHHYWQK3"
    },
    {
      title: "Google UI/UX Certificate",
      categoryKey: "education.category.certification",
    },
    {
      title: "telc Deutsch B2",
      categoryKey: "education.category.certification",
      confidential: true,
    },
    {
      title: "Bachelor of Software Engineering",
      categoryKey: "education.category.education",
      confidential: true,
    },
  ];

  return (
    <section className="edu-section">

      <h2 className="edu-title">
        {t("education.title")}
      </h2>

      <div className="badge-grid">
        {items.map((item, index) => (
          <div key={index}>
            {item.confidential ? (
              <div className="badge-card confidential-card">

                <span className="badge-category">
                  {t(item.categoryKey)}
                </span>

                <p className="badge-title">
                  {item.title}
                </p>

                <p className="confidential-text">
                  {t("education.confidentialText")}
                </p>
              </div>
            ) : (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="badge-card clickable-card"
              >

                <span className="badge-category">
                  {t(item.categoryKey)}
                </span>

                <p className="badge-title">
                  {item.title}
                </p>

                <p className="view-cert">
                  {t("education.viewCertificate")}
                </p>

              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationCerts;