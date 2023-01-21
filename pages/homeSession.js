import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
export default function homeSession() {
  return (
    <>
      <div className={styles.homeSessionBody}>
        <h3 className={styles.homeSessionHeader}>Home Session</h3>
        <h6> Two minutes read!</h6>
        <p className={styles.homeSessionBody1}>
          Workout and look fit is not a mordern thing but it&apos;s one of the
          top five doctors&apos; prescriptions <br />
          in these mordern days to keep you healthy. I love workingout first
          thing before doing anything <br />
          else, so I decided to build the app that could keep me going.
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
            <h3 className={styles.typeSession}>type</h3>
            <div>Health App</div>
          </div>
          <div className={styles.stkSession}>
            <h3 className={styles.stakSession}>stack</h3>

            <div>React.js</div>
            <div>Bootstrap</div>
            <div>Styled-Components</div>
          </div>
          <div className={styles.sitSession}>
            <h3 className={styles.livSession}>live</h3>
            <Link href={""} rel="noreferrer">
              site
            </Link>
          </div>
        </div>
        <Image
          style={{ borderRadius: "15px" }}
          src="/homeSessionScreenshot1.png"
          alt="Picture of the author"
          width={430}
          height={500}
        />
        <div className={styles.img2}>
          <Image
            style={{ borderRadius: "10px", marginTop: "-54vh" }}
            src="/homeSessionScreenshot2.png"
            alt="Picture of the author"
            width={180}
            height={310}
          />
        </div>
        <div>
          <h3 className={styles.explain}>Project Purpose and Goal</h3>
          <p className={styles.homeSessionBody1}>
            The Home Session Workout application is to keep yourself fit as time
            flies by.
          </p>
          <p className={styles.homeSessionBody1}>
            I love to keep myself fit and the first thing that I always do
            whenever I hopped out of my bed is to <br /> do some exercises. So
            the basic idea and goal of this application is to boost my workout
            appetite, <br /> and above all, I always wanted to track the time
            that I workout daily, because progress is vital key in <br /> every
            aspect of our doings.
          </p>
        </div>
        <div>
          <h3 className={styles.explain}>Web Stack and Explaination</h3>
          <p className={styles.homeSessionBody1}>
            I was pleased to use static site rendering that recharges from a CMS
            for a better production. I used <br /> React.js to statically
            generate pages because I wanted to try something new and I feel
            confident <br /> with their static generation as I was proceeding
            with my code.
          </p>
          <p className={styles.homeSessionBody1}>
            I deployed this applicaton on Vercel. After a lot of research I
            thing they have edges on certain <br /> developing tool and the
            Intergration of deploying and updating your app is on a whole other
            level.
          </p>
          <h3 className={styles.explain}>Skills Learned </h3>
          <p className={styles.homeSessionBody1}>
            Making a web page or an application responsive was something that
            made me tinkled my thoughts <br /> to attention. It was somehow a
            bit of a headache for me, but after persisting to get to the bottom
            of it, <br /> then I know it&apos;s a peace of cake. <b /> Another
            skill that i picked up during this process was to put a timer <br />{" "}
            in my app. This halted my coding process because I wanted to get it
            done at all means. I hopped back <br /> to app after gasping the
            basics.
          </p>
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
                    <BsGithub size={30} />
                  </Link>
                </div>

                <div>
                  <Link
                    href="https://www.linkedin.com/in/absida-04b9b3232/"
                    target="blank"
                  >
                    <BsLinkedin size={30} />
                  </Link>
                </div>
                <div>
                  <Link href="http://absida8@gmail.com" target="blank">
                    <MdEmail size={30} />
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
