import React from "react";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import styles from "../styles/Home.module.css";
import Link from "next/link";

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
            <Link href={"https://i-ihelp.herokuapp.com"} rel="noreferrer">
              site
            </Link>
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
          past decades. <br /> Now an individual seat back and do most of the
          process online. This would also decrease the work <br /> load of the
          immigration personels.
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
          sensitive data is kept safe using <br /> environment variables.
        </p>
        <p>
          We deployed the site to Heroku because we are very comfortable with
          the tools they provide for continuous <br /> deployment and
          integration.
        </p>

        <div>
          <h3 className={styles.explain}> Skills Learned</h3>
          <p>
            I've never felt comfortable around anything that involves backend, I
            tried so hard to absorbed <br /> those beautiful strings whenever my
            tutor was giving lectures but I still couldn't place my hands <br />
            on something in particular that I cannot tell. But this project
            right here open up the doors with <br /> a shining lights lighting
            up upon my face with lots of hope.{" "}
          </p>
          <p>
            In this project, I Learned how to plane a project in Figma then take
            to a database drawing diagram. <br /> In the sql diagram, I learned
            how to connect different tables whenever you may want to extract
            information. <br /> Then going to Visual Studio Code and commence
            the actual project, I never knew how to build a database <br /> from
            scratch, luckily for me I wrapped my hands around that foundation.{" "}
          </p>
        </div>
      </div>
      <div>
        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            <div className={styles.footer_content}>
              <p className={styles.name}>
                <Link href={"/"}>Abdallah Sahid Dumbuya</Link>
              </p>
              &copy; {new Date().getFullYear()} built and designed by,
              <br /> Abdallah Sahid Dumbuya
            </div>
          </div>
          <div className={styles.footerMiddle}>
            <div className={styles.link}>
              <h6 className={styles.ink}>Links</h6>
              <Link href="/about">About</Link>

              <Link href="/contact">Contact</Link>

              <Link href="/#project">Projects</Link>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footer_socials}>
              <div className={styles.intouch}>Get in Touch</div>
              <div class="hstack gap-2">
                <div>
                  <Link href="https://github.com/Absidaa/Absida" target="blank">
                    <BsGithub />
                  </Link>
                </div>

                <div>
                  <Link
                    href="https://www.linkedin.com/in/absida-04b9b3232/"
                    target="blank"
                  >
                    <BsLinkedin />
                  </Link>
                </div>
                <div>
                  <Link href="http://absida8@gmail.com" target="blank">
                    <MdEmail />
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
