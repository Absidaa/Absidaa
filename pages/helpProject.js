import React from "react";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import styles from "../styles/Home.module.css";

export default function helpProject() {
  return (
    <>
      <h3 className={styles.ihlp}>I-help</h3>
      <div className={styles.brif}>
        <div>
          <p>A munite read.</p>
          <p>
            i-help is a web application that helps refuge seekers in Italy that
            came from all over the world. <br />
            The goal was to create a fast web application and a convinient place
            that people would feel at home.
          </p>
        </div>
        <div>
          <FaReact
            className={styles.icon}
            style={{ fontSize: "1.5em" }}
            color="#61dafb"
          />
        </div>
        <div>
          <div>
            <h3 className={styles.typ}>type</h3>
            <div>E-helping platform</div>
          </div>
          <div className={styles.stk}>
            <h3 className={styles.stak}>stack</h3>

            <div>Next.js</div>
            <div>Bootstrap</div>
            <div>Styled-Components</div>
          </div>
          <div className={styles.sit}>
            <h3 className={styles.liv}>live</h3>
            <a href={"https://i-ihelp.herokuapp.com"} target="_blank">
              site
            </a>
          </div>
        </div>
        <div className={styles.himg}>
          <Image
            className={styles.himg}
            style={{ borderRadius: "20px" }}
            class="shadow-lg p-3  bg-body rounded"
            src="/ihelp.png"
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>
        <h3 className={styles.gol}>Project Purpose and Goal</h3>
        <p>
          i-help is a web application that helps refuge seekers in Italy that
          came from all over the world. <br />
          The goal was to create a fast web application and a convinient place
          that people would feel at home.
        </p>
        <p>
          This idea was to decentralize the ways immigrants got help for the
          past decades. Now an individual seat <br />
          back and do most of the process online. This would also decrease the
          work load of the immigration personels.
        </p>
        <h3 className={styles.explain}>Web Stack and Explaination</h3>
        <p>
          We chose a server side rendered site that would load from a CDN to
          achieve the fastest loading times. <br />
          We decided to choose Nextjs for the static page generation because
          their static generation is second to none.
        </p>
        <p>
          This project uses APIs that are commonly executed on a server. All the
          sensitive data is kept safe using environment variables.
        </p>
        <p>
          We deployed the site to Netlify because we are very comfortable with
          the tools they provide for continuous deployment <br />
          and integration.
        </p>
      </div>
      <div>
        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            <div className={styles.footer_content}>
              <p className={styles.name}>
                <a href={"/"}>Abdallah Sahid Dumbuya</a>
              </p>
              &copy; {new Date().getFullYear()} built and designed by,
              <br /> Abdallah Sahid Dumbuya
            </div>
          </div>
          <div className={styles.footerMiddle}>
            <div className={styles.link}>
              <h6 className={styles.ink}>Links</h6>
              <a href="/about">About</a>

              <a href="/contact">Contact</a>

              <a href="/#project">Projects</a>
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
