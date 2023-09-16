import stylesBase from "./../../assets/scss/base.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export const Cart = () => {
  return (
    <div className={stylesBase.iconHeaderRight}>
      {/* <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "#222", width: 28 }}
      /> */}
      <ShoppingCartOutlinedIcon
        stroke="white"
        strokeWidth={0.8}
        sx={{ fontSize: 30 }}
      />
    </div>
  );
};
