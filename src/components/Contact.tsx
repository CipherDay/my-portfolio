import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import { type FormEvent, useRef, useState } from "react";

export default function Contact() {
  return (
    <>
      <section id={"contact"} className={"w-full"}>
        <div
          className={
            "max-w-7xl px-5 xl:px-0 mx-auto border-t-3 border-gray-200 py-10"
          }
        >
          <p className={"font-body-family text-7xl xl:text-[6.5rem] grow pt-5"}>
            Let’s talk!
          </p>
          <Form />
        </div>
      </section>
    </>
  );
}

const Form = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [company, setCompany] = useState<string>();
  const [websiteS, setWebsiteS] = useState<boolean>(false);
  const [productS, setProductS] = useState<boolean>(false);
  const [mobileS, setMobileS] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const [erroe, setErroe] = useState<boolean>(false);

  const captchRef = useRef<ReCAPTCHA | null>(null);
  const SERVICE_ID = "service_qhaluhl";
  const TEMPLATE_ID = "template_nrv2rs7";
  const PUBLIC_KEY = "ZKoFDM9FHHYXzesqm";
  const SITE_KEY = "6LftCWErAAAAABpeztNFbOvT_QYR3ezKYUwLYdmp";

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const captchaValue = captchRef.current?.getValue();
    if (!name || !email || !company || !message || !captchaValue) {
      setErroe(true);
      return;
    }
    setErroe(false);
    console.log(name, email, company, websiteS, productS, mobileS, message);
    const date = new Date();
    const templetParam: Record<string, unknown> = {
      email: email,
      company: company,
      message: message,
      name: name,
      time: `${date.getUTCDate()}-${date.getUTCMonth() + 1}-${date.getUTCFullYear()} on ${date.getUTCHours() + 1}:${date.getUTCMinutes()} (GMT+1)`,
      service: `${websiteS ? "Website" : ","}${productS ? "Product" : ","}${mobileS ? "Mobile App" : ","}`,
      "g-recaptcha-response": captchaValue,
    };
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templetParam, { publicKey: PUBLIC_KEY })
      .then(
        (result) => {
          console.log(result);
        },
        (reason) => {
          console.log(reason);
        },
      );
  };
  return (
    <form
      onSubmit={formSubmitHandler}
      className={"w-full flex flex-col gap-y-5"}
    >
      <div className={"flex flex-col xl:flex-row gap-5"}>
        <input
          className={
            "w-full py-3  outline-0 border-b-2 border-neutral-400 font-body-family placeholder-neutral-400 focus:border-neutral-900 transition-all ease-in-out duration-300"
          }
          type="text"
          name={"name"}
          placeholder={"What is your name?"}
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={
            "w-full py-3  outline-0 border-b-2 border-neutral-400 font-body-family placeholder-neutral-400 focus:border-neutral-900 transition-all ease-in-out duration-300"
          }
          type="email"
          name={"email"}
          placeholder={"What is your E-mail?"}
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={"flex flex-col xl:flex-row gap-5 items-center"}>
        <input
          className={
            "w-full py-3  outline-0 border-b-2 border-neutral-400 font-body-family placeholder-neutral-400 focus:border-neutral-900 transition-all ease-in-out duration-300"
          }
          type="text"
          name={"company"}
          placeholder={"What is your Company?"}
          required={true}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <div className={"w-full flex flex-col gap-y-1"}>
          <p className={"font-body-family"}>What do you want to get done?</p>
          <div className={"flex gap-x-5"}>
            <input
              className={"w-4"}
              type="checkbox"
              name="website"
              id="website"
              checked={websiteS}
              onChange={(e) => setWebsiteS(e.target.checked)}
            />
            <label htmlFor={"website"}>Website</label>
            <input
              className={"w-4"}
              type="checkbox"
              name="website"
              id="product"
              checked={productS}
              onChange={(e) => setProductS(e.target.checked)}
            />
            <label htmlFor={"product"}>Product</label>
            <input
              className={"w-4"}
              type="checkbox"
              name="website"
              id="mobile"
              checked={mobileS}
              onChange={(e) => setMobileS(e.target.checked)}
            />
            <label htmlFor={"mobile"}>Mobile</label>
          </div>
        </div>
      </div>
      <div className={"w-full"}>
        <textarea
          name="message"
          cols={30}
          rows={5}
          placeholder={"Tell me about your project and budget"}
          className={
            "w-full outline-0 border-b-2 border-neutral-400 font-body-family placeholder-neutral-400 focus:border-neutral-900 transition-all ease-in-out duration-300 resize-none"
          }
          required={true}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <p hidden={!erroe} className={"w-full font-body-family text-red-500"}>
        Please fill all the field in the form
      </p>
      <ReCAPTCHA ref={captchRef} sitekey={SITE_KEY} />

      <motion.button
        initial="reset"
        whileHover="hoverd"
        whileTap="hoverd"
        whileFocus="hoverd"
        className={
          "w-full p-3 bg-white border-2 border-black  overflow-hidden relative cursor-pointer"
        }
      >
        <motion.div
          variants={{
            hoverd: { x: 0 },
            reset: { x: "100%" },
          }}
          transition={{
            easings: "easeInOut",
          }}
          className={"w-full bg-black absolute inset-0 z-1"}
        />
        <motion.p
          variants={{
            hoverd: { color: "#FFFFFF" },
            reset: { color: "#000000" },
          }}
          transition={{
            easings: "easeInOut",
          }}
          className={"font-body-family uppercase z-10 relative"}
        >
          Send
        </motion.p>
      </motion.button>
    </form>
  );
};
