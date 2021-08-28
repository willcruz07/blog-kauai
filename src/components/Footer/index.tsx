import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import { Logo } from "../Logo";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.container}>

        <div className={styles.containerFooterWrapper_1}>      
          <Logo height={50} width={110} />

          <div className={styles.containerSocialLink}>           
            <a href="https://github.com/KauaiGuarilha" target="_blank">
              <FaGithub className={styles.github} />
            </a>

            <a href="https://www.linkedin.com/in/kauai-guarilha/" target="_blank">
              <FaLinkedin className={styles.linkedin} />
            </a>
          </div>

        </div>

        <div className={styles.containerFooterWrapper_2}>
          <small>
            © 2021 - <a href="/">Blog Kauai-Gaurilha.</a> Published with <a href="https://prismic.io/" target="_blank">Prismic.io</a> 
          </small>
        </div>
        
      </div>
    </footer>
  )
}