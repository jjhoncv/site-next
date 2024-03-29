// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/app/assets/css/global.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

const App = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default App;
