import "./App.css";
import Hero from "./components/Hero.tsx";
import Experience from "./components/Experience.tsx";
import { type LenisRef, ReactLenis } from "lenis/react";
import Clients from "./components/Clients.tsx";
import Work from "./components/Work.tsx";
import Service from "./components/Service.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import { useEffect, useRef } from "react";
import { cancelFrame, frame } from "motion";

function App() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);
  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        easing: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)),
      }}
      ref={lenisRef}
    >
      <Hero />
      <Experience />
      <Clients />
      <Work />
      <Service />
      <Contact />
      <Footer />
    </ReactLenis>
  );
}

export default App;
