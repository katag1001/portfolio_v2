import React, { useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./bubbleBackground.css";

export default function BubbleBackground({
  numBubbles = 20,
  minSize = 100,
  maxSize = 250
}) {
  const rootRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Computed once per size/count props so route changes (which read
  // useLocation) don't reshuffle bubble sizes on every navigation.
  const bubbles = useMemo(() => {
    const colors = ["pink"];
    return Array.from({ length: numBubbles }).map((_, i) => {
      const isExtraLarge = i < 3;
      const size = isExtraLarge
        ? maxSize + maxSize * 0.15 + Math.random() * maxSize * 0.25
        : minSize + Math.pow(Math.random(), 0.6) * (maxSize - minSize);
      return {
        id: i,
        size,
        colorClass: colors[i % colors.length],
        // Alternate bubbles into two layers: "front" bubbles are the ones
        // allowed to rise above page content, only on the homepage.
        layer: i % 2 === 0 ? "back" : "front"
      };
    });
  }, [numBubbles, minSize, maxSize]);

  useEffect(() => {
    const root = rootRef.current;
    const elements = Array.from(root.querySelectorAll(".bouncing_bubble"));
    const bounds = { width: window.innerWidth, height: window.innerHeight };

    const items = elements.map((el) => {
      const size = parseFloat(el.dataset.size);
      return {
        el,
        x: Math.random() * Math.max(0, bounds.width - size),
        y: Math.random() * Math.max(0, bounds.height - size),
        vx: (Math.random() * 0.07 + 0.05) * (Math.random() > 0.5 ? 1 : -1),
        vy: (Math.random() * 0.07 + 0.05) * (Math.random() > 0.5 ? 1 : -1),
        size
      };
    });

    let frameId;

    function animate() {
      items.forEach((item) => {
        item.x += item.vx;
        item.y += item.vy;

        // Bounce off walls, clamping so bubbles never render outside the frame
        const maxX = Math.max(0, bounds.width - item.size);
        const maxY = Math.max(0, bounds.height - item.size);

        if (item.x <= 0) {
          item.x = 0;
          item.vx = Math.abs(item.vx);
        } else if (item.x >= maxX) {
          item.x = maxX;
          item.vx = -Math.abs(item.vx);
        }

        if (item.y <= 0) {
          item.y = 0;
          item.vy = Math.abs(item.vy);
        } else if (item.y >= maxY) {
          item.y = maxY;
          item.vy = -Math.abs(item.vy);
        }

        item.el.style.transform = `translate3d(${item.x}px, ${item.y}px, 0)`;
      });

      frameId = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(frameId);
  }, [bubbles]);

  const backBubbles = bubbles.filter((b) => b.layer === "back");
  const frontBubbles = bubbles.filter((b) => b.layer === "front");

  const renderBubble = (b) => (
    <div
      key={b.id}
      className={`bouncing_bubble decorative_bubble ${b.colorClass}-bubble`}
      data-size={b.size}
      style={{ width: b.size, height: b.size }}
    />
  );

  return (
    <div className="bubble_root" ref={rootRef}>
      <div className="bubble_background" />

      <div className="bubble_layer bubble_layer_back">
        {backBubbles.map(renderBubble)}
      </div>

      <div
        className={
          "bubble_layer bubble_layer_front" +
          (isHome ? " bubble_layer_front--elevated" : "")
        }
      >
        {frontBubbles.map(renderBubble)}
      </div>

      {/* Hidden filter used by the bubble glass to refract/warp whatever
          sits behind a bubble, the way light bends through real bubble film. */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
        <filter id="bubble-distortion" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.015 0.02" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </div>
  );
}
