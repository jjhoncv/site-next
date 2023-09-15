import styles from "./cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export const Cart = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "#222", width: 28 }}
      />
    </div>
  );
};
