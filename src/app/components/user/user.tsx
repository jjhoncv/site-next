import stylesBase from "./../../assets/scss/base.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
export const User = () => {
  return (
    <div className={stylesBase.iconHeaderRight}>
      <PersonOutlineOutlinedIcon
        stroke="white"
        strokeWidth={0.8}
        sx={{ fontSize: 34 }}
      />
    </div>
  );
};
