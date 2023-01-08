import React from "react";
import styles from "../styles/Home.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function About() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className={styles.aboutBody}>
        <p className={styles.tech}>
          My love for tech has always been appealing!
        </p>
        <div>
          <p className={styles.cv}>
            <span className={styles.myCv}>You wanna check out my</span>
            <Link href={"/cv"}>CV</Link>
            <span className={styles.myCv}>?</span>
          </p>
        </div>
        <div className={styles.story}>
          <p>A quick tell</p>
        </div>

        <div>
          <p>
            <div className={styles.techWise}>
              I have been hovering different devices since when I was young.
            </div>
            3D computer games like Molta Kombat and FIFA psp got me knee to sub
            zero. <br />
            Back home in Sierra Leone, I fixed broken deviecs in my community,
            sometimes, I changed mobile phones' screen that are shattered
            completly and <br />
            give them good looking one that they dserved. Usually, I replaced
            charging bases and the boards. I sovled soft problems in computers
            and phones.
            <br /> Offetenly, folks clicked or do some wrong settings on their
            deviecs that would give cause for the phone or the computer to
            malfunction. Asking what
            <br /> the problem is, then get a good explanation from the owner
            could solve the issue pretty quick, but on the other hand, not
            everyone can explain what
            <br /> they've done or what's wrong. Figuring out the problem might
            not be easy, but I always got the device back as it was.
          </p>
          <div>
            <p>
              <span className={styles.techWise}>
                Since then, I haven&quot;t stopped learning about the tech
                world.
              </span>
              I've been involving in online trading, helping taders open their
              trading accounts then <br />
              show them how they could get around the platform.
            </p>
          </div>
          <p className={styles.dev}>As a developer</p>
          <div>
            <p>
              <span className={styles.close}>
                I give close attention to my codes' understandability.
              </span>
              Certainly, I’ll put together something as quickly as possible to
              make it work, but after that I’ll spend a good amount of time
              commenting and organizing everything. I want you to feel welcome
              around my code.
            </p>
            <p>
              <span className={styles.clean}>
                Clean, maintainable, readable and consistent code.
              </span>
              It’s great when features work, but it’s even greater whenever they
              can stay that way, regardless of who’s working on them.
            </p>
            <p>
              I’m excited to work on new projects, because I learn something new
              every time. I’m excited for the next challenge!
            </p>
          </div>
        </div>
        <p className={styles.per}>As a person</p>
        <div>
          <p>
            If I had to describe myself in a word, it would be
            <span className={styles.res}>resourceful</span>. I’ll take a
            problem, break it into smaller bits and MacGyver myself a solution.
            Creativity has helped me sail around tough obstacles.
          </p>
          <p>
            <span className={styles.nature}>
              I’m curious by nature and I love learning
            </span>
            . I’ve amassed a wide range of skills and interests that when put
            together, end up feeding my career in one way or another. I’m what
            they call a T-shaped individual.
          </p>
        </div>
        <div>
          <p className={styles.coll}>As a colleague</p>
          <p>
            I’m that team player that feels comfortable interacting with both
            the technically oriented people of the team as well as the
            artistically oriented ones. I will always go the extra mile to help
            my team.
          </p>
          <p>
            My communications skills are excellent. I’ve worked on the side as a
            teacher. This experience has made me feel
            <span className={styles.creativity}>
              comfortable at conveying ideas in creative ways so that everyone
              can understand them.
            </span>
          </p>
        </div>
        <p>I would like to hear from you!</p>
      </div>
      <div>
        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            <div className={styles.footer_content}>
              <p className={styles.name}>
                <Link href="/">Abdallah Sahid Dumbuya</Link>
              </p>
              &copy; {new Date().getFullYear()} built and designed by,
              <br /> Abdallah Sahid Dumbuya
            </div>
          </div>
          <div className={styles.footerMiddle}>
            <div className={styles.link}>
              <h6>Links</h6>
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
