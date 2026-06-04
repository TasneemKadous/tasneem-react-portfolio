import React from "react";
import "./FAQs.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FAQs = () => {
    const { t } = useTranslation();

    const faqData = t("faqs.items", { returnObjects: true });

    return (
        <div className="faq-section">
            <h3>{t("faqs.title")}</h3>

            {faqData.map((faq, index) => (
                <details key={index}>
                    <summary>{faq.question}</summary>
                    <div style={{ whiteSpace: "pre-line" }}>
                        {faq.answer}
                    </div>
                </details>
            ))}
        </div>
    );
};

export default FAQs;