import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import stylesBase from "./../../assets/scss/base.module.scss";

export const User = () => {
  return (
    <div>
      <PersonOutlineOutlinedIcon
        stroke="white"
        strokeWidth={0.8}
        sx={{ fontSize: 37 }}
      />
    </div>
  );
};
