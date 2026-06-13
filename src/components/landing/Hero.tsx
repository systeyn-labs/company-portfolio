"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CapabilitiesMatrix, { SERVICES } from "./CapabilitiesMatrix";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface FloorLine {
  xStart: number;
  xEnd: number;
  zStart: number;
  zEnd: number;
  type: "primary" | "accent" | "rail";
}

interface CircuitNode {
  x: number;
  z: number;
  size: number;
  pulsePhase: number;
}

interface DataPacket {
  lineIndex: number;
  zPos: number;
  speed: number;
  length: number;
}

export default function PageLayout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pinSectionRef = useRef<HTMLDivElement>(null);
  
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const finaleWrapperRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const serviceItemsRef = useRef<HTMLDivElement[]>([]);

  const rawTitle = "Engineering Intelligent Systems.";
  const words = rawTitle.split(" ");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const gridLines: FloorLine[] = [];
    const embeddedNodes: CircuitNode[] = [];
    const activePackets: DataPacket[] = [];

    const numLongitudinalLines = 36;
    for (let i = 0; i <= numLongitudinalLines; i++) {
      const pct = i / numLongitudinalLines;
      const xCoord = (pct - 0.5) * 3200; 
      
      let lineType: "primary" | "accent" | "rail" = "rail";
      if (i % 6 === 0) lineType = "primary";
      else if (i % 2 === 0) lineType = "accent";

      gridLines.push({
        xStart: xCoord,
        xEnd: xCoord,
        zStart: 10,
        zEnd: 2400,
        type: lineType,
      });
    }

    for (let j = 0; j < 60; j++) {
      embeddedNodes.push({
        x: (Math.random() - 0.5) * 2400,
        z: 100 + Math.random() * 2200,
        size: 1.0 + Math.random() * 2.2,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    for (let k = 0; k < 50; k++) {
      activePackets.push({
        lineIndex: Math.floor(Math.random() * gridLines.length),
        zPos: Math.random() * 2200 + 100,
        speed: 4 + Math.random() * 8,
        length: 40 + Math.random() * 80
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("resize", handleResize);

    let time = 0;
    const floorYOffset = height * 0.40; 
    const cameraHeight = 280; 
    const fov = 440; 

    const projectFloor = (x: number, z: number) => {
      const scale = fov / z;
      return {
        x: width / 2 + x * scale,
        y: floorYOffset + cameraHeight * scale,
        sz: scale,
        depthAlpha: Math.max(0, 1 - z / 2200)
      };
    };

    const render = () => {
      time += 0.014;
      ctx.clearRect(0, 0, width, height);

      // 1. Transverse Tracks
      const numTransverseRows = 24;
      for (let r = 0; r < numTransverseRows; r++) {
        const rowZ = (r / numTransverseRows) * 2200 + 10;
        const leftPt = projectFloor(-1600, rowZ);
        const rightPt = projectFloor(1600, rowZ);
        const rowAlpha = Math.pow(leftPt.depthAlpha, 2.0) * 0.12;

        ctx.strokeStyle = `rgba(99, 102, 241, ${rowAlpha})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(leftPt.x, leftPt.y);
        ctx.lineTo(rightPt.x, rightPt.y);
        ctx.stroke();
      }

      // 2. Rails Loops
      gridLines.forEach((line) => {
        const p1 = projectFloor(line.xStart, line.zStart);
        const p2 = projectFloor(line.xEnd, line.zEnd);
        const targetAlpha = Math.pow(p1.depthAlpha, 1.6) * (line.type === "primary" ? 0.30 : line.type === "accent" ? 0.14 : 0.04);

        if (targetAlpha > 0.005) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = line.type === "primary" ? `rgba(56, 189, 248, ${targetAlpha})` : `rgba(99, 102, 241, ${targetAlpha})`;
          ctx.lineWidth = line.type === "primary" ? 0.7 : 0.4;
          ctx.stroke();
        }
      });

      // 3. Signals
      activePackets.forEach((packet) => {
        packet.zPos -= packet.speed;
        if (packet.zPos < 10) {
          packet.zPos = 2200;
          packet.lineIndex = Math.floor(Math.random() * gridLines.length);
        }
        const targetLine = gridLines[packet.lineIndex];
        const pHead = projectFloor(targetLine.xStart, packet.zPos);
        const pTail = projectFloor(targetLine.xStart, packet.zPos + packet.length);
        const packetAlpha = Math.pow(pHead.depthAlpha, 1.8) * 0.75;

        if (packetAlpha > 0.02 && pHead.y > floorYOffset) {
          const grad = ctx.createLinearGradient(pTail.x, pTail.y, pHead.x, pHead.y);
          grad.addColorStop(0, "rgba(56, 189, 248, 0)");
          grad.addColorStop(0.8, `rgba(56, 189, 248, ${packetAlpha})`);
          grad.addColorStop(1, `rgba(255, 255, 255, ${packetAlpha})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = pHead.sz * 2.0 + 0.5;
          ctx.beginPath();
          ctx.moveTo(pTail.x, pTail.y);
          ctx.lineTo(pHead.x, pHead.y);
          ctx.stroke();
        }
      });

      // 4. Ambient Nodes
      embeddedNodes.forEach((node) => {
        const pt = projectFloor(node.x, node.z);
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.25 + 0.75;
        const alpha = Math.pow(pt.depthAlpha, 2) * 0.3 * pulse;

        if (alpha > 0.01 && pt.x >= 0 && pt.x <= width) {
          ctx.fillStyle = `rgba(165, 180, 252, ${alpha})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.sz * node.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // --- ITEM-BY-ITEM RAILING CONVEYOR MOVEMENT SYSTEM ---
  useGSAP(() => {
    const chars = heroTitleRef.current?.querySelectorAll(".char");
    if (chars) {
      gsap.fromTo(chars,
        { opacity: 0, z: -80, rotateX: 45, filter: "blur(8px)" },
        { opacity: 1, z: 0, rotateX: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.02, ease: "power4.out" }
      );
    }

    const conveyorTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: pinSectionRef.current,
        start: "top top",
        end: `+=${(SERVICES.length + 2) * 100}%`, // Dynamically scales layout track distance
        pin: true,
        scrub: 0.4,
      }
    });

    // 1. Clear Hero Screen Vector
    conveyorTimeline.to(heroWrapperRef.current, {
      z: 500,
      y: "20vh",
      opacity: 0,
      scale: 1.3,
      ease: "power2.in"
    }, 0);

    // 2. Bring each minimal service item forward one by one down the production rail
    serviceItemsRef.current.forEach((item, index) => {
      const positionStart = 0.4 + index * 1.0;

      conveyorTimeline
        // Emerge cleanly from deep background matrix horizon
        .fromTo(item,
          { opacity: 0, z: -1400, y: "-6vh", scale: 0.2 },
          { opacity: 1, z: 0, y: "0vh", scale: 1, duration: 1.0, ease: "power2.out" },
          positionStart
        )
        // Maintain presentation alignment context for optimal reading visibility
        .to(item, {
          z: 180,
          y: "3vh",
          duration: 0.6,
          ease: "none"
        })
        // Move rapidly past camera perspective out of focus frame
        .to(item, {
          z: 800,
          y: "18vh",
          opacity: 0,
          scale: 1.4,
          duration: 0.8,
          ease: "power2.in"
        });
    });

    // 3. Reveal System Closing Terminal Gate Vector
    const finaleStart = 0.4 + SERVICES.length * 1.0;
    conveyorTimeline.fromTo(finaleWrapperRef.current,
      { opacity: 0, z: -1000, y: "-8vh", scale: 0.4 },
      { opacity: 1, z: 0, y: "0vh", scale: 1, ease: "power3.out" },
      finaleStart
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full bg-[#020204] text-white overflow-hidden">
      
      {/* STATIC DEEP RUNWAY STAGE */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full opacity-85 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(2,2,4,0)_0%,rgba(2,2,4,0.5)_50%,rgba(2,2,4,1)_98%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#020204] via-[#020204]/30 to-transparent" />
      </div>

      {/* FIXED VIEWPORT MATRIX PIN LAYER */}
      <div ref={pinSectionRef} className="relative w-full h-screen overflow-hidden [perspective:1200px] [perspective-origin:50%_40%]">
        
        {/* HERO ENTRY CHANNEL */}
        <div 
          ref={heroWrapperRef} 
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-6 will-change-transform [transform-style:preserve-3d]"
        >
          <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center pointer-events-auto">
            <h1
              ref={heroTitleRef}
              className="w-full font-black text-white tracking-tighter leading-none pb-2 [transform-style:preserve-3d]"
              style={{ fontSize: "clamp(2rem, 5.8vw, 6.2rem)" }}
            >
              {words.map((word, wIdx) => (
                <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em] [transform-style:preserve-3d]">
                  {word.split("").map((char, cIdx) => (
                    <span key={cIdx} className="char inline-block bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent will-change-transform">
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            <p className="text-zinc-500 font-mono text-[10px] md:text-xs max-w-xl mt-6 tracking-[0.3em] uppercase opacity-70">
              // High-Fidelity Data Topology Execution
            </p>
          </div>
        </div>

        {/* RAILWAY DRIVEN CAPABILITIES ELEMENT LAYER */}
        <CapabilitiesMatrix serviceItemsRef={serviceItemsRef} />

      </div>
    </div>
  );
}