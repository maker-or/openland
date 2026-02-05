# Scroll Animation Implementation Guide

This document describes in precise technical terms how to reproduce the scroll animation effect using Next.js, Tailwind CSS, and GSAP ScrollTrigger. It is written as an instruction manual for an autonomous coding agent.

---

## 1. Goal

Implement a scroll-driven animation system that matches the following behavior:

* Full screen stacked feature sections
* Each section pins to the viewport during scroll
* Images move vertically inside their containers (parallax)
* Text content fades and slides in on section entry
* Smooth performance at 60fps
* Works inside a Next.js + Tailwind environment

No canvas rendering, WebGL, or external scroll libraries should be used.

---


## 3. Project File Structure

The following structure should be used:

```
/components
  ScrollContainer.tsx
  ScrollPanel.tsx
/hooks
  useGSAP.ts
/public
  model.svg
  globe.svg
  mac.svg
  heart.svg
/styles
  globals.css
```

All animation logic must live inside React components using refs.

---

## 4. Component Architecture

### 4.1 ScrollContainer Component

A simple wrapper component that renders all panels sequentially.

Responsibilities:

* Provide a root container for scroll panels
* Avoid adding extra layout constraints

### 4.2 ScrollPanel Component

This component implements the core animation behavior.

Each panel must contain:

* A full viewport section
* An image container with overflow hidden
* An oversized image for parallax motion
* A text content block

Required React refs:

* panelRef – root section
* imageRef – parallax image
* contentRef – text container

---

## 5. DOM Structure Requirements

Each panel must follow this hierarchy exactly:

```
<section class="panel">
  <div class="panel-inner">

    <div class="image-container">
      <img class="panel-image" />
    </div>

    <div class="content">
      <h2></h2>
      <p></p>
    </div>

  </div>
</section>
```

Do not deviate from this structure as the animations depend on it.

---

## 6. Tailwind Layout Rules

The following layout constraints are mandatory:

* Each section must be exactly 100vh tall
* Overflow must be hidden on the section
* Image container must be smaller than the image
* The image must be larger than its frame to allow movement

Example Tailwind classes:

* section: `h-screen w-full overflow-hidden relative`
* image container: `h-[80vh] overflow-hidden relative`
* image: `h-[120%] absolute top-[-10%]`

---

## 7. GSAP Animation Logic

Three animations are required per panel.

### 7.1 Pinning the Section

Each panel must be pinned while active:

* Start when top of panel hits top of viewport
* Remain pinned for one viewport height
* Release when animation completes

### 7.2 Parallax Image Motion

The inner image must translate vertically as the user scrolls.

Behavior:

* Image moves upward while scrolling down
* Movement is scrubbed to scroll position
* No easing
* Transform only (no layout properties)

### 7.3 Text Reveal

Content animation:

* Trigger when section enters viewport
* Fade in from opacity 0
* Slide upward slightly
* Play once per section entry

---

## 8. Next.js Integration Rules

Animations must only run on the client.

Requirements:

* Use "use client" directive in animated components
* Register ScrollTrigger inside useEffect
* Use React refs instead of query selectors
* Clean up all ScrollTriggers on unmount

Example cleanup logic:

* On component unmount, kill all created triggers

---

## 9. Performance Constraints

Strict performance rules:

* Animate only transform and opacity
* Never animate top, left, height, or margin
* Use will-change: transform when necessary
* Enable lazy loading for images
* Avoid unnecessary re-renders

The final result must maintain smooth 60fps scrolling.

---

## 10. Asset Guidelines

### Preferred Formats

Use SVG for:

* Icons
* Line illustrations
* Flat vector artwork
* Logos

Use PNG or WebP only for:

* Photographic images
* Complex textures
* Raster artwork

### Delivery Structure

Assets should be delivered as:

```
/public/illustrations
  model.svg
  globe.svg
  device.svg
  heart.svg
```

All current design assets are appropriate for SVG format.

---

## 11. Expected Result

When implemented correctly, the system will behave as follows:

1. User scrolls down the page
2. First panel pins to viewport
3. Image inside panel moves upward
4. Text content fades in
5. On further scroll, next panel takes over
6. Process repeats for all sections

The experience must match the reference animation style exactly.

---

## 12. Summary

Core principles:

* Use GSAP ScrollTrigger for all motion
* Pin sections instead of animating page position
* Move images inside containers for parallax
* Keep animations transform-based
* Implement as reusable React components

Following this document should allow precise reproduction of the desired effect within a Next.js and Tailwind environment.

End of specification.
