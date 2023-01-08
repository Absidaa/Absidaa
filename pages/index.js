import styles from "../styles/Home.module.css";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
export default function Home() {
  const handleClick = (e, path) => {
    if (path === "/helpProject") {
      console.log("I clicked on it");
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
            <div> Hello, there👋🏾😊 I am Abdallah |</div>
            <div className={styles.domain}>Software Engineer</div>
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
                <a href="https://github.com/Absidaa/Absida" target="blank">
                  <BsGithub />
                </a>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/absida-04b9b3232/"
                  target="blank"
                >
                  <BsLinkedin />
                </a>
              </div>
              <div>
                <a href="http://absida8@gmail.com" target="blank">
                  <MdEmail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.abimg}>
        <img
          src="/absid.jpg"
          class="rounded mx-auto d-block"
          alt="the author print"
          width={200}
          height={200}
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
      <div className={styles.des}>
        <div>
          The first technology device that I sat my eyes on was like a magic,
          <br />
          instantly I knew there was something in that well wrapped gaget <br />
          but I counldn't figure out exactly what was it.
        </div>

        <div className={styles.bio}>
          <a href={"/about"}>Continue with my bio</a>
        </div>
      </div>
      <div>
        <div className={styles.left}>
          <h1 className={styles.projects}>
            <div id="project">Projects</div>
          </h1>

          <div className={styles.stack}>full stack developer/tech manager</div>
          <h1>I-help</h1>
          <div className={styles.helpDes}>
            It took a dedicated team of 4 developers to create core features
            <br />
            and integrate it PostgreSQL. Implemented code linting, database
            <br /> migration and preview deploys.
          </div>
          <Link href={"/helpProject"}>
            <button className={styles.view1}>
              <div onClick={(e) => handleClick(e, "/helpProjrct")}>
                view project
              </div>
            </button>
          </Link>
        </div>

        <div className={styles.card}>
          <a href="/">
            <div class={"card"}>
              <div class="shadow-lg p-1  bg-body rounded">
                <a href={"/helpProject"}>
                  <div className={styles.cardFonts}>
                    The best place to find vulunter helpers to help <br /> you
                    gain your permit of stay.
                    <div className={styles.free}>free online helpers</div>
                    <button className={styles.cardBtnL}>list of helpers</button>
                    <button className={styles.cardBtnR}>help request</button>
                  </div>
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.cha}>
        <div className={styles.chat}>I'm open to chat !</div>
        <a href="https:/www.absida8@gmail.com" target="blank">
          absida8@gmail.com
        </a>
        <div>
          <a href="http://absida8@gmail.com">
            <div className={styles.comp}>👨🏾‍💻</div>
          </a>
        </div>
      </div>
      <div>
        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            <div className={styles.footer_content}>
              <div className={styles.name}>
                <a href={"/#top"}>Abdallah Sahid Dumbuya</a>
              </div>
              &copy; {new Date().getFullYear()} built and designed by,
              <br /> Abdallah Sahid Dumbuya
            </div>
          </div>
          <div className={styles.footerMiddle}>
            <div className={styles.link}>
              <h6 className={styles.ink}>Links</h6>
              <a href="/about">About</a>

              <a href="/contact">Contact</a>
              <div>
                <a href="#project">Projects</a>
              </div>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footer_socials}>
              <div className={styles.intouch}>Get in Touch</div>
              <div class="hstack gap-2">
                <div>
                  <a href="https://github.com/Absidaa/Absida" target="blank">
                    <BsGithub />
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/in/absida-04b9b3232/"
                    target="blank"
                  >
                    <BsLinkedin />
                  </a>
                </div>
                <div>
                  <a href="http://absida8@gmail.com" target="blank">
                    <MdEmail />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
