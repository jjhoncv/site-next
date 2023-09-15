import styles from "./favorite.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export const Favorite = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faHeart} style={{ color: "#222", width: 25 }} />
    </div>
  );
};
