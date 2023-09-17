import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import stylesBase from "./../../assets/scss/base.module.scss";

export const Favorite = () => {
  return (
    <div>
      <FavoriteBorderOutlinedIcon
        stroke="white"
        strokeWidth={0.6}
        sx={{ fontSize: 29 }}
      />
    </div>
  );
};
