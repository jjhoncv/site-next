import stylesBase from "./../../assets/scss/base.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
export const Favorite = () => {
  return (
    <div className={stylesBase.iconHeaderRight}>
      <FavoriteBorderOutlinedIcon
        stroke="white"
        strokeWidth={0.8}
        sx={{ fontSize: 28 }}
      />
    </div>
  );
};
