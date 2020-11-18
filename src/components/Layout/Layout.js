import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";

import Menu from "../Menu/Menu.js";

import { BsToggleOff, BsToggleOn } from "react-icons/bs";

import styles from "./Layout.module.css";

const Layout = ({ children, title = "Fauzan Affan" }) => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_logo_and_theme}>
          <Link href="/"><h1 className={styles.header_logo}>Fauzan Affan .</h1></Link>
          <div className={styles.header_theme} onClick={switchTheme}>
            <p className={styles.header_theme_label}>
              {theme.charAt(0).toLocaleUpperCase() + theme.slice(1)}
            </p>
            {theme === "light" ? <BsToggleOff /> : <BsToggleOn />}
          </div>
        </div>
        <nav></nav>
        <Menu />
      </header>

      <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/man.svg" />
        </Head>

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          Copyright {new Date().getFullYear()} &copy; fauzanaffan.com
        </footer>
      </div>
    </>
  );
};

export default Layout;
