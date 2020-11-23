import Link from "next/link";

import Layout from "../components/Layout/Layout.js";

import styles from "../styles/Blog.module.css";

const blog = () => {
  return (
    <Layout title={`Blog`}>
      <h1 className={styles.header_title}>Blog</h1>
      <div className={styles.title_container}>
        <ul>
          <li className={styles.article} key={1}>
            <Link href="/blog/[id]" as={`/blog/${1}`}>
              <a className={styles.title}>Me vs Jakarta</a>
            </Link>
            <div>
              <small className={styles.date}>
                <time dateTime={`2020-01-02`}>January, 2 2020</time>
              </small>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default blog;
