import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navbar.module.css";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useState } from "react";

const Navbar = () => {
  const [displayOpen, setDisplayOpen] = useState(false);
  return (
    <div>
      <nav className={styles.NavBar}>
        <div className={styles.Links}>
          <Link href="/">
            <a>
              {" "}
              <img
                src="https://ca.slack-edge.com/T039PHS2UKU-U03B0L1A4RY-8371bfcc28da-72"
                style={{ borderRadius: 100, width: 100, height: 100 }}
              />
            </a>
          </Link>
          <Link href="/aboutMe">
            <a>About Me</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/contactMe/">
            <a>Contact Me</a>
          </Link>
        </div>
        <div className={styles.HamburgerIcon}>
          <IconButton
            onClick={() => setDisplayOpen(!displayOpen)}
            colorScheme="blue"
            aria-label="Menu"
            icon={<HamburgerIcon />}
          />
        </div>
      </nav>
      <div
        onClick={() => setDisplayOpen(!displayOpen)}
        className={
          displayOpen
            ? `${styles.MenuDim} ${styles.MenuDimOpen}`
            : styles.MenuDim
        }
      ></div>
      <div
        className={
          displayOpen
            ? `${styles.MenuLinks} ${styles.MenuOpen}`
            : styles.MenuLinks
        }
      >
        <Link href="/">
          <img src="https://imgix.ranker.com/user_node_img/50052/1001021380/original/-cue-melodica-cover-of-the-jaws-theme-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375" />
        </Link>
        <Link href="/aboutMe">
          <a>About Me</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/contactMe/">
          <a>Contact Me</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
