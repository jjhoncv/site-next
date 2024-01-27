import styles from "./searcher.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const Searcher = () => {
  return (
    //   width: 100%;
    // @include devices(tablet) {
    //   width: auto;
    //   display: flex;
    //   align-items: center;
    // }

    //   width: 100%;
    // display: flex;
    // height: 50px;
    // @include devices(tablet) {
    //   width: 400px;
    // }

    <div className="w-full lg:w-auto lg:flex lg:items-center">
      <div className="w-full flex h-12 lg:w-[400px]">
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
