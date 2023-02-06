import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaReact } from "react-icons/fa";

export default function YourRecipe() {
  return (
    <>
      <div className={styles.homeSessionBody}>YourRecipe</div>;
      <div>
        <FaReact
          className={styles.icon}
          style={{ fontSize: "1.5em" }}
          color="#61dafb"
        />
      </div>
      <div>
        <h3 className={styles.typeSession}>type</h3>
        <div style={{ fontSize: "1.6rem" }}>Cuisine App</div>
      </div>
      <div className={styles.stkSession}>
        <h3 className={styles.stakSession}>stack</h3>

        <div style={{ fontSize: "1.6rem" }}>React.js</div>
        <div style={{ fontSize: "1.6rem" }}>Tailwind</div>
        <div style={{ fontSize: "1.6rem" }}>Styled-Components</div>
      </div>
      <div className={styles.sitSession}>
        <h3 className={styles.livSession}>live</h3>
        <Link href={""} rel="noreferrer">
          site
        </Link>
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

              <Link href="/#contact" style={{ textDecoration: "none" }}>
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
