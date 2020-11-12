import {MdSearch} from "react-icons/md"
import styles from "./SearchInput.module.css"

const SearchInput = ({...rest}) => {
    return (
        <div className={styles.wrapper}>
            <MdSearch size="2rem" />
            <input className={styles.input} {...rest}/>
        </div>
    )
}

export default SearchInput;