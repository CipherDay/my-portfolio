import { useLenis } from "lenis/react";
import type { MouseEventHandler } from "react";

export default function Footer() {
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
      <footer className={"w-full py-20"}>
        <section
          className={
            "w-full max-w-7xl px-5 xl:px-0 mx-auto border-t-3 pt-20 border-gray-200"
          }
        >
          <div className={"flex flex-col gap-5 sm:flex-row  w-full"}>
            <div className={"grow flex flex-col w-full gap-4"}>
              <p
                className={
                  "font-body-bold-family text-lg md:text-3xl text-gray-500"
                }
              >
                Let’s work together
              </p>
              <a
                className={
                  "font-body-bold-family text-xl md:text-2xl xl:text-4xl "
                }
                href={
                  "mailto:abdarrahim.abdallah@gmail.com?subject=Let's%20Work"
                }
              >
                abdarrahim.abdallah@gmail.com
              </a>
            </div>
            <div className={"grow-0 flex w-1/2 justify-end-safe gap-10"}>
              <div className={"flex flex-col gap-3"}>
                <p className={"text-gray-500 font-body-family"}>Explore</p>
                <FooterLink callBack={() => scrollTo("#home")}>Home</FooterLink>
                <FooterLink callBack={() => scrollTo("#work")}>Work</FooterLink>
                <FooterLink callBack={() => scrollTo("#experience")}>
                  Experience
                </FooterLink>
                <FooterLink callBack={() => scrollTo("#service")}>
                  Services
                </FooterLink>
                <FooterLink callBack={() => scrollTo("#contact")}>
                  Contact
                </FooterLink>
              </div>
              <div className={"flex flex-col gap-3"}>
                <p className={"text-gray-500 font-body-family"}>Socials</p>
                <FooterLink url={"https://github.com/cipherDay/"}>
                  Github
                </FooterLink>
                <FooterLink url={"https://instagram.com/Cipher_day/"}>
                  Instagram
                </FooterLink>
                <FooterLink
                  url={
                    "https://www.linkedin.com/in/abderrahim-abdallah-152283371/"
                  }
                >
                  Linkedin
                </FooterLink>
                <FooterLink
                  url={
                    "https://www.upwork.com/freelancers/~01e0d26777b847201a?mp_source=share"
                  }
                >
                  Upwork
                </FooterLink>
                <FooterLink
                  url={
                    "https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/abderrahim-abdallah/492607f5-42b3-4d82-9154-261231e873c7?view=html"
                  }
                >
                  CV
                </FooterLink>
              </div>
            </div>
          </div>
        </section>
        <p
          className={"font-body-bold-family text-sm text-gray-400 text-center"}
        >
          &copy;{new Date().getUTCFullYear()} ZeroDay
        </p>
      </footer>
    </>
  );
}

const FooterLink = ({
  children,
  callBack,
  url,
}: {
  children: string;
  callBack?: MouseEventHandler<HTMLAnchorElement>;
  url?: string;
}) => {
  return (
    <a
      href={url}
      className={
        "font-body-family cursor-pointer hover:text-gray-600 transition-colors ease-in-out duration-200"
      }
      onClick={callBack}
    >
      {children}
    </a>
  );
};
