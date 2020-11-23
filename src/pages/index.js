import Layout from "../components/Layout/Layout.js";

import styles from "../styles/Home.module.css";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { useState, useEffect } from "react";

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1 * 1000);

    return () => {
      clearInterval(
        setInterval(() => {
          setTime(new Date());
        }, 1 * 1000)
      );
    };
  }, []);

  return (
    <>
      <Layout>
        <div className={styles.container}>
          <Link href="/home/[name]" as={`/home/fauzan-affan`}>
            <div className={styles.container_image}>
              <div className={styles.thumbnail}>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={transition}
                >
                  <Image
                    className={styles.image}
                    src="/sansan-cropped.jpg"
                    width={2226}
                    height={3069}
                    alt="my image"
                    priority
                  />
                </motion.div>
              </div>
              <div className={styles.image_details}>
                <div>Fauzan </div>
                <div>{time.toLocaleTimeString()}</div>
              </div>
            </div>
          </Link>
        </div>
      </Layout>
    </>
  );
}
