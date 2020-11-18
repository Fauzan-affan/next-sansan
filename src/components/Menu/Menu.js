import Link from "next/link";
import {withRouter} from "next/router"

import styles from "./Menu.module.css";

const Menu = ({router}) => {

  const menus = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <ul className={styles.menus}>
      {menus.map((menu) => (
        <li className={router.pathname === menu.href ? styles.menu_active : ""}>
          <Link href={menu.href}>
            <a>{menu.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(Menu);
