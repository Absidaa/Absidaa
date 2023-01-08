import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function ihelp() {
  return (
    <>
      <div>ihelp</div>

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

              <Link href="/project">Projects</Link>
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
