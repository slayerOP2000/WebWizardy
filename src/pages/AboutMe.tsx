import { FunctionComponent, useCallback } from "react";
import styles from "./AboutMe.module.css";

const AboutMe: FunctionComponent = () => {
  const onAboutMeTextClick = useCallback(() => {
    // Please sync "MacBook Air - 1" to the project
  }, []);

  const onSkillsTextClick = useCallback(() => {
    // Please sync "skills" to the project
  }, []);

  const onContactTextClick = useCallback(() => {
    // Please sync "Contact Form" to the project
  }, []);

  return (
    <div className={styles.aboutMe}>
      <b className={styles.webwizardry}>WebWizardry</b>
      <div className={styles.aboutMe1} onClick={onAboutMeTextClick}>
        About Me
      </div>
      <div className={styles.skills} onClick={onSkillsTextClick}>
        Skills
      </div>
      <div className={styles.projects}>Projects</div>
      <div className={styles.contact} onClick={onContactTextClick}>
        Contact
      </div>
      <div className={styles.iAmAContainer}>
        <p className={styles.iAmAFrontEndDeveloperWit}>
          {`I am a Front-end Developer with 1 year of  commercial experience, author of `}
          <a
            className={styles.css3Foundations}
            href="http://www.css3foundations.com/"
            target="_blank"
          >
            <span className={styles.css3Foundations1}>CSS3 Foundations</span>
          </a>
          , and graduate of Internet Technology. I create successful websites
          that are fast, easy to use, and built with best practices.
        </p>
        <p className={styles.iAmAFrontEndDeveloperWit}>
          I work to make a better web; one that is fast, easy to use, beautiful,
          accessible to all, and frustration-free. Regardless of your specific
          business requirements, in solving these challenges, you have a great
          chance of finding success online.
        </p>
        <p className={styles.iAmAFrontEndDeveloperWit}>
          My main experience is in front-end development but I also have a
          passion for design. Given that producing a modern website requires the
          combination of design, server technology, and the layer that users
          interacts with, I believe having experience in both design and
          development allows for making the most optimal user experiences.
        </p>
        <p className={styles.iAmAFrontEndDeveloperWit}>Front-end Developer</p>
        <p className={styles.iAmAFrontEndDeveloperWit}>
          I use HTML, CSS, and JavaScript to produce responsive websites and web
          apps that provide users the best and most appropriate experience
          suited to their device and browser.
        </p>
      </div>
      <div className={styles.aboutAnuragSaxena}>About Anurag Saxena</div>
    </div>
  );
};

export default AboutMe;
