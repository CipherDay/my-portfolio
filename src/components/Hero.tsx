import { motion, AnimatePresence } from "motion/react";
import { useLenis } from "lenis/react";
import { breakPointEvaluate, useWindowSize } from "../hooks/WindowHook.ts";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
import * as React from "react";

const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5, easings: "easeIn" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, delay: 0.5, easings: "easeIn" },
  },
};

export default function Hero() {
  return (
    <>
      <NavBar />
      <div className={"overflow-hidden"}>
        <HeroLanding />
      </div>
    </>
  );
}

// ---Hero Section---
const HeroLanding = () => {
  return (
    <>
      <motion.div
        id={"home"}
        className="xl:max-w-7xl p-5 xl:p-0 w-full mx-auto h-[calc(100vh_-_var(--navbar-height))] leading-none flex flex-col justify-center"
      >
        <FancyText text={"Full-Stack"} />
        <FancyText text={"Engineer"} />

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ easings: "easeIn", delay: 0.5, duration: 0.3 }}
          className={
            "font-body-light-family leading-tight text-lg sm:text-xl pt-5 md:max-w-1/2 max-w-full overflow-hidden"
          }
        >
          Hey, I’m Abderrahim, a Full-Stack Engineer delivering top-tier
          Websites, SaaS, Mobile experiences, and good vibes for almost a
          decade.
        </motion.p>
      </motion.div>
    </>
  );
};

const FancyText = ({ text }: { text: string }) => {
  const STAGGER = 0.02;
  const DURATION = 0.2;
  const STIFFNESS = 70;
  return (
    <div className={"overflow-hidden"}>
      {text.split("").map((letter, index) => {
        if (letter === " ") {
          return <span key={index} className={"inline-block xl:w-10 w-3"} />;
        }
        return (
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: STIFFNESS,
              delay: STAGGER * index,
              duration: DURATION,
            }}
            className={
              " inline-block font-heading-family font-bold tracking-wider text-8xl sm:text-9xl md:text-[10rem]"
            }
          >
            {letter}
          </motion.span>
        );
      })}
    </div>
  );
};

// ---Navbar---
const NavBar = () => {
  const { width } = useWindowSize();

  return (
    <>
      <header className={"w-full h-[var(--navbar-height)] py-5"}>
        <section className={"flex max-w-7xl p-5 xl:p-0 mx-auto items-center"}>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className={"grow"}
          >
            <Logo className={"sm:w-20 w-14  fill-black"} />
          </motion.div>
          {breakPointEvaluate(width, "sm") ? <NavMenu /> : <BurgerNav />}
        </section>
      </header>
    </>
  );
};

const BurgerNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isOpen ? (
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          exit="exit"
          className={"z-40 fixed right-5 "}
        >
          <IoMdClose
            className={"w-10 h-10  text-amber-500"}
            onClick={() => setIsOpen(false)}
          />
        </motion.div>
      ) : (
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          exit="exit"
          className={"z-40 fixed right-5"}
        >
          <GiHamburgerMenu
            className={"w-10 h-10 text-amber-500"}
            onClick={() => setIsOpen(true)}
          />
        </motion.div>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ easings: "easeInOut" }}
            className={
              "fixed inset-0 bg-black z-30 flex flex-col p-5 pt-20 gap-10"
            }
          >
            <BurgerNavLink setIsOpen={setIsOpen} targetId={"#home"}>
              Home
            </BurgerNavLink>
            <BurgerNavLink setIsOpen={setIsOpen} targetId={"#experience"}>
              Experience
            </BurgerNavLink>
            <BurgerNavLink setIsOpen={setIsOpen} targetId={"#work"}>
              Work
            </BurgerNavLink>
            <BurgerNavLink setIsOpen={setIsOpen} targetId={"#service"}>
              Services
            </BurgerNavLink>
            <BurgerNavLink setIsOpen={setIsOpen} targetId={"#contact"}>
              Contact
            </BurgerNavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
const BurgerNavLink = ({
  children,
  targetId,
  setIsOpen,
}: {
  children: string;
  targetId: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const lenis = useLenis();

  const scrollTo = (target?: string) => {
    if (!lenis || !target) return;
    setIsOpen(false);

    lenis.scrollTo(target, {
      duration: 1,
      easing: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)),
      // onComplete: () => ,
    });
  };
  return (
    <motion.div
      onClick={() => scrollTo(targetId)}
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit={{
        opacity: 0,
        transition: {
          delay: 0,
          duration: 0.1,
        },
      }}
      className={" w-full"}
    >
      <p className={"font-body-bold-family text-white text-5xl"}>{children}</p>
    </motion.div>
  );
};
const NavLink = ({ text, idTarget }: { text: string; idTarget: string }) => {
  const lenis = useLenis();

  const scrollTo = (target?: string) => {
    if (!lenis || !target) return;
    lenis.scrollTo(target, {
      duration: 1,
      easing: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)),
    });
  };

  return (
    <>
      <motion.a
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className={
          "font-body-family text-black text-xl cursor-pointer hover:text-gray-600 transition-colors ease-in-out duration-200 "
        }
        onClick={() => scrollTo(idTarget)}
      >
        {text}
      </motion.a>
    </>
  );
};

const NavMenu = () => {
  return (
    <>
      <section className={"flex gap-x-10"}>
        <NavLink text={"Experience"} idTarget={"#experience"} />
        <NavLink text={"Work"} idTarget={"#work"} />
        <NavLink text={"Services"} idTarget={"#service"} />
        <NavLink text={"Contact"} idTarget={"#contact"} />
      </section>
    </>
  );
};

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 573 388"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M300 2V386H63L300 2Z" />
      <path d="M1 386V2H238L1 386Z" />
      <path d="M362 2C642 2 642 386 362 386V2Z" />
    </svg>
  );
};
