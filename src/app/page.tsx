"use client";

import { HalftoneDots } from "@paper-design/shaders-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Gmail } from "@/components/ui/svgs/gmail";
import { Linear } from "@/components/ui/svgs/linear";
import { Notion } from "@/components/ui/svgs/notion";
import { Openai } from "@/components/ui/svgs/openai";
import { Raycast } from "@/components/ui/svgs/raycast";
import { Warp } from "@/components/ui/svgs/warp";
import { X } from "@/components/ui/svgs/x";
import { ZedLogo } from "@/components/ui/svgs/zedLogo";

const infoItems = [
  {
    title: "Choose your own Provider",
    description:
      "No subscription, no account creation, 100% free to use. Just pick any provider that you want.",
    icon: "/model.svg",
    iconAlt: "Provider model icon",
  },
  {
    title: "⌥  + space",
    description:
      "Press the global hotkey ⌥  + space to start/stop the recording.",
    icon: "/globe.svg",
    iconAlt: "Global hotkey icon",
  },
  {
    title: "Stays on device",
    description:
      "All transcriptions and secret keys are stored locally on your device.",
    icon: "/mac.svg",
    iconAlt: "On-device storage icon",
  },
  {
    title: "OpenSource",
    description:
      "Open source and transparent, so you can inspect everything end to end.",
    icon: "/heart.svg",
    iconAlt: "Open source heart icon",
  },
] as const;

