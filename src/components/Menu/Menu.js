import Link from "next/link";

import styles from "./Menu.module.css";

const Menu = () => {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <ul className={styles.menus}>
      {menus.map((menu) => (
        <li>
          <Link href={menu.href}>
            <a>{menu.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
