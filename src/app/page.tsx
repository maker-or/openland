"use client";

import { HalftoneDots } from "@paper-design/shaders-react";
import Image from "next/image";
import posthog from "posthog-js";
import { useState } from "react";

const DOWNLOAD_URL =
  "https://github.com/maker-or/openwispher/releases/latest/download/Openwispher-latest.dmg";

function handleDownloadClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  eventName: "download_click_hero" | "download_click_installation",
) {
  console.log("[PostHog] Capturing event:", eventName);

  if (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  ) {
    posthog.capture(eventName, { url: DOWNLOAD_URL });
    return;
  }

  event.preventDefault();

  posthog.capture(eventName, { url: DOWNLOAD_URL });

  window.setTimeout(() => {
    window.location.href = DOWNLOAD_URL;
  }, 300);
}

export default function Home() {
  const [downloadStarted, setDownloadStarted] = useState(false);

  return (
    <main className="flex flex-col   bg-[#DEEFFF] text-[#2A343E] min-h-svh w-svw">
      <div className="flex items-center justify-center min-h-svh w-svw">
        <section className="relative h-[95svh] w-[95svw] overflow-hidden flex items-center justify-center text-center">
          {/*Hero section*/}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <HalftoneDots
              contrast={0.4}
              originalColors={false}
              inverted={false}
              grid="hex"
              radius={1.25}
              size={0.5}
              scale={1}
              grainMixer={0.2}
              grainOverlay={0.2}
              grainSize={0.5}
              type="gooey"
              fit="cover"
              colorFront="#2B2B2B"
              colorBack="#00000000"
              style={{
                backgroundImage:
                  "linear-gradient(in oklab 180deg, oklab(19% -0.004 -0.010) 0%, oklab(27.8% -0.022 -0.034) 100%)",
                width: "100%",
                height: "100%",
                display: "block",
              }}
            />
          </div>
          <div className="relative flex-col z-10 flex w-full h-full items-center justify-center text-center">
            <p className="text-[#D6E4EE] text-3xl font-squarepixel">
              OpenWispher
            </p>
            <h1 className="text-8xl text-[#D6E4EE] font-serif">Just speak</h1>
          </div>
          <a
            href={DOWNLOAD_URL}
            onClick={(event) => {
              setDownloadStarted(true);
              window.setTimeout(() => setDownloadStarted(false), 2000);
              handleDownloadClick(event, "download_click_hero");
            }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
            aria-label="Download OpenWispher"
          >
            <div className="relative mb-2">
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 z-0"></div>
              <span className="relative z-10 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg block">
                {downloadStarted ? "Download started" : "Download openwispher"}
              </span>
            </div>
            <Image
              src="/dock.png"
              alt="OpenWispher dock icon"
              width={150}
              height={50}
              className="w-auto h-auto"
            />
          </a>
        </section>
      </div>

      <StepsSection />

      <section className="relative min-h-svh w-svw overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <HalftoneDots
            contrast={0.4}
            originalColors={false}
            inverted={false}
            grid="hex"
            radius={1.25}
            size={0.5}
            scale={1}
            grainMixer={0.2}
            grainOverlay={0.2}
            grainSize={0.5}
            type="gooey"
            fit="cover"
            colorFront="#2B2B2B"
            colorBack="#00000000"
            style={{
              backgroundImage:
                "linear-gradient(in oklab 180deg, oklab(19% -0.004 -0.010) 0%, oklab(27.8% -0.022 -0.034) 100%)",
              width: "100%",
              height: "100%",
              display: "block",
            }}
          />
        </div>

        {/* First content block - Type 5x faster */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 min-h-svh">
          <h2 className="text-5xl md:text-7xl text-[#8EB1D2] font-serif max-w-4xl leading-tight text-center">
            Type 5x faster everywhere you write.
          </h2>
          <Image
            src="/app.webp"
            alt="OpenWispher app interface showing supported applications"
            width={800}
            height={600}
          />
        </div>

        {/* Grid with 4 rows - continuing the same section */}
      </section>

      <FeaturesSection />

      <FooterSection />
    </main>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: "/globe.svg",
      description:
        "Press the global hotkey ⌥ +space to start/stop the recording",
    },
    {
      icon: "/model.svg",
      description:
        "No subscription, no account creation, 100% free to use. Just pick any provider that you want.",
    },
    {
      icon: "/mac.svg",
      description:
        "All the transcriptions and secret keys will be stored locally on device",
    },
    {
      icon: "/heart.svg",
      description:
        "Openwispher is free and open source. You can contribute to the project on GitHub.",
    },
  ];

  return (
    <section className="relative min-h-svh w-svw overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HalftoneDots
          contrast={0.4}
          originalColors={false}
          inverted={false}
          grid="hex"
          radius={1.25}
          size={0.5}
          scale={1}
          grainMixer={0.2}
          grainOverlay={0.2}
          grainSize={0.5}
          type="gooey"
          fit="cover"
          colorFront="#2B2B2B"
          colorBack="#00000000"
          style={{
            backgroundImage:
              "linear-gradient(in oklab 0deg, oklab(19% -0.004 -0.010) 0%, oklab(27.8% -0.022 -0.034) 100%)",
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-svh px-8 py-16">
        <h2 className="text-6xl md:text-8xl text-[#D6E4EE] font-serif mb-16">
          openwispher
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {features.map((feature) => (
            <div
              key={feature.icon}
              className="flex flex-col items-center gap-6"
            >
              <div className="bg-[#8EB1D2] w-full aspect-square flex items-center justify-center p-12">
                <Image
                  src={feature.icon}
                  alt=""
                  width={160}
                  height={160}
                  className="w-40 h-40 object-contain"
                />
              </div>
              <p className="text-[#D6E4EE] text-lg leading-relaxed text-left w-full">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  const [copied, setCopied] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

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
    <section className="w-[95svw] font-squarepixel p-4 min-h-svh  mx-auto">
      <h1 className="text-4xl ">Installation</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full w-full">
        {/* Step 1: Download */}
        <div className="relative overflow-hidden h-full w-full p-12 flex flex-col items-start justify-start">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <HalftoneDots
              contrast={0.4}
              originalColors={false}
              inverted={false}
              grid="hex"
              radius={1.1}
              size={0.55}
              scale={1}
              grainMixer={0.2}
              grainOverlay={0.2}
              grainSize={0.6}
              type="gooey"
              fit="cover"
              colorFront="#2B2B2B"
              colorBack="#00000000"
              style={{
                backgroundImage:
                  "linear-gradient(in oklab 180deg, oklab(19% -0.004 -0.010) 0%, oklab(27.8% -0.022 -0.034) 100%)",
                width: "100%",
                height: "100%",
                display: "block",
              }}
            />
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <h2 className="text-6xl font-light text-white/90 mb-2">01</h2>
              <p className="text-2xl text-white/90">Download the app</p>
            </div>
            <a
              href={DOWNLOAD_URL}
              onClick={(event) => {
                setDownloadStarted(true);
                window.setTimeout(() => setDownloadStarted(false), 2000);
                handleDownloadClick(event, "download_click_installation");
              }}
              className="bg-[#D6E4EE] hover:bg-[#C5D9E8] transition-all duration-200 text-[#2A343E] px-12 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl inline-block text-center"
              aria-label="Download OpenWispher application"
            >
              {downloadStarted ? "Download started" : "Download"}
            </a>
          </div>
        </div>

        {/* Step 2: Drag and Drop */}
        <div className="relative overflow-hidden h-full w-full p-12 flex flex-col items-start justify-start">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <HalftoneDots
              contrast={0.4}
              originalColors={false}
              inverted={false}
              grid="hex"
              radius={1.1}
              size={0.55}
              scale={1}
              grainMixer={0.2}
              grainOverlay={0.2}
              grainSize={0.6}
              type="gooey"
              fit="cover"
              colorFront="#2B2B2B"
              colorBack="#00000000"
              style={{
                backgroundImage:
                  "linear-gradient(in oklab 180deg, oklab(19% -0.004 -0.010) 0%, oklab(27.8% -0.022 -0.034) 100%)",
                width: "100%",
                height: "100%",
                display: "block",
              }}
            />
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <h2 className="text-6xl font-light text-white/90 mb-2">02</h2>
              <p className="text-2xl text-white/90">
                Drag and Drop the openwispher
                <br />
                into applications
              </p>
            </div>
            <div className="flex items-center justify-center gap-8 w-full">
              <Image
                src="/installation.png"
                alt="OpenWispher app icon"
                width={380}
                height={380}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Step 3: Run Command */}
        <div className="relative overflow-hidden h-full w-full p-12 flex flex-col items-start justify-start">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <HalftoneDots
              contrast={0.4}
              originalColors={false}
              inverted={false}
              grid="hex"
              radius={1.1}
              size={0.55}
              scale={1}
              grainMixer={0.2}
              grainOverlay={0.2}
              grainSize={0.6}
              type="gooey"
              fit="cover"
              colorFront="#2B2B2B"
              colorBack="#00000000"
              style={{
                backgroundImage:
                  "linear-gradient(in oklab 180deg, oklab(19% -0.004 -0.010) 0%, oklab(27.8% -0.022 -0.034) 100%)",
                width: "100%",
                height: "100%",
                display: "block",
              }}
            />
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between w-full">
            <div>
              <h2 className="text-6xl font-light text-white/90 mb-2">03</h2>
              <p className="text-2xl text-white/90">
                Run the command in the terminal
              </p>
            </div>
            <div className="flex gap-2 w-full">
              <div className="flex-1 bg-[#D6E4EE] px-6 py-4  font-mono text-sm text-[#2A343E] flex items-center">
                xattr -cr "/Applications/Openwispher.app"
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="bg-[#D6E4EE] hover:bg-[#C5D9E8] transition-all duration-200 px-6 py-4  flex items-center justify-center min-w-[60px]"
                aria-label={
                  copied ? "Copied to clipboard" : "Copy command to clipboard"
                }
              >
                {copied ? (
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-[#2A343E]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Step 4: Open App */}
        <div className="relative overflow-hidden h-full w-full p-12 flex flex-col items-start justify-start">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <HalftoneDots
              contrast={0.4}
              originalColors={false}
              inverted={false}
              grid="hex"
              radius={1.1}
              size={0.55}
              scale={1}
              grainMixer={0.2}
              grainOverlay={0.2}
              grainSize={0.6}
              type="gooey"
              fit="cover"
              colorFront="#2B2B2B"
              colorBack="#00000000"
              style={{
                backgroundImage:
                  "linear-gradient(in oklab 180deg, oklab(19% -0.004 -0.010) 0%, oklab(27.8% -0.022 -0.034) 100%)",
                width: "100%",
                height: "100%",
                display: "block",
              }}
            />
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between items-center w-full">
            <div className="w-full">
              <h2 className="text-6xl font-light text-white/90 mb-2">04</h2>
              <p className="text-2xl text-white/90">
                Double click openwispher in the
                <br />
                applications to open the app
              </p>
            </div>
            <Image
              src="/logo.png"
              alt="OpenWispher application icon"
              width={150}
              height={150}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  const socialLinks = [
    {
      name: "Github",
      url: "https://github.com/maker-or/openwispher",
    },
    {
      name: "Discord",
      url: "https://discord.gg/UURszKH5",
    },
    {
      name: "x",
      url: "https://x.com/pasupuleti73628",
    },
  ];

  return (
    <section className="relative min-h-[50svh] w-svw overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HalftoneDots
          contrast={0.4}
          originalColors={false}
          inverted={false}
          grid="hex"
          radius={1.25}
          size={0.5}
          scale={1}
          grainMixer={0.2}
          grainOverlay={0.2}
          grainSize={0.5}
          type="gooey"
          fit="cover"
          colorFront="#2B2B2B"
          colorBack="#00000000"
          style={{
            backgroundImage:
              "linear-gradient(in oklab 180deg, oklab(19% -0.004 -0.010) 0%, oklab(27.8% -0.022 -0.034) 100%)",
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-start justify-center min-h-[50svh] px-12">
        <h2 className="text-6xl md:text-8xl text-[#D6E4EE] font-serif mb-8">
          Openwispher
        </h2>
        <div className="flex flex-col gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D6E4EE] text-2xl hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}

          <iframe
            src="https://github.com/sponsors/maker-or/button"
            title="Sponsor maker-or"
            height="32"
            width="114"
            style={{ border: 0, borderRadius: 6 }}
          />
        </div>
      </div>
    </section>
  );
}
