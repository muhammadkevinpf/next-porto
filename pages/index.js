import Head from "next/head";
import Logo192 from "@images/icon/logo-192.png";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Kevin's Portfolio</title>
        <link rel="icon" href={Logo192} />
        <link rel="apple-touch-icon" href={Logo192} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Slightly introduction from Kevin" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
