import styles from "../styles/navbar.module.css";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";



export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.leftSide}>
          <div className={styles.links} id={showLinks ? "hidden" : ""}>
            <Link href={"/about"}>
               <div
                title="ABOUT"
                data-toggle="popover"
                data-trigger="hover"
              >
              <Image
                style={{ borderRadius: "50px" }}
                size="xl"
                circle
                src="/absid.jpg"
                alt="@superman66"
                width={30}
                height={30}
                />
              </div>  
            </Link>

            <Link href={"/#project"}>Projects</Link>
            <Link href={"/#contact"}>Contacts</Link>
            <Link href={"/"} className={styles.port} >Portfolio</Link>
          </div>
        </div>
        <div className={styles.mid} id={showLinks ? "hidden" : ""}>
          <Link href={"/"}>PortFolio</Link>
        </div>

        <div className={styles.rightSide}>
          <div class="navbar">
            <div className={styles.dropdown}>
              <button className={styles.dropbtn} style={{marginTop: "17px"}}>
                Dropdown
                <i class="fa fa-caret-down"></i>
              </button>
              <div className={styles.dropdown_content}>
                <Link href="/about" style={{ textDecoration: "none" }}>About</Link>
                <Link href="/#project"style={{ textDecoration: "none" }}>Projects </Link>
                <div className={styles.act}>
                  <Link href="/#contact"style={{ textDecoration: "none" }}>Contact </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//<div className={styles.portf} >Portfolio</div>

//
//
//<BsList
//            size={30}
//            color="white"
//            className={styles.btn}
//            onClick={() => setShowLinks(!showLinks)}
//         />
//

//import { Navbar, Nav } from 'rsuite';
//import HomeIcon from '@rsuite/icons/legacy/Home';
//import CogIcon from '@rsuite/icons/legacy/Cog';
//
//const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
//  return (
//    <Navbar {...props}>
//      <Navbar.Brand href="#">RSUITE</Navbar.Brand>
//      <Nav onSelect={onSelect} activeKey={activeKey}>
//        <Nav.Item eventKey="1" icon={<HomeIcon />}>
//          Home
//        </Nav.Item>
//        <Nav.Item eventKey="2">News</Nav.Item>
//        <Nav.Item eventKey="3">Products</Nav.Item>
//        <Nav.Menu title="About">
//          <Nav.Item eventKey="4">Company</Nav.Item>
//          <Nav.Item eventKey="5">Team</Nav.Item>
//          <Nav.Item eventKey="6">Contact</Nav.Item>
//        </Nav.Menu>
//      </Nav>
//      <Nav pullRight>
//        <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
//      </Nav>
//    </Navbar>
//  );
//};
//  <div className={styles.drop}>
//    <Dropdown className={styles.dropp} title="Dropdown">
//      <div className={styles.abt}><a href="/about"> About</a></div>
//      <div className={styles.act}><a href="/contact">Contact</a></div>
//    <div className={styles.ect}><Link href="/project">Projects</Link></div>
//    <div className={styles.blg}><a href={"/blog"}>Blog</a></div>
//
//    </Dropdown>
//  </div>
