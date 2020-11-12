import Head from "next/head";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "Fauzan Affan" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/man.svg" />
      </Head>

      <header className={styles.header}>
        Fauzan Affan
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        Copyright {new Date().getFullYear()} &copy; fauzanaffan.com
      </footer>
    </div>
  );
};

export default Layout;
