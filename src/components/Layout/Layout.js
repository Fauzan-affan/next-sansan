import Head from "next/head";
import { withRouter } from "next/router";
import { useEffect, useState } from "react";

import { BsToggleOff, BsToggleOn } from "react-icons/bs";

import GoBackButton from "../GoBackButton/GoBackButton.js";

import styles from "./Layout.module.css";

const Layout = ({ children, title = "Fauzan Affan", router }) => {
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
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/man.svg" />
      </Head>

      <header className={styles.header}>
        <div className={styles.header_theme} onClick={switchTheme}>
          <p className={styles.header_theme_label}>
            {theme.charAt(0).toLocaleUpperCase() + theme.slice(1)}
          </p>
          {theme === "light" ? <BsToggleOff /> : <BsToggleOn />}
        </div>
        <h1 className={styles.header_logo}>Fauzan Affan</h1>
        {router.pathname !== "/" ? <GoBackButton /> : <nav></nav>}
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        Copyright {new Date().getFullYear()} &copy; fauzanaffan.com
      </footer>
    </div>
  );
};

export default withRouter(Layout);
