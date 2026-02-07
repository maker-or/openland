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
  "https://github.com/maker-or/openwispher/releases/latest/download/Dhavnii-latest.dmg";

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
      <section className="w-screen h-screen bg-[#161616] px-6 py-20 sm:px-12 sm:py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <HalftoneDots
            width={dimensions.width}
            height={dimensions.height}
            colorBack="#8EB1D2"
            colorFront="#ffffff"
            originalColors={false}
            type="gooey"
            grid="hex"
            inverted={false}
            size={0.5}
            radius={1.25}
            contrast={0.4}
            grainMixer={0.2}
            grainOverlay={0.2}
            grainSize={0.5}
            fit="cover"
          />
        </div>
        <div className="mx-auto max-w-7xl relative z-10 h-full flex flex-col justify-center">
          <h2 className="mb-20 text-center font-serif text-5xl text-white sm:text-6xl lg:text-7xl">
            Installation
          </h2>
          <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {/* Step 1 - Download */}
            <div className="flex flex-col bg-[#DEEFFF]   p-8 min-h-[500px]">
              <h3 className="text-2xl sm:text-3xl font-medium text-[#2A343E] mb-6">
                Download the application
              </h3>
              <div className="flex-1 flex items-center justify-center mb-8">
                <a
                  href={DOWNLOAD_URL}
                  download
                  className="flex items-center gap-4 bg-white/90 hover:bg-white transition-colors rounded-full px-8 py-4 shadow-lg hover:shadow-xl"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17.25 10.25C17.25 10.25 17.92 6.32 14.36 3.54C12.01 1.73 8.91 2.17 7.38 3.01C5.88 3.84 3.82 5.65 3.67 9.08C3.52 12.47 5.31 14.05 6.44 14.86"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 11V21M12 21L9 18M12 21L15 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-lg font-semibold text-[#2A343E]">
                    Download
                  </span>
                </a>
              </div>
            </div>

            {/* Step 2 - Drag and Drop */}
            <div className="flex flex-col bg-[#DEEFFF]   p-8 min-h-[500px]">
              <h3 className="text-2xl sm:text-3xl font-medium text-[#2A343E] mb-6">
                Drag and drop the openwispher into application
              </h3>
              <div className="flex-1 flex items-center justify-center">
                <div className="flex items-center gap-6">
                  {/* App Icon */}
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    className="drop-shadow-xl"
                  >
                    <g clipPath="url(#clip0_app)">
                      <path
                        d="M34.8519 0H81.3671H85.4943C87.4437 0.558055 90.9934 0.330053 93.1668 0.615135C99.0176 1.3826 104.452 3.32549 108.998 7.19554C115.744 12.8699 119.086 20.3489 119.593 29.0681C119.661 30.2377 119.666 33.0326 120 34.0341V85.8451C119.616 87.0047 119.508 91.5156 119.36 93.0659C117.887 108.541 104.807 119.589 89.4285 119.66C88.693 119.718 87.05 119.793 86.4158 120H44.8528H32.6314C31.6706 119.712 29.0443 119.593 27.8767 119.453C23.8977 118.973 20.2523 118.133 16.6277 116.375C13.5363 114.876 11.7307 113.419 9.32695 111.122C4.05974 106.089 1.53188 100.117 0.636251 92.9563C0.351425 90.6791 0.414284 88.033 0.0345775 85.8004C0.0230516 85.7709 0.0115258 85.7415 0 85.7121V85.4419V34.4732C0.418264 33.898 0.386564 28.8682 0.532501 27.8128C0.665815 26.8488 0.834868 25.5561 1.01376 24.5364C1.48505 21.8399 2.32324 19.2207 3.50502 16.7516C7.97794 7.46957 17.1415 1.59527 27.2174 0.63341C28.8313 0.479343 33.7137 0.443372 34.8519 0Z"
                        fill="#83EEFD"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_app">
                        <rect width="120" height="120" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  {/* Arrow */}
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <path
                      d="M10 50 Q30 20, 50 50 T90 50"
                      stroke="#2A343E"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M75 35 L90 50 L75 65"
                      stroke="#2A343E"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Applications Folder */}
                  <svg width="120" height="120" viewBox="0 0 192 192">
                    <rect
                      width="192"
                      height="192"
                      fill="url(#pattern0_folder)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_folder"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <rect width="192" height="192" fill="#5B9FD8" />
                      </pattern>
                    </defs>
                    <text
                      x="96"
                      y="120"
                      fontSize="48"
                      fill="white"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      App
                    </text>
                  </svg>
                </div>
              </div>
              <p className="text-center text-sm text-[#2A343E]/70 mt-4">
                application
              </p>
            </div>

            {/* Step 3 - Run Command */}
            <div className="flex flex-col bg-[#DEEFFF]   p-8 min-h-[500px]">
              <h3 className="text-2xl sm:text-3xl font-medium text-[#2A343E] mb-6">
                Run the following command in the terminal
              </h3>
              <div className="flex-1 flex flex-col items-center justify-center gap-6">
                <div className="w-full bg-[#2A343E] rounded-xl p-6 font-mono text-sm text-white break-all">
                  xattr -cr &quot;/Applications/Openwispher.app&quot;
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-3 bg-white hover:bg-white/90 transition-all px-6 py-3 rounded-full shadow-lg hover:shadow-xl"
                >
                  {copied ? (
                    <>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="#22c55e"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-semibold text-green-500">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      <span className="font-semibold text-[#2A343E]">copy</span>
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
