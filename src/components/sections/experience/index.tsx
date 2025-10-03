import { Col, Row } from "react-bootstrap";
import AnimationLottie from "@components/share/animation-lottie";
import experienceJSON from "@assets/lottie/code.json";
import { EXPERIENCES } from "@helpers/data";
import GlowCard from "@components/share/glow-card";
import { BsPersonWorkspace } from "react-icons/bs";
import blurImg from "@assets/blur-23.svg";
import { useCurrentApp } from "@components/context/app.context";
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";

type Lang = "vi" | "en";

// ✅ forwardRef dùng { } và trả về JSX
/**
 * forwardRef là một hàm của React cho phép bạn truyền ref từ component cha vào một component con
 * điều mà bình thường bạn không làm được nếu component con là một function component.
 */
const Experience = () => {
  const { theme } = useCurrentApp();
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? "vi") as Lang;

  return (
    <Row className="mb-5">
      <Col xs={12} className="my-3 my-md-5">
        <div className="text-center">
          <h3>{t("experience.title")}</h3>
        </div>
      </Col>
      <Col
        md={6}
        xs={12}
        className="d-flex align-items-center justify-content-center"
      >
        <AnimationLottie animationPath={experienceJSON} />
      </Col>
      <Col md={6} xs={12}>
        <div className="d-flex flex-column gap-5">
          {EXPERIENCES.map((experience) => (
            <GlowCard
              key={experience.id}
              identifier={`experience-${experience.id}`}
            >
              <div className="p-3 relative">
                {theme === "dark" && (
                  <img
                    style={{ position: "absolute", bottom: 0, opacity: 0.8 }}
                    src={blurImg}
                    alt="Hero"
                    width={"100%"}
                    height={200}
                  />
                )}
                <div className="experience-container">
                  <div className="duration-text">
                    <p>{experience.duration[lang]}</p>
                  </div>
                  <div className="details">
                    <div className="icon">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div className="info">
                      <p className="title">{experience.title[lang]}</p>
                      {experience.company ? (
                        <p className="company">{experience.company[lang]}</p>
                      ) : (
                        <p className="company">
                          {experience.university![lang]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default Experience;
