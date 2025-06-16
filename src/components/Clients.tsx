import { motion } from "motion/react";
import type { ReactElement } from "react";

export default function Clients() {
  return (
    <>
      <div className={"w-full"}>
        <Ticker direction={"left"}>
          <div className={"xl:w-1/8 w-1/4 h-full p-8 xl:p-10"}>
            <FENTECHLOGO />
          </div>
          <div className={"xl:w-1/8 w-1/4 h-full p-4 xl:p-10"}>
            <MMLOGO />
          </div>
          <div className={"xl:w-1/8 w-1/4 h-full p-4 xl:p-10"}>
            <ATLOGO />
          </div>
          <div className={"xl:w-1/8 w-1/4 h-full p-4 xl:p-10"}>
            <ONELOGO />
          </div>
          <div className={"w-1/8 h-full p-1 xl:p-10 xl:block hidden"}>
            <FENTECHLOGO />
          </div>
          <div className={"w-1/8 h-full p-1 xl:p-10 xl:block hidden"}>
            <MMLOGO />
          </div>
          <div className={"w-1/8 h-full p-1 xl:p-10 xl:block hidden"}>
            <ATLOGO />
          </div>
          <div className={"w-1/8 h-full p-1 xl:p-10 xl:block hidden"}>
            <ONELOGO />
          </div>
        </Ticker>
      </div>
    </>
  );
}

type DIRECTION = "left" | "right";

const Ticker = ({
  direction,
  children,
}: {
  direction: DIRECTION;
  children: ReactElement[] | ReactElement;
}) => {
  return (
    <section
      className={"w-full h-40 flex bg-white shrink-0 overflow-hidden relative "}
      style={{
        flexDirection: direction === "left" ? "row" : "row-reverse",
      }}
    >
      <div
        className={"absolute inset-0 z-10"}
        style={{
          background:
            "radial-gradient(circle,rgba(87, 199, 133, 0) 63%, rgba(255, 255, 255, 1) 90%)",
        }}
      />
      <motion.div
        whileHover={{
          opacity: 1,
        }}
        className={
          "absolute inset-0 z-11 grid place-content-center opacity-0 bg-white/50"
        }
      >
        <div
          className={
            "w-fit px-4 py-5  bg-white rounded-md grid place-content-center border border-slate-200"
          }
          style={{
            boxShadow: "10px 10px 25px -3px rgba(0,0,0,0.28)",
          }}
        >
          <p className={"text-base text-neutral-600 font-body-family"}>
            I've worked with amazing clients.
          </p>
        </div>
      </motion.div>
      {Array.from({ length: 2 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: 0,
          }}
          animate={{
            x: direction === "left" ? "-100%" : "100%",
          }}
          transition={{
            duration: window.innerWidth <= 1000 ? 10 : 20,
            ease: "linear",
            repeatType: "loop",
            repeat: Infinity,
          }}
          className={
            "w-full h-full flex justify-center items-center shrink-0 gap-2"
          }
        >
          {children}
        </motion.div>
      ))}
    </section>
  );
};

const FENTECHLOGO = () => {
  return (
    <div
      className={"w-full h-full"}
      style={{
        backgroundImage: 'url("/logos/FT.svg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    ></div>
  );
};
const ONELOGO = () => {
  return (
    <div
      className={"w-full h-full"}
      style={{
        backgroundImage: 'url("/logos/ONE.svg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    ></div>
  );
  // <img className={"w-full h-full"} src="/logos/ONE.svg" alt="OneFit" />;
};
const MMLOGO = () => {
  return (
    <div
      className={"w-full h-full"}
      style={{
        backgroundImage: 'url("/logos/Minimoon.svg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    ></div>
    // <img className={"w-full h-full"} src="/logos/Minimoon.svg" alt="Minimoon" />
  );
};
const ATLOGO = () => {
  return (
    <div
      className={"w-full h-full"}
      style={{
        backgroundImage: 'url("/logos/AT.svg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    ></div>
  );
};
