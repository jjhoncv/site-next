import styles from "./searcher.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const Searcher = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.field}
          placeholder="Search Product here..."
        />
        <button name="search" aria-label="search" className={styles.button}>
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: "white", width: 22 }}
          />
        </button>
      </div>
    </div>
  );
};
