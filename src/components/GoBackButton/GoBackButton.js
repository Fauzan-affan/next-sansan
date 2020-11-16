import Link from "next/link"

import {RiArrowGoBackFill} from"react-icons/ri"

import styles from "./GoBackButton.module.css"

const GoBackButton = () => {
    return <Link href="/">
    <div className={styles.header_back}>
      <p className={styles.header_back_label}>Go Back</p>
      <RiArrowGoBackFill />
    </div>
  </Link>
}

export default GoBackButton