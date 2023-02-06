import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaReact } from "react-icons/fa";

export default function YourRecipe() {
  return (
    <>
      <div className={styles.homeSessionBody}>
        <h3 className={styles.yourRecipe}>Your Recipe</h3>
        <p>Two minutes read.</p>
        <p className={styles.homeSessionBody1}>
          Doing the best things that we love doing the most increase our
          dopamins. And staying close around the <br />
          kitchen to prepare our favourite meal is a whole other level.
        </p>
        <p className={styles.homeSessionBody1}>
          This application would permite you to share all your best moment
          around the kitchen and the end of your <br /> wonderful cousine.
        </p>
        <div>
          <FaReact
            className={styles.icon}
            style={{ fontSize: "1.5em" }}
            color="#61dafb"
          />
        </div>
        <div>
          <h3 className={styles.typeRecipe}>type</h3>
          <div style={{ fontSize: "1.6rem" }}>Cuisine App</div>
        </div>
        <div className={styles.stkRecipe}>
          <h3 className={styles.stakRecipe}>stack</h3>

          <div style={{ fontSize: "1.6rem" }}>React</div>
          <div style={{ fontSize: "1.6rem" }}>Tailwind</div>
          <div style={{ fontSize: "1.6rem" }}>Styled-Components</div>
        </div>
        <div className={styles.sitRecipe}>
          <h3 className={styles.livRecipe}>live</h3>
          <Link href={"/underConstruction"} rel="noreferrer">
            site
          </Link>
        </div>
        <h3 className={styles.explain}>Project Purpose and Goal</h3>
        <p className={styles.homeSessionBody1}>
          <b>YOUR RECIPE</b> application was intended to create a specific
          platform for different recipes.
        </p>
        <p className={styles.homeSessionBody1}>
          Also myself here, I&apos;m a cookaholic, I&apos;m so fond of cooking
          different flavoure, so I decided to create this <br /> application
          that I could share my recipes for the world to see, and people like me
          would also like to share <br /> their favourite dishes. To feel
          invisibly connected with people who&apos;re related to what you do is
          something else.
          <br /> On this paltform, you could stay connected while having fun.
        </p>
        <h3 className={styles.explain}>Web Stack and Explaination</h3>
        <h3 className={styles.explain}>Skills Learned</h3>
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