const DOWNLOAD_URL =
  "https://github.com/maker-or/openwispher/releases/latest/download/Openwispher-latest.dmg";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const whiteCardRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1280, height: 720 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (
        !heroRef.current ||
        !frameRef.current ||
        !heroTextRef.current ||
        !whiteCardRef.current ||
        !dockRef.current ||
        !tooltipRef.current
      )
        return;

      gsap.set(frameRef.current, { scale: 0.9, transformOrigin: "center" });
      gsap.set(heroTextRef.current, { autoAlpha: 1, y: 0, scale: 1 });
      gsap.set(whiteCardRef.current, { autoAlpha: 0, y: 40, scale: 0.96 });
      gsap.set(dockRef.current, { scale: 1, transformOrigin: "center bottom" });
      gsap.set(tooltipRef.current, { autoAlpha: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=80%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(frameRef.current, {
        scale: 1.112,
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        ease: "none",
        duration: 1,
      })
        .to(
          heroTextRef.current,
          {
            autoAlpha: 0,
            y: -18,
            scale: 0.92,
            ease: "none",
            duration: 0.45,
          },
          0.85,
        )
        .to(
          dockRef.current,
          {
            scale: 0.2,
            ease: "none",
            duration: 1,
          },
          0,
        )
        .to(
          tooltipRef.current,
          {
            autoAlpha: 0,
            ease: "none",
            duration: 0.2,
          },
          1.15,
        )
        .to(
          whiteCardRef.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            ease: "none",
            duration: 0.6,
          },
          1.25,
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        'xattr -cr "/Applications/Openwispher.app"',
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="bg-[#DEEFFF] text-[#2A343E]">
      <section ref={heroRef} className="relative h-[100vh]">
        <div className="sticky top-0 flex h-screen  items-center justify-center relative">
          <div
            ref={frameRef}
            className="relative flex h-[90svh] w-[90svw] bg-[#8AAED0] bg-[url('/opensky.png')] bg-cover bg-center items-center justify-center overflow-hidden rounded-none shadow-[0_30px_80px_rgba(42,52,62,0.25)] z-10"
          >
            <div ref={heroTextRef} className="text-center ">
              <p className="text-3xl">OpenWhisper</p>
              <h1 className="mt-1 font-serif text-7xl leading-tight sm:text-[8em]">
                Just speak
              </h1>
            </div>
            <div
              ref={whiteCardRef}
              className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            >
              <div className="pointer-events-auto w-full h-[100svh] flex flex-col items-center px-6 pt-32">
                <div className="text-center">
                  <h2 className="text-5xl font-medium  font-serif  leading-tight font-stretch-condensed text-[#2A343E]">
                    Your Voice
                    <br />
                    everywhere you type
                  </h2>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-[#2A343E] sm:gap-10">
                  <div className="h-7 w-7 sm:h-8 sm:w-8">
                    <Warp className="h-full w-full" />
                  </div>
                  <div className="h-7 w-7 sm:h-8 sm:w-8">
                    <ZedLogo className="h-full w-full" />
                  </div>
                  <div className="h-7 w-7 sm:h-8 sm:w-8">
                    <Openai className="h-full w-full" />
                  </div>
                  <div className="h-7 w-7 sm:h-8 sm:w-8">
                    <Gmail className="h-full w-full" />
                  </div>
                  <div className="h-7 w-7 sm:h-8 sm:w-8">
                    <Notion className="h-full w-full" />
                  </div>
                  <div className="h-7 w-7 sm:h-8 sm:w-8">
                    <X className="h-full w-full" />
                  </div>
                  <div className="h-7 w-7 sm:h-8 sm:w-8">
                    <Raycast className="h-full w-full" />
                  </div>
                  <div className="h-7 w-7 sm:h-8 sm:w-8">
                    <Linear className="h-full w-full" />
                  </div>
                </div>

                <div className="relative mt-8 flex-1 w-full max-w-5xl">
                  <div className="relative h-full w-full overflow-hidden rounded-t-3xl border-x-4 border-t-4 border-black">
                    <Image
                      src="/macbag.png"
                      alt="Macbook screen"
                      fill
                      priority
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute left-1/2 top-0 flex h-12 w-52 -translate-x-1/2 items-center justify-center gap-3 rounded-b-[24px] bg-black px-6 sm:h-14 sm:w-64">
                      <svg
                        className="h-5 w-5 flex-shrink-0"
                        viewBox="0 0 17 17"
                        fill="true"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Done</title>
                        <rect width="5.39936" height="5.39936" fill="#4B994D" />
                        <rect
                          width="5.39936"
                          height="5.39936"
                          transform="translate(5.39844)"
                          fill="#77BF78"
                        />
                        <rect
                          width="5.39936"
                          height="5.39936"
                          transform="translate(10.7969)"
                          fill="#4B994D"
                        />
                        <rect
                          width="5.39936"
                          height="5.39936"
                          transform="translate(0 5.39844)"
                          fill="#77BF78"
                        />
                        <rect
                          width="5.39936"
                          height="5.39936"
                          transform="translate(5.39844 5.39844)"
                          fill="#4B994D"
                        />
                        <rect
                          width="5.39936"
                          height="5.39936"
                          transform="translate(10.7969 5.39844)"
                          fill="#77BF78"
                        />
                        <rect
                          width="5.39936"
                          height="5.39936"
                          transform="translate(0 10.7969)"
                          fill="#4B994D"
                        />
                        <rect
                          width="5.39936"
                          height="5.39936"
                          transform="translate(5.39844 10.7969)"
                          fill="#77BF78"
                        />
                        <rect
                          width="5.39936"
                          height="5.39936"
                          transform="translate(10.7969 10.7969)"
                          fill="#4B994D"
                        />
                      </svg>
                      <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#77BF78]">
                        Done
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={dockRef}
              className="absolute bottom-5 left-1/2 w-[220px] -translate-x-1/2 sm:w-[260px]"
            >
              <div className="relative">
                <Image
                  src="/dock.png"
                  alt="OpenWhisper dock"
                  width={260}
                  height={60}
                  className="h-auto w-full"
                  priority
                />
                <a
                  href={DOWNLOAD_URL}
                  download
                  className="absolute left-[34%] top-[8%] h-[84%] w-[22%] cursor-pointer rounded-xl transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Download OpenWhisper"
                >
                  <span className="sr-only">Download OpenWhisper</span>
                </a>
                <div
                  ref={tooltipRef}
                  className="pointer-events-none absolute -top-14 left-[45%] z-50 -translate-x-1/2 whitespace-nowrap rounded-lg bg-black/90 px-4 py-2 text-sm font-medium text-white shadow-xl"
                >
                  Download OpenWhisper
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-black/90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen min-h-screen bg-[#DEEFFF] px-6 py-20 sm:px-12 sm:py-32 relative overflow-hidden flex items-center justify-center">
        <div className="mx-auto max-w-7xl relative z-10 w-full">
          <h2 className="mb-16 text-center font-serif text-6xl sm:text-7xl lg:text-8xl text-[#2A343E]">
            Installation
          </h2>
          <div className="grid gap-6 md:grid-cols-3 md:gap-5">
            {/* Step 1 - Download */}
            <div className="flex flex-col bg-[#8AAED0] p-8 min-h-[420px] sm:min-h-[480px]">
              <h3 className="text-xl sm:text-2xl font-medium text-[#2A343E]/90 leading-tight">
                Download the application
              </h3>
              <div className="flex-1 flex items-center justify-center">
                <a
                  href={DOWNLOAD_URL}
                  download
                  className="flex items-center gap-4 bg-white hover:bg-white/95 transition-all rounded-full px-10 py-5 shadow-lg hover:shadow-xl hover:scale-105"
                  aria-label="Download Openwispher"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#2A343E]"
                    aria-hidden="true"
                  >
                    <title>Apple Logo</title>
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="text-xl font-medium text-[#2A343E]">
                    Download
                  </span>
                </a>
              </div>
            </div>

            {/* Step 2 - Drag and Drop */}
            <div className="flex flex-col bg-[#8AAED0] p-8 min-h-[420px] sm:min-h-[480px]">
              <h3 className="text-xl sm:text-2xl font-medium text-[#2A343E]/90 leading-tight">
                Drag and drop the openwispher into application
              </h3>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative w-full flex items-center justify-center">
                  <Image
                    src="/inta.png"
                    alt="Drag Openwispher to Applications folder"
                    width={280}
                    height={140}
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-white/70 mt-4 font-medium">
                  application
                </p>
              </div>
            </div>

            {/* Step 3 - Run Command */}
            <div className="flex flex-col bg-[#8AAED0] p-8 min-h-[420px] sm:min-h-[480px]">
              <h3 className="text-xl sm:text-2xl font-medium text-[#2A343E]/90 leading-tight">
                Run the following command in the terminal
              </h3>
              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                <div className="w-full border-2 border-dashed border-white/60 rounded-lg p-5 bg-white/10">
                  <code className="font-mono text-sm text-[#2A343E] break-all">
                    xattr -cr &quot;/Applications/Openwispher.app&quot;
                  </code>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-[#2A343E] hover:text-[#2A343E]/70 transition-colors"
                >
                  {copied ? (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <title>Checkmark</title>
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="#22c55e"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <title>Copy Icon</title>
                        <rect x="9" y="9" width="13" height="13" rx="2" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                      <span className="font-medium">copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full text-[#2A343E]">
        <div className="w-full relative z-10">
          {infoItems.map((item) => (
            <article
              key={item.title}
              className="h-svh w-full px-3 py-3 sm:px-5 sm:py-5"
            >
              <div className="grid h-full w-full grid-rows-[12%_88%] gap-3 sm:gap-4">
                <div className="flex items-end">
                  <h3 className="font-serif text-3xl leading-none  sm:text-5xl">
                    {item.title}
                  </h3>
                </div>
                <div className="grid h-full gap-3 md:grid-cols-[3fr_1fr] md:gap-4">
                  <div className="relative h-full w-full overflow-hidden bg-[#8EB1D2]">
                    <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-10 md:p-14">
                      <Image
                        src={item.icon}
                        alt={item.iconAlt}
                        width={360}
                        height={360}
                        className="h-auto w-auto max-h-full max-w-full object-contain"
                        style={{ imageRendering: "pixelated" }}
                      />
                    </div>
                  </div>
                  <div className="flex items-end md:pb-3">
                    <p className="max-w-[20ch] text-2xl leading-[1.03]  ">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
