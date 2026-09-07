import React, { useEffect, useRef } from "react";
import "./bubbleBackground.css";

export default function BubbleBackground({
  numBubbles = 20,
  minSize = 100,
  maxSize = 250
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const elements = Array.from(container.querySelectorAll(".bouncing_bubble"));

    const items = elements.map((el) => {
      const size = parseFloat(el.dataset.size);
      return {
        el,
        x: Math.random() * Math.max(0, container.offsetWidth - size),
        y: Math.random() * Math.max(0, container.offsetHeight - size),
        vx: (Math.random() * 0.07 + 0.05) * (Math.random() > 0.5 ? 1 : -1),
        vy: (Math.random() * 0.07 + 0.05) * (Math.random() > 0.5 ? 1 : -1),
        size
      };
    });

    function animate() {
      items.forEach((item) => {
        item.x += item.vx;
        item.y += item.vy;

        // Bounce off walls, clamping so bubbles never render outside the frame
        const maxX = Math.max(0, container.offsetWidth - item.size);
        const maxY = Math.max(0, container.offsetHeight - item.size);

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

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  const colors = ["pink"];

  return (
    <div className="bubble_background" ref={containerRef}>
      {Array.from({ length: numBubbles }).map((_, i) => {
        const isExtraLarge = i < 3;
        const size = isExtraLarge
          ? maxSize + maxSize * 0.15 + Math.random() * maxSize * 0.25
          : minSize + Math.pow(Math.random(), 0.6) * (maxSize - minSize);
        const colorClass = colors[i % colors.length];
        return (
          <div
            key={i}
            className={`bouncing_bubble decorative_bubble ${colorClass}-bubble`}
            data-size={size}
            style={{ width: size, height: size }}
          />
        );
      })}
    </div>
  );
}