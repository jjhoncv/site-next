import SendIcon from "@mui/icons-material/Send";
import RestoreIcon from "@mui/icons-material/Restore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const IconProps = {
  stroke: "white",
  strokeWidth: 0.8,
  sx: { fontSize: 55 },
};

export const data = [
  {
    icon: <SendIcon {...IconProps} />,
    title: "Worldwide Shipping",
    description: "Order Above $100",
  },
  {
    icon: <RestoreIcon {...IconProps} />,
    title: "Easy 30 Day Returns",
    description: "Order Above $100",
  },
  {
    icon: <WorkspacePremiumIcon {...IconProps} />,
    title: "Money Back Guarantee",
    description: "Order Above $100",
  },
  {
    icon: <SupportAgentIcon {...IconProps} />,
    title: "Easy Online Support",
    description: "Order Above $100",
  },
];
