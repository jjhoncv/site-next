import stylesBase from "./../../assets/scss/base.module.scss";
import Image from "next/image";
// import dynamic from "next/dynamic";

// const MediaQuery = dynamic(() => import("react-responsive"), {
//   ssr: false,
// });

export const Logo = () => {
  return (
    <>
      {/* <MediaQuery minWidth={900}> */}
      <div className={stylesBase.logo}>
        <a href="http://">
          <Image
            src="/next.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={58}
            priority
          />
        </a>
      </div>
      {/* </MediaQuery> */}
    </>

    // <div className={stylesBase.logo}>
    //   <a href="http://">
    //     <Image
    //       src="/next.svg"
    //       alt="Vercel Logo"
    //       className="dark:invert"
    //       width={100}
    //       height={35}
    //       priority
    //     />
    //   </a>
    // </div>
  );
};
