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
        x: Math.random() * (container.offsetWidth - size),
        y: Math.random() * (container.offsetHeight - size),
        vx: (Math.random() * 0.5 + 0.2) * (Math.random() > 0.5 ? 1 : -1),
        vy: (Math.random() * 0.5 + 0.2) * (Math.random() > 0.5 ? 1 : -1),
        size
      };
    });

    function animate() {
      items.forEach((item) => {
        item.x += item.vx;
        item.y += item.vy;

        // Bounce off walls
        if (item.x <= 0 || item.x + item.size >= container.offsetWidth)
          item.vx *= -1;
        if (item.y <= 0 || item.y + item.size >= container.offsetHeight)
          item.vy *= -1;

        item.el.style.left = `${item.x}px`;
        item.el.style.top = `${item.y}px`;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  const colors = ["pink"];

  return (
    <div className="bubble_background" ref={containerRef}>
      {Array.from({ length: numBubbles }).map((_, i) => {
        const size = minSize + Math.random() * (maxSize - minSize);
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