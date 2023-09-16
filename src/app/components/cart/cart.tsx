import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import stylesBase from "./../../assets/scss/base.module.scss";

export const Cart = () => {
  return (
    <div className={stylesBase.iconHeaderRight}>
      <ShoppingCartOutlinedIcon
        stroke="white"
        strokeWidth={0.8}
        sx={{ fontSize: 33 }}
      />
    </div>
  );
};
