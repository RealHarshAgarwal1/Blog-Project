import Link from "next/link";
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
    ]
  return (
    <div>
      {
        links.map((link=>(
            <Link href={link.href} key={link.title}>{link.title}</Link>
        )))
      }
    </div>
  );
}

export default Links;
