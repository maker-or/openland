/** @paper-design/shaders-react@0.0.71 */
import { GodRays, HalftoneDots } from "@paper-design/shaders-react";

export default function () {
  return (
    <div
      style={{
        boxSizing: "border-box",
        fontSynthesis: "none",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
      }}
    >
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
          height: "686px",
          left: 0,
          position: "absolute",
          top: 0,
          width: "1138px",
        }}
      />
      <GodRays
        offsetX={0.2}
        offsetY={-0.8}
        intensity={0.79}
        spotty={0.25}
        midSize={0.1}
        midIntensity={0.75}
        density={0.41}
        bloom={1}
        speed={0.5}
        scale={1}
        frame={5441.625000004475}
        colorBack="#00000000"
        colors={["#FFFFFF1F", "#FFFFFF3D", "#FFFFFF29"]}
        colorBloom="#EEEEEE"
        style={{
          backgroundColor: "#000000",
          height: "686px",
          left: 0,
          opacity: "10%",
          position: "absolute",
          top: 0,
          width: "1138px",
        }}
      />
      <div
        style={{
          boxSizing: "border-box",
          color: "#D5E4EE",
          fontFamily: "system-ui, sans-serif",
          fontSize: "187px",
          height: "fit-content",
          left: 0,
          lineHeight: "226px",
          position: "absolute",
          top: 0,
          translate: "91px 460px",
          width: "fit-content",
        }}
      >
        openwispher
      </div>
    </div>
  );
}
