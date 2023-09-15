import styles from "./user.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export const User = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faUser} style={{ color: "#222", width: 21 }} />
    </div>
  );
};
