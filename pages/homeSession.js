import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaReact } from "react-icons/fa";
export default function homeSession() {
  return (
    <>
      <div>
        <h3>Home Session</h3>
        <p>2 minute read</p>
        <p>
          Workout and look fit is not a mordern thing but it&apos;s one of the
          top five <br /> doctors&apos; prescriptionsin mordern days to keep you
          healthy. <br /> I love workingout first thing before doing anything
          else, so I decided <br /> to build the app that could keep me going.
        </p>
        <div>
          <div>
            <FaReact
              className={styles.icon}
              style={{ fontSize: "1.5em" }}
              color="#61dafb"
            />
          </div>
          <div>
            <h3 className={styles.typ}>type</h3>
            <div>Health App</div>
          </div>
          <div className={styles.stk}>
            <h3 className={styles.stak}>stack</h3>

            <div>React.js</div>
            <div>Bootstrap</div>
            <div>Styled-Components</div>
          </div>
          <div className={styles.sit}>
            <h3 className={styles.liv}>live</h3>
            <Link href={""} rel="noreferrer">
              site
            </Link>
          </div>
        </div>
      </div>

      <div>
        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            <div className={styles.footer_content}>
              <div className={styles.name}>
                <Link href={"/#top"}>Abdallah Sahid Dumbuya</Link>
              </div>
              &copy; {new Date().getFullYear()} built and designed by,
              <p>Abdallah Sahid Dumbuya</p>
            </div>
          </div>
          <div className={styles.footerMiddle}>
            <div className={styles.link}>
              <h6 className={styles.ink}>Links</h6>
              <Link href="/about">About</Link>

              <Link href="/contact">Contact</Link>
              <div>
                <Link href="#project">Projects</Link>
              </div>
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
