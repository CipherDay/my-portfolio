import { type ReactElement, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { type BPs, useWindowSize } from "../hooks/WindowHook.ts";

export default function Experience() {
  const ref = useRef(null);
  const backgroundAndPadding = useScroll({
    target: ref,
  });
  const yAxisTransform = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  // const paddingValue = useTransform(
  //   backgroundAndPadding.scrollYProgress,
  //   [0, 1],
  //   [0, 0],
  // );
  const opacity = useTransform(
    backgroundAndPadding.scrollYProgress,
    [0, 1],
    [0, 2],
  );
  const y = useTransform(
    yAxisTransform.scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );
  return (
    <>
      <motion.div
        id={"experience"}
        ref={ref}
        className={
          "w-full xl:h-[300vh] h-screen relative overflow-clip xl:p-5 "
        }
      >
        <motion.div
          style={{ opacity }}
          className={"absolute inset-0 opacity-0 bg-black"}
        />
        <motion.section
          style={{
            // paddingLeft: paddingValue,
            // paddingRight: paddingValue,
            y,
          }}
          className="w-full h-screen flex justify-center items-center sticky inset-0"
        >
          <Grid />
        </motion.section>
      </motion.div>
    </>
  );
}

const boxSizeCalculator = (breakPoint: BPs) => {
  switch (breakPoint) {
    case "xl":
      return 100;
    case "2xl":
      return 100;
    case "md":
      return 100;
    case "lg":
      return 100;
    case "sm":
      return 85;
    default:
      return 60;
  }
};
const gapSizeCalculator = (breakPoint: BPs) => {
  switch (breakPoint) {
    case "2xl":
      return 10;
    case "xl":
      return 10;
    case "md":
      return 10;
    case "lg":
      return 10;
    case "sm":
      return 8;
    default:
      return 5;
  }
};

// const GAP = window.innerWidth <= 1000 ? 5 : 10;
// const GRIDSIZE = 800;
// const ROWOFFSET = 69;
// const BOXSIZE = window.innerWidth <= 1000 ? 50 : 100;
// const COLOFFSET = Math.ceil(window.innerHeight / BOXSIZE);
const Grid = () => {
  const { breakPoint } = useWindowSize();
  const GAP = gapSizeCalculator(breakPoint);
  return (
    <div
      className="w-full h-full relative bg-black xl:rounded-3xl overflow-hidden flex flex-col justify-center items-center shrink-0"
      style={{
        rowGap: `${GAP}px`,
      }}
    >
      <div
        className={
          "absolute inset-0 flex justify-center items-center pointer-events-none z-20"
        }
        style={{
          background:
            "radial-gradient(circle,rgba(87, 199, 133, 0) 30%, rgba(0, 0, 0, 1) 100%)",
        }}
      />

      <GridCol>
        <GridRow>
          <GridItemLogo glowColor={"#F29111"} className={"p-1 sm:p-2 lg:p-5"}>
            <JAVALOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#A179DC"} className={"p-2 sm:p-4 lg:p-6 "}>
            <CSLOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#283593"} className={"p-2 sm:p-4 lg:p-6"}>
            <CLOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#ffc331"} className={"p-2 lg:p-6"}>
            <PYTHONLOGO />
          </GridItemLogo>
        </GridRow>
        <GridRow>
          <GridItemLogo glowColor={"#5cc8f8"} className={"p-2 lg:p-6"}>
            <FLUTTERLOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#00D2B8"} className={"p-2 sm:p-3 lg:p-6"}>
            <DARTRLOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#512BD4"} className={"p-2 sm:p-4 lg:p-6"}>
            <NETLOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#44b78b"} className={"p-2 sm:p-3 lg:p-6"}>
            <DJLOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#336791"} className={"p-2 sm:p-3 lg:p-5"}>
            <PGLOGO />
          </GridItemLogo>
        </GridRow>
        <GridRow>
          <GridItemLogo glowColor={"#FFFFFF"} className={"p-2 sm:p-3 lg:p-5"}>
            <NEXTLOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#f7df1e"} className={"p-2 sm:p-4 lg:p-6"}>
            <JSLOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#13aa52"} className={"p-2 sm:p-4 lg:p-6"}>
            <MDBLOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#5aad45"} className={"p-2 sm:p-4 lg:p-6"}>
            <NODELOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#3178c6"} className={"p-2 sm:p-4 lg:p-6"}>
            <TSLOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#00D8FF"} className={"p-2 sm:p-4 lg:p-6"}>
            <REACTLOGO />
          </GridItemLogo>
        </GridRow>
        <GridRow>
          <GridItemLogo glowColor={"#2396ED"} className={"p-2 sm:p-4 xl:p-5"}>
            <DOCKERLOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#EE4C2C"} className={"p-2 sm:p-4 xl:p-5"}>
            <PYTORCHLOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#FFFFFF"} className={"p-2 sm:p-4 xl:p-5"}>
            <EXJSLOGO />
          </GridItemLogo>
          <GridItemLogo glowColor={"#ffc24a"} className={"p-2 sm:p-4 xl:p-5"}>
            <FIREBASELOGO />
          </GridItemLogo>
        </GridRow>
      </GridCol>
    </div>
  );
};
const GridCol = ({
  children,
  padding,
}: {
  children?: ReactElement[];
  padding?: number;
}) => {
  const { width, breakPoint } = useWindowSize();
  padding = Math.ceil(width / (breakPoint == "xl" ? 100 : 50));
  return (
    <>
      {Array.from({ length: padding }).map((_, i) => (
        <GridRow key={i} />
      ))}
      {children}
      {Array.from({ length: padding }).map((_, i) => (
        <GridRow key={i} />
      ))}
    </>
  );
};

const GridRow = ({
  children,
}: {
  children?: ReactElement[] | ReactElement;
}) => {
  const { height, breakPoint } = useWindowSize();
  const padding = Math.ceil(height / (breakPoint == "xl" ? 100 : 50)) + 1;

  const GAP = gapSizeCalculator(breakPoint);
  return (
    <div
      className={"flex shrink-0"}
      style={{
        columnGap: `${GAP}px`,
      }}
    >
      {Array.from({ length: padding }).map((_, i) => (
        <GridItem key={i} className={""} />
      ))}
      {children}
      {Array.from({ length: padding }).map((_, i) => (
        <GridItem key={i} className={""} />
      ))}
    </div>
  );
};

const GridItem = ({
  className,
  children,
  ref,
}: {
  className: string;
  children?: ReactElement;
  ref?: never;
}) => {
  const { breakPoint } = useWindowSize();
  const size = boxSizeCalculator(breakPoint);
  document.title = breakPoint;
  return (
    <div
      ref={ref}
      className={" bg-neutral-800 rounded-xl z-0" + " " + className}
      style={{ width: size, height: size }}
    >
      {children}
    </div>
  );
};
const GridItemMotion = motion.create(GridItem);

const GridItemLogo = ({
  children,
  className,
  glowColor,
}: {
  children: ReactElement;
  className?: string;
  glowColor: string;
}) => {
  return (
    <GridItemMotion
      initial={{
        boxShadow: `0px 0px 10px 3px rgba(0,0,0,0)`,
        transition: {
          duration: 3,
          easings: "easeInOut",
        },
      }}
      whileHover={{
        boxShadow: `0px 0px 10px 3px ${glowColor}`,
        transition: {
          duration: 0.3,
          easings: "easeInOut",
        },
      }}
      className={"grid place-content-center cursor-pointer" + " " + className}
    >
      {children}
    </GridItemMotion>
  );
};

const JAVALOGO = () => {
  return <img src="icons/Java.svg" alt="Java" className={"w-full h-full"} />;
};

const CSLOGO = () => {
  return <img src="icons/CS.svg" alt="CSharp" className={"w-full h-full"} />;
};

const CLOGO = () => {
  return <img src="icons/C.svg" alt="c" className={"w-full h-full"} />;
};

const PYTHONLOGO = () => {
  return (
    <img src="icons/Python.svg" alt="python" className={"w-full h-full"} />
  );
};

const FLUTTERLOGO = () => {
  return (
    <img src="icons/Flutter.svg" alt="flutter" className={"w-full h-full"} />
  );
};
const DARTRLOGO = () => {
  return <img src="icons/Dart.svg" alt="dart" className={"w-full h-full"} />;
};
const NETLOGO = () => {
  return <img src="icons/NET.svg" alt=".net" className={"w-full h-full"} />;
};
const DJLOGO = () => {
  return (
    <img src="icons/Django.svg" alt="Django" className={"w-full h-full"} />
  );
};
const REACTLOGO = () => {
  return <img src="icons/React.svg" alt="React" className={"w-full h-full"} />;
};
const NEXTLOGO = () => {
  return <img src="icons/Next.svg" alt="NextJs" className={"w-full h-full"} />;
};
const JSLOGO = () => {
  return (
    <img src="icons/JS.svg" alt="Javascript" className={"w-full h-full"} />
  );
};
const TSLOGO = () => {
  return (
    <img src="icons/TS.svg" alt="Typescript" className={"w-full h-full"} />
  );
};
const PGLOGO = () => {
  return <img src="icons/PG.svg" alt="Pgsql" className={"w-full h-full"} />;
};
const DOCKERLOGO = () => {
  return (
    <img src="icons/Docker.svg" alt="Docker" className={"w-full h-full"} />
  );
};
const PYTORCHLOGO = () => {
  return (
    <img src="icons/Pytorch.svg" alt="Pytorch" className={"w-full h-full"} />
  );
};
const EXJSLOGO = () => {
  return (
    <img src="icons/EXJS.svg" alt="ExpressJs" className={"w-full h-full"} />
  );
};
const FIREBASELOGO = () => {
  return (
    <img src="icons/Firebase.svg" alt="Firebase" className={"w-full h-full"} />
  );
};
const NODELOGO = () => {
  return <img src="icons/Node.svg" alt="Node" className={"w-full h-full"} />;
};
const MDBLOGO = () => {
  return (
    <img src="icons/MongoDB.svg" alt="MongoDB" className={"w-full h-full"} />
  );
};
