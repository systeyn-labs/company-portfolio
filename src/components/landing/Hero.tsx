"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CapabilitiesMatrix from "./CapabilitiesMatrix";

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
  
  // Elements inside the conveyor architecture
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const matrixWrapperRef = useRef<HTMLDivElement>(null);
  const finaleWrapperRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);

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

    // --- EXPANSIVE STATIC FLOOR SYSTEM ---
    const gridLines: FloorLine[] = [];
    const embeddedNodes: CircuitNode[] = [];
    const activePackets: DataPacket[] = [];

    // Widened track array loop boundaries to create a massive horizontal floor area
    const numLongitudinalLines = 32;
    for (let i = 0; i <= numLongitudinalLines; i++) {
      const pct = i / numLongitudinalLines;
      const xCoord = (pct - 0.5) * 2800; // Expanded width matrix
      
      let lineType: "primary" | "accent" | "rail" = "rail";
      if (i % 4 === 0) lineType = "primary";
      else if (i % 2 === 0) lineType = "accent";

      gridLines.push({
        xStart: xCoord,
        xEnd: xCoord,
        zStart: 10,
        zEnd: 2200,
        type: lineType,
      });
    }

    for (let j = 0; j < 50; j++) {
      embeddedNodes.push({
        x: (Math.random() - 0.5) * 2000,
        z: 100 + Math.random() * 1900,
        size: 1.2 + Math.random() * 2.8,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    const totalPackets = 45;
    for (let k = 0; k < totalPackets; k++) {
      activePackets.push({
        lineIndex: Math.floor(Math.random() * gridLines.length),
        zPos: Math.random() * 2000 + 100,
        speed: 3 + Math.random() * 7,
        length: 30 + Math.random() * 70
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

    // Fixed perspective matrices mapping to keep the floor locked and rock-solid
    const floorYOffset = height * 0.38; 
    const cameraHeight = 310; 
    const fov = 420; 

    const projectFloor = (x: number, z: number) => {
      const scale = fov / z;
      const screenX = width / 2 + x * scale;
      const screenY = floorYOffset + cameraHeight * scale;
      return { x: screenX, y: screenY, sz: scale, depthAlpha: Math.max(0, 1 - z / 2000) };
    };

    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      // 1. Transverse Rows
      const numTransverseRows = 26;
      for (let r = 0; r < numTransverseRows; r++) {
        const rowZ = (r / numTransverseRows) * 2000 + 10;
        const leftPt = projectFloor(-1400, rowZ);
        const rightPt = projectFloor(1400, rowZ);

        const rowAlpha = Math.pow(leftPt.depthAlpha, 2.2) * 0.15;
        ctx.strokeStyle = `rgba(99, 102, 241, ${rowAlpha})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(leftPt.x, leftPt.y);
        ctx.lineTo(rightPt.x, rightPt.y);
        ctx.stroke();
      }

      // 2. Grid Channels
      gridLines.forEach((line) => {
        const p1 = projectFloor(line.xStart, line.zStart);
        const p2 = projectFloor(line.xEnd, line.zEnd);
        const targetAlpha = Math.pow(p1.depthAlpha, 1.8) * (line.type === "primary" ? 0.35 : line.type === "accent" ? 0.18 : 0.06);

        if (targetAlpha > 0.005) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = line.type === "primary" ? `rgba(56, 189, 248, ${targetAlpha})` : `rgba(99, 102, 241, ${targetAlpha})`;
          ctx.lineWidth = line.type === "primary" ? 0.8 : 0.5;
          ctx.stroke();
        }
      });

      // 3. Conveyor Data Signals
      activePackets.forEach((packet) => {
        packet.zPos -= packet.speed;
        if (packet.zPos < 10) {
          packet.zPos = 2000;
          packet.lineIndex = Math.floor(Math.random() * gridLines.length);
        }

        const targetLine = gridLines[packet.lineIndex];
        const pHead = projectFloor(targetLine.xStart, packet.zPos);
        const pTail = projectFloor(targetLine.xStart, packet.zPos + packet.length);
        const packetAlpha = Math.pow(pHead.depthAlpha, 2) * 0.8;

        if (packetAlpha > 0.02 && pHead.y > floorYOffset) {
          const grad = ctx.createLinearGradient(pTail.x, pTail.y, pHead.x, pHead.y);
          grad.addColorStop(0, "rgba(56, 189, 248, 0)");
          grad.addColorStop(0.8, `rgba(56, 189, 248, ${packetAlpha})`);
          grad.addColorStop(1, `rgba(255, 255, 255, ${packetAlpha})`);

          ctx.strokeStyle = grad;
          ctx.lineWidth = pHead.sz * 2.2 + 0.6;
          ctx.beginPath();
          ctx.moveTo(pTail.x, pTail.y);
          ctx.lineTo(pHead.x, pHead.y);
          ctx.stroke();
        }
      });

      // 4. Structural Nodes
      embeddedNodes.forEach((node) => {
        const pt = projectFloor(node.x, node.z);
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.3 + 0.7;
        const alpha = Math.pow(pt.depthAlpha, 2) * 0.35 * pulse;

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

  // --- CORE RAILING CONVEYOR SCROLL TIMELINE INTERACTION ---
  useGSAP(() => {
    // Intro title text character assembly
    const chars = heroTitleRef.current?.querySelectorAll(".char");
    if (chars) {
      gsap.fromTo(chars,
        { opacity: 0, z: -80, rotateX: 45, filter: "blur(8px)" },
        { opacity: 1, z: 0, rotateX: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.02, ease: "power4.out" }
      );
    }

    // Master Rail Timeline Orchestration
    const masterRail = gsap.timeline({
      scrollTrigger: {
        trigger: pinSectionRef.current,
        start: "top top",
        end: "+=300%", // Total scroll footprint distance duration
        pin: true,
        scrub: 0.5,
      }
    });

    masterRail
      // Step 1: Slide Hero Section smoothly forward toward the viewer along the floor plane
      .to(heroWrapperRef.current, {
        z: 400,
        y: "25vh",
        opacity: 0,
        scale: 1.4,
        ease: "power2.in"
      }, 0)
      
      // Step 2: Bring the separate Capabilities Matrix in from the distant horizon
      .fromTo(matrixWrapperRef.current,
        { opacity: 0, z: -1200, y: "-10vh", scale: 0.3 },
        { opacity: 1, z: 0, y: "0vh", scale: 1, ease: "power2.out" },
        0.4
      )
      // Matrix card element sub-stalls inside optimal read viewport area
      .to(matrixWrapperRef.current, { z: 150, y: "5vh", ease: "none" }, 1.4)
      // Slide matrix component cleanly over/out of screen frame perspective
      .to(matrixWrapperRef.current, { z: 700, y: "20vh", opacity: 0, scale: 1.25, ease: "power2.in" }, 2.2)

      // Step 3: Bring the system finale component forward on the tracks
      .fromTo(finaleWrapperRef.current,
        { opacity: 0, z: -1000, y: "-10vh", scale: 0.4 },
        { opacity: 1, z: 0, y: "0vh", scale: 1, ease: "power3.out" },
        2.8
      );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full bg-[#020204] text-white overflow-hidden">
      
      {/* PERSISTENT RUNWAY BACKGROUND STAGE */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full opacity-90 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(2,2,4,0)_0%,rgba(2,2,4,0.6)_45%,rgba(2,2,4,1)_95%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[35vh] bg-gradient-to-t from-[#020204] via-[#020204]/40 to-transparent" />
      </div>

      {/* MASTER PIN CONTROLLER TRACK STRIP */}
      <div ref={pinSectionRef} className="relative w-full h-screen overflow-hidden [perspective:1000px] [perspective-origin:50%_38%]">
        
        {/* ─── SECTION 1: HERO ENTRY (CONVEYOR MOUNTED) ─── */}
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
            <p className="text-zinc-500 font-mono text-xs md:text-sm max-w-xl mt-6 tracking-widest uppercase opacity-75">
              // High-Fidelity Data Topology Execution
            </p>
          </div>
        </div>

        {/* ─── SECTION 2: SEPARATED CAPABILITIES MATRIX SYSTEM CONTAINER ─── */}
        <div 
          ref={matrixWrapperRef} 
          className="absolute inset-0 w-full h-full flex items-center justify-center px-4 sm:px-8 lg:px-24 pointer-events-none will-change-transform [transform-style:preserve-3d] opacity-0"
        >
          <CapabilitiesMatrix />
        </div>

        {/* ─── SECTION 3: SYSTEM INTEGRATION FINALE (CONVEYOR MOUNTED) ─── */}
        <div 
          ref={finaleWrapperRef} 
          className="absolute inset-0 w-full h-full flex items-center justify-center px-6 pointer-events-none will-change-transform [transform-style:preserve-3d] opacity-0"
        >
          <div className="w-full max-w-3xl backdrop-blur-md bg-zinc-950/20 p-10 md:p-14 rounded-2xl border border-zinc-800/40 pointer-events-auto shadow-2xl">
            <span className="text-indigo-400 text-xs font-mono font-bold tracking-widest uppercase block mb-3">
              // Launch Deployment Vector
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-5">
              The Structural Horizon.
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              You have traveled completely along the infrastructure grid lines. The compute cluster is fully powered and ready to handle live enterprise deployment payloads.
            </p>
            <button className="mt-8 px-8 py-3 bg-white text-black font-bold text-xs tracking-wide uppercase rounded-lg hover:bg-zinc-200 transition-all duration-200 active:scale-95 shadow-md">
              Initialize Core Platform
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}