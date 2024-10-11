"use client";

import { usePathname } from "next/navigation";
import styles from "./navlink.module.css";
import Link from "next/link";

const NavLink = ({ item }) => { // Pass in the 'item' prop
  const pathName = usePathname();
  return (
    <div className={styles.container}>
      <Link 
        href={item.href} // Use item.href for the link
        className={`${styles.container} ${pathName === item.href && styles.active}`} // Compare with item.href
      >
        {item.title}
      </Link>
    </div>
  );
};

export default NavLink;
