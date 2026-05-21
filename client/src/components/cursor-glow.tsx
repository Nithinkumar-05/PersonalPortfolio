import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const curr = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      curr.current.x += (pos.current.x - curr.current.x) * 0.08;
      curr.current.y += (pos.current.y - curr.current.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${curr.current.x - 200}px, ${curr.current.y - 200}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-30 mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 bg-[hsl(195,100%,50%)]"
        style={{ willChange: "transform", mixBlendMode: "difference" }}
      />
    </>
  );
}
