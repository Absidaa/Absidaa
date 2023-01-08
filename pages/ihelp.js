import React from "react";

export default function ihelp() {
  return (
    <>
      <div>ihelp</div>

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

              <a href="/project">Projects</a>
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
