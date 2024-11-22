import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import About from "./About/about";
import Contact from "./Contact/Contact";
export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Contact/>
    </main>
  )
}
