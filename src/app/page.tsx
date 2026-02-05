"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Gmail } from "@/components/ui/svgs/gmail";
import { Linear } from "@/components/ui/svgs/linear";
import { Notion } from "@/components/ui/svgs/notion";
import { Openai } from "@/components/ui/svgs/openai";
import { Raycast } from "@/components/ui/svgs/raycast";
import { Warp } from "@/components/ui/svgs/warp";
import { X } from "@/components/ui/svgs/x";
import { ZedLogo } from "@/components/ui/svgs/zedLogo";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const whiteCardRef = useRef<HTMLDivElement | null>(null);
  const dockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (
        !heroRef.current ||
        !frameRef.current ||
        !heroTextRef.current ||
        !whiteCardRef.current ||
        !dockRef.current
      )
        return;

      gsap.set(frameRef.current, { scale: 0.8, transformOrigin: "center" });
      gsap.set(heroTextRef.current, { autoAlpha: 1, y: 0, scale: 1 });
      gsap.set(whiteCardRef.current, { autoAlpha: 0, y: 40, scale: 0.96 });
      gsap.set(dockRef.current, { scale: 1, transformOrigin: "center bottom" });

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
        scale: 1,
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
            scale: 0.5,
            ease: "none",
            duration: 0.3,
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

  return (
    <div className="bg-[#DEEFFF] text-[#2A343E]">
      <section ref={heroRef} className="relative h-[100vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <div
            ref={frameRef}
            className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-none bg-[url('/opensky.png')] bg-cover bg-center shadow-[0_30px_80px_rgba(42,52,62,0.25)]"
          >
            <div ref={heroTextRef} className="text-center">
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
              <div>
                <img
                  src="/dock.png"
                  alt="OpenWhisper dock"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
