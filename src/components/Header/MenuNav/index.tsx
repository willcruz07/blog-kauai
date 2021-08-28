import React from "react";

import { ActiveLink } from "../../../components/ActiveLink";

import styles from "./styles.module.scss";

import { SiAzuredevops } from "react-icons/si";

import { FaHome, FaDatabase } from "react-icons/fa";

export const MenuNav = React.forwardRef<HTMLDivElement>((props, ref) => {  
  return (      
      <nav ref={ref}  className={styles.navContainer}>
        <ActiveLink href="/" activeClassName={styles.active}>
          <a>                        
            <FaHome/>
            Home
          </a>
        </ActiveLink>                

        <ActiveLink href="/backend" activeClassName={styles.active}>
          <a>
            <FaDatabase/>
            Backend
          </a>
      </ActiveLink>
      
        <ActiveLink href="/devops" activeClassName={styles.active}>
          <a>
            <SiAzuredevops/>
            DevOps
          </a>
        </ActiveLink>

      </nav>      
    )
  }
)