import styles from "../styles/Home.module.css";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  const handleClick = (e, path) => {
    if (path === "/helpProject") {
      console.log(`I clicked on it`);
    }
  };
  return (
    <>
      <div id="top">
        <div className="px-3"></div>
      </div>
      <div className={styles.me}>
        <div className="px-3">
          <div className={styles.greet}>
            <div> Hello, there👋🏾😊 I&apos;m Abdallah |</div>
            <div className={styles.container}>
              <a title="FRONTEND DEVELOPER">
                <div className={styles.domain}>Software Engineer</div>
              </a>
            </div>
          </div>
          <div>
            <div className={styles.path}>
              The continous learning 📖, discovering of new technologies 👨🏾‍💻
              <br /> and the breathing passion made me stick on this dynamic
              path. 🚀
            </div>
          </div>
          <div className={styles.socials}>
            <div class="hstack gap-2">
              <div>
                <Link href="https://github.com/Absidaa/Absida" target="blank">
                  <BsGithub size={30} color="Green" />
                </Link>
              </div>

              <div>
                <Link
                  href="https://www.linkedin.com/in/absida-04b9b3232/"
                  rel="noreferrer"
                >
                  <BsLinkedin size={30} color="Green" />
                </Link>
              </div>
              <div>
                <Link href="http://absida8@gmail.com" target="blank">
                  <MdEmail size={30} color="Green" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.abimg}>
        <Image
          src="/picInwhite.jpg"
          className="rounded mx-auto d-block"
          alt="the author print"
          width={250}
          height={300}
        />
      </div>
      <h2 className={styles.skills}>My Skills</h2>

      <div className={styles.softs}>
        <div className={styles.java}>JavaScript </div>

        <div className={styles.htm}>HTML</div>

        <div className={styles.css}>CSS</div>

        <div className={styles.react}>React</div>

        <div className={styles.next}>Next.js</div>

        <div className={styles.sql}>SQL</div>

        <div className={styles.bot}>
          <div className={styles.post}>PostgreSQL</div>

          <div className={styles.nod}>Node.js</div>

          <div className={styles.boot}>Bootstrap</div>

          <div className={styles.tab}>Tableau</div>
          <div className={styles.lize}>Sequelize</div>
        </div>
      </div>
      <div className={styles.tec}>Discovering the world of tech</div>
      <div
        className={styles.des}
        style={{ fontFamily: "Roboto", fontSize: "2rem" }}
      >
        <div>
          The first technology device that I sat my eyes on was like a magic,
          <br />
          instantly I knew there was something in that well wrapped gaget <br />
          but I counldn&quot;t figure out exactly what was it.
        </div>

        <div
          className={styles.bio}
          style={{ fontFamily: "Roboto", fontSize: "2rem" }}
        >
          <Link href={"/about"} style={{ textDecoration: "none" }}>
            Continue with my bio
          </Link>
        </div>
      </div>

      <div>
        <div className={styles.left}>
          <h1 className={styles.projects}>
            <div id="project">Projects</div>
          </h1>

          <div
            className={styles.stack}
            style={{ fontFamily: "Roboto", fontSize: "2rem" }}
          >
            full stack developer/tech manager
          </div>
          <h1 className={styles.ihelpDescription} style={{ fontSize: "6rem" }}>
            I-help
          </h1>
          <div
            className={styles.helpDes}
            style={{ fontFamily: "Roboto", fontSize: "2rem" }}
          >
            It took a dedicated team of 4 developers to create core features
            <br />
            and integrate it PostgreSQL. Implemented code linting, database
            <br />
            migration and preview deploys.
          </div>

          <button className={styles.homeSessionButton2}>
            <div className={styles.check}>
              <div onClick={(e) => handleClick(e, "/helpProjrct")}>
                <Link href={"/helpProject"} style={{ textDecoration: "none" }}>
                  view project
                </Link>
              </div>
            </div>
          </button>
        </div>

        <div className={styles.card}>
          <div class={"card"}>
            <div class="shadow-lg   bg-body rounded">
              <Link href="/" style={{ textDecoration: "none" }}>
                <Link href={"/helpProject"} style={{ textDecoration: "none" }}>
                  <div className={styles.cardFonts}>
                    The best place to find vulunter helpers to help <br /> you
                    gain your permit of stay. No worries, it&apos;s free of
                    charge.
                  </div>
                </Link>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.personalProject}>PERSONAL PROJECT</div>
          <div className={styles.homeSession}>Stay Fit</div>
          <p
            className={styles.homeSessionElighten}
            style={{ fontFamily: "Roboto", fontSize: "2rem" }}
          >
            Upgrade your home workouts to the next level and let your <br />
            achievement motivate others.
          </p>
          <button className={styles.homeSessionButton}>
            <div className={styles.check}>
              <div>
                <Link href={"/homeSession"} style={{ textDecoration: "none" }}>
                  view project
                </Link>
              </div>
            </div>
          </button>

          <div className={styles.homeSessionCard}>
            <div class="shadow-lg p-2  bg-body rounded">
              <div className="card">
                <Link href={"/homeSession"} style={{ textDecoration: "none" }}>
                  <div className={styles.homeSessionCardFonts}>
                    Take your home workout to another level in a way that
                    it&apos;d inspire the soul to be more invisible.
                    <p style={{ marginLeft: "20vh" }}>
                      <FaDumbbell color="black" />
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.personalProject}>PERSONAL PROJECT</div>

          <div className={styles.homeSession}>Your Recipes</div>
          <p
            className={styles.homeSessionElighten}
            style={{ fontFamily: "Roboto", fontSize: "2rem" }}
          >
            A recipe social platform where you could demonstrate your cooking{" "}
            <br /> skills while on the go.
          </p>

          <button className={styles.homeSessionButton}>
            <div className={styles.check}>
              <div>
                <Link href={"/yourRecipe"} style={{ textDecoration: "none" }}>
                  view project
                </Link>
              </div>
            </div>
          </button>
          <div className={styles.yourRecipeCard}>
            <div class="shadow-lg p-2  bg-body rounded">
              <div className="card">
                <Link href={"/yourRecipe"} style={{ textDecoration: "none" }}>
                  <div className={styles.yourRecipeCardFonts}>
                    To many, cooking has been a passion and passions are things
                    that need busters to keep soaring. So, why not a special
                    platform about your passion?
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cha}>
        <div className={styles.chat}>I am open to chat!</div>
        <Link
          href="https:/www.absida8@gmail.com"
          target="blank"
          style={{ textDecoration: "none" }}
        >
          <div className={styles.mail}> absida8@gmail.com</div>
        </Link>
        <div>
          <div id="contact">
            <Link
              href="http://absida8@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <p className={styles.comp}>👨🏾‍💻</p>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            <div className={styles.footer_content}>
              <div className={styles.name}>
                <Link href={"/#top"} style={{ textDecoration: "none" }}>
                  Abdallah Sahid Dumbuya
                </Link>
              </div>
              &copy; {new Date().getFullYear()} built and designed by,
              <p>Abdallah Sahid Dumbuya</p>
            </div>
          </div>
          <div className={styles.footerMiddle}>
            <div className={styles.link}>
              <h6 className={styles.ink}>Links</h6>
              <Link href="/about" style={{ textDecoration: "none" }}>
                About
              </Link>

              <Link href="#contact" style={{ textDecoration: "none" }}>
                Contact
              </Link>
              <div>
                <Link href="#project" style={{ textDecoration: "none" }}>
                  Projects
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footer_socials}>
              <div className={styles.intouch}>Get in Touch</div>
              <div class="hstack gap-2">
                <div>
                  <Link href="https://github.com/Absidaa/Absida" target="blank">
                    <BsGithub size={25} />
                  </Link>
                </div>

                <div>
                  <Link
                    href="https://www.linkedin.com/in/absida-04b9b3232/"
                    target="blank"
                  >
                    <BsLinkedin size={25} />
                  </Link>
                </div>
                <div>
                  <Link href="http://absida8@gmail.com" target="blank">
                    <MdEmail size={25} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
