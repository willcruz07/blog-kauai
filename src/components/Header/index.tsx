import React from "react";

import styles from "./styles.module.scss";

import { FiMenu } from "react-icons/fi";

import { Logo } from "../Logo"
import { MenuNav } from "./MenuNav";
import { useOnClickOutside } from "../../LIB/Lib";


export const Header = () => {
  const ref = React.useRef<any>();
  
  const [openMenu, setOpenMenu] = React.useState(false);
  const [closeMenu, setCloseMenu] = React.useState(false);

  useOnClickOutside(ref, () => menuClose());

  const menuClose = () => {    
    setCloseMenu(false);
    setTimeout(() => setOpenMenu(false), 400);    
  }
 
  const handleMenuClick = () => {
    if (openMenu) {
      menuClose()
    } else {
      setCloseMenu(true)    
      setOpenMenu(!openMenu)
    }
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo height={99} width={150} />

        <div className={styles.headerNav}>
          <MenuNav />
        </div>

        <div ref={ref} className={styles.headerMenu}>
          <button type="button" onClick={() => handleMenuClick()}>
            <FiMenu />            
          </button>
          {openMenu && 
            <div className={[styles.dropdownMenu, closeMenu ? styles.animationMenuOpen : styles.animationMenuClose].join(" ")}>
              <MenuNav  />
            </div>
          }
        </div>        
      </div>
    </header>
  )
}