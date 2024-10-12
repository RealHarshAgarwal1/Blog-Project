"use client";

import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import { useState } from "react";

const Links = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    }
  ];
  // Temporary
  const session = false;
  const isAdmin = false;

  return (
    <div className={styles.container}> {/* Apply styles to the container */}
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLink key="admin-link" item={{ title: "Admin", href: "/admin" }} />
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", href: "/login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen(prev=>!prev)}> 
        {/* Toggle 'open' state on click */}
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
