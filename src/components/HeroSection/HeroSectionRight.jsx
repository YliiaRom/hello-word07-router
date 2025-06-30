import { motion } from "framer-motion";
import boy02 from "../../assets/img/boy02.png";
import boy from "../../assets/img/boy.png";
import girl from "../../assets/img/girl02.png";
// import Spline from "@splinetool/react-spline";
// import { useEffect, useState } from "react";
function HeroSectionRight() {
  // const [Spline, setSpline] = useState(null);

  // useEffect(() => {
  //   import("@splinetool/react-spline").then((mod) => {
  //     setSpline(() => mod.default);
  //   });
  // }, []);

  // if (!Spline) return <div>Загрузка 3D...</div>;
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute xl:right-[-28%] right-0 bottom-[-10%] lg:bottom-[-10%] flex  justify-center items-center w-full h-full "
      >
        <div className="relative max-w-[600px] w-full min-w-[400px] aspect-[3/4] flex justify-center items-center heroAvatar">
          <img
            src={boy02}
            alt="boy02"
            className="absolute inset-0 w-full h-full object-contain"
          />
          <img
            src={girl}
            alt="boy02"
            className="absolute inset-0 w-full h-full object-contain"
          />
          <img
            src={boy}
            alt="boy02"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
        {/* <div>
        <Spline
          className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
          scene="https://prod.spline.design/s2gYi5LkRVmxNt9i/scene.splinecode"
        />
      </div> */}
      </motion.div>
      {/* <Spline
          className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
          scene="https://prod.spline.design/s2gYi5LkRVmxNt9i/scene.splinecode"
        /> */}
      {/* </div> */}
    </>
  );
}
export default HeroSectionRight;
