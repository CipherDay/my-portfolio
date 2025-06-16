import { motion } from "motion/react";

export default function Work() {
  return (
    <>
      <section id={"work"} className={"w-full min-h-screen"}>
        <div
          className={
            "max-w-7xl px-5 xl:px-0 mx-auto border-t-3 border-gray-200"
          }
        >
          <div className={"w-full flex items-baseline py-5"}>
            <p className={"font-body-family text-7xl xl:text-[6.5rem] grow"}>
              Work
            </p>
            <motion.div
              whileHover="hoverd"
              initial="reset"
              className={"overflow-hidden"}
            >
              <div
                className={
                  "font-body-bold-family text-3xl xl:text-5xl uppercase py-2"
                }
              >
                <FlipLink href={"https://github.com/cipherDay/"}>all</FlipLink>
              </div>
            </motion.div>
          </div>
          <div className={"fex flex-col w-full gap-10"}>
            <div className={"flex flex-col xl:flex-row w-full gap-x-20"}>
              <ProjectCard
                title={"Hivemind"}
                subtitle={"A new way to connect your service."}
                imgSrc={"/humbs/HAPI.jpg"}
                link={"https://github.com/CipherDay/hivemindAPI"}
              />
              <ProjectCard
                title={"NOVAK"}
                subtitle={"An award winning anti-spam ai."}
                imgSrc={"/humbs/NOVAKP.jpg"}
                link={"https://github.com/CipherDay/NOVAK_CE"}
              />
            </div>
          </div>
          <div className={"flex flex-col xl:flex-row w-full gap-x-20"}>
            <ProjectCard
              title={"ProdTrack"}
              subtitle={
                "A software for stores to keep track of installment and defect product."
              }
              imgSrc={"/humbs/ProdTrack.jpg"}
              link={"https://github.com/CipherDay/ProdTrack"}
            />
            <ProjectCard
              title={"Simple House Easy Life"}
              subtitle={"A real estate mobile app."}
              imgSrc={"/humbs/SHEL.jpg"}
              link={"https://github.com/CipherDay/SHEL_Prototype"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
const DURATION = 0.25;
const STAGGER = 0.05;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap font-body-family  font-black uppercase"
      style={{
        lineHeight: 0.8,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const ProjectCard = ({
  title,
  subtitle,
  imgSrc,
  link,
}: {
  title: string;
  subtitle: string;
  imgSrc: string;
  link: string;
}) => {
  const hoverAnimation = {
    initial: {
      backgroundSize: "100%",
    },
    animate: {
      backgroundSize: "110%",
    },
  };

  return (
    <motion.a
      href={link}
      initial={"initial"}
      whileHover={"animate"}
      target={"_blank"}
      className={"w-full flex flex-col gap-y-2 pb-10 cursor-pointer"}
    >
      <motion.div
        variants={hoverAnimation}
        className={
          "bg-neutral-400 w-full h-auto rounded-xl aspect-square overflow-hidden"
        }
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></motion.div>
      <p className={"font-body-bold-family xl:text-2xl"}>{title}</p>
      <p className={"font-body-family text-gray-700 text-sm xl:text-base"}>
        {subtitle}
      </p>
    </motion.a>
  );
};
