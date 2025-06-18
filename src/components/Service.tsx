import { motion } from "motion/react";
import { useLenis } from "lenis/react";

export default function Service() {
  return (
    <>
      <section id={"service"} className={"w-full min-h-screen"}>
        <div
          className={
            "max-w-7xl px-5 xl:px-0 mx-auto border-t-3 border-gray-200"
          }
        >
          <p className={"font-body-family text-7xl xl:text-[6.5rem] grow pt-5"}>
            Services
          </p>
          <div
            className={
              "w-full grid grid-rows-3 xl:grid-cols-3 xl:grid-rows-1 gap-10 py-10"
            }
          >
            <ServiceCard
              title={"Website"}
              subtitle={
                "Clear and engaging websites that actually do their job, whether it’s starting fresh or giving an old one a makeover."
              }
              color={"#FC5185"}
              number={"1"}
            />
            <ServiceCard
              title={"Product"}
              subtitle={
                "Scalable and intuitive interfaces for B2B and B2C SaaS products that truly work. From user flows to design systems."
              }
              number={"2"}
              color={"#3FC1C9"}
            />
            <ServiceCard
              title={"Mobile"}
              subtitle={
                "Seamless and fluid mobile experiences designed to fit how people use apps in the real world and actually loved by users."
              }
              number={"3"}
              color={"#364F6B"}
            />
          </div>
          <WeCan />
        </div>
      </section>
    </>
  );
}
const WeCan = () => {
  return (
    <div className={"w-full flex gap-6 flex-col xl:flex-row my-20 shrink-0"}>
      <div className={"grow"}>
        <p className={"font-body-black-family text-6xl"}>Together, we can...</p>
      </div>
      <div className={"grid grid-rows-4 gap-4 xl:grid-cols-2 xl:grid-rows-2 "}>
        <div className={"flex items-center gap-x-5 shrink-0"}>
          <div className={"w-3 h-3 rounded-full bg-amber-500 shrink-0"}></div>
          <p className={"font-body-light-family"}>
            Build a lasting partnership for ongoing design needs
          </p>
        </div>
        <div className={"flex items-center gap-x-5 shrink-0"}>
          <div className={"w-3 h-3 rounded-full bg-amber-500 shrink-0"}></div>
          <p className={"font-body-light-family"}>
            Gain deeper insights into your users and refine your product
          </p>
        </div>
        <div className={"flex items-center gap-x-5 shrink-0"}>
          <div className={"w-3 h-3 rounded-full bg-amber-500 shrink-0"}></div>
          <p className={"font-body-light-family"}>
            Give your product a fresh and modern UI
          </p>
        </div>
        <div className={"flex items-center gap-x-5 shrink-0"}>
          <div className={"w-3 h-3 rounded-full bg-amber-500 shrink-0"}></div>
          <p className={"font-body-light-family"}>
            Turn your idea into a tangible, real-world product
          </p>
        </div>
      </div>
    </div>
  );
};
const ServiceCard = ({
  number,
  title,
  subtitle,
  color,
}: {
  number: string;
  title: string;
  subtitle: string;
  color: string;
}) => {
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
      <motion.div
        whileHover={{
          boxShadow: "10px 10px 41px -1px rgba(0,0,0,0.45)",
        }}
        whileTap={{
          boxShadow: "10px 10px 41px -1px rgba(0,0,0,0.45)",
        }}
        whileFocus={{
          boxShadow: "10px 10px 41px -1px rgba(0,0,0,0.45)",
        }}
        className={
          "w-full rounded-md border-[1px] border-neutral-200 cursor-pointer group"
        }
        onClick={() => scrollTo("#contact")}
      >
        <div
          className={
            "w-full flex items-center border-b-neutral-200 border-b-[1px] px-4 py-7 group-hover:bg-neutral-100 transition-all ease-in-out duration-300"
          }
        >
          <p className={"text-5xl font-body-bold-family grow"}>
            <span className={"align-text-top text-neutral-500 text-2xl p-0"}>
              {number}.
            </span>
            {title}
          </p>
          <div
            className={
              "rounded-full h-10 p-2  grid place-content-center w-10 group-hover:w-30 group-hover:bg-black group-focus:w-30 group-focus:bg-black overflow-hidden transition-all ease-in-out duration-300"
            }
            style={{
              backgroundColor: color,
            }}
          >
            <p
              className={
                "font-body-family text-sm text-white opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-150 delay-150 text-nowrap"
              }
            >
              Contact Me
            </p>
          </div>
        </div>
        <div className={"w-full px-4 py-5"}>
          <p className={"text-base font-body-family"}>{subtitle}</p>
        </div>
      </motion.div>
    </>
  );
};
