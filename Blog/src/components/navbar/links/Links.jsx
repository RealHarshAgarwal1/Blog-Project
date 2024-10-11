import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const Links = () => {

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

    //Temporary
    const session = false;
    const isAdmin = false;



  return (
    <div className={styles.links}>
      {
        links.map((link=>(
            <NavLink item={link} key={link.title} />
        )))
      }{
        session ? (
            <>
            {isAdmin && <NavLink item = {{ title:"Admin",href:"/admin"}}/>}
            <button>Logout</button>
            </>
        ) 
        : 
        (
            <NavLink item={{title:"Login",href:"/login"}}/>
        )
      }
    </div>
  );
}

export default Links;
