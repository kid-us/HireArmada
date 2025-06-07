"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { theBoldFont } from "@/app/fonts";
// Map icon names to image filenames in /public/images/Circle-animation-elements
const iconMap = {
  JS: "js.png",
  TS: "typescript.png",
  Py: "python.png",
  Go: "go.png",
  Vue: "vue.png",
  React: "reactjs.png",
  AWS: "aws.png",
  DJ: "django.png",
  PHP: "php.png",
  "C++": "cplusplus.png",
  Java: "java.png",
  Django: "django.png",
  CSS: "css3.png",
  Auth0: "auth0.png",
  Svelte: "sveltejs.png",
  Amazon: "aws.png",
  Nuxt: "nuxt.png",
  Analytics: "analytics.png",
  SQL: "mysql.png",
  GCP: "gcloud.png",
  N: "netlify.png",
  GH: "github.png",
  Netlify: "netlify.png",
  Next: "next.png",
  Node: "node.png",
  Firebase: "firebase.png",
  "C#": "dotnet.png",
  Azure: "azure.png",
  AE: "ae.png",
  AI: "ai.png",
  GRAFANA: "grafana.png",
  GRAPHQL: "graphql.png",
  GRUNTJS: "gruntjs.png",
  HTML: "html5.png",
  JEST: "jest.png",
  JIRA: "jira.png",
  JSON: "json.png",
  K8S: "k8s.png",
  KAFKA: "kafka.png",
  KIBANA: "kibana.png",
  KONG: "kong.png",
  KOTLIN: "kotlin.png",
  KUBERNETES: "kubernetes.png",
  LINUX: "linux.png",
  Meta: "meta.png",
  MICROSOFT: "microsoft.png",
  MONGODB: "mongodb.png",
  RAILS: "rails.png",
  RADIXUI: "radixui.png",
  REDUX: "redux.png",
  REMIX: "remix.png",
  REDHAT: "redhat.png",
  REACTJS: "reactjs.png",
  RESEND: "resend.png",
};

// Mobile-optimized layers with fewer icons and smaller radius
const mobileTechLayers = [
  {
    radius: 120,
    icons: ["JS", "Py", "Vue", "React", "AWS", "PHP", "C#", "Node", "Next"],
    colorIdx: 0,
    scrollFactor: 1,
  },
  {
    radius: 80,
    icons: ["Django", "CSS", "Svelte", "Auth0", "Netlify", "Firebase"],
    colorIdx: 1,
    scrollFactor: -1.2,
  },
  {
    radius: 40,
    icons: ["SQL", "GCP", "GH"],
    colorIdx: 2,
    scrollFactor: 1.5,
  },
];

const techLayers = [
  {
    radius: 250,
    icons: [
      "JS",
      "TS",
      "Py",
      "Go",
      "Vue",
      "React",
      "AWS",
      "DJ",
      "PHP",
      "C#",
      "Azure",
      "AE",
      "AI",
      "GRAFANA",
      "GRAPHQL",
      "GRUNTJS",
      "HTML",
      "JEST",
      "JIRA",
      "JSON",
      "KIBANA",
      "KOTLIN",
      "KUBERNETES",
      "LINUX",
      "Meta",
      "MICROSOFT",
      "MONGODB",
    ],
    colorIdx: 0,
    scrollFactor: 1,
  },
  {
    radius: 200,
    icons: [
      "Java",
      "Django",
      "CSS",
      "Node",
      "Svelte",
      "Next",
      "Nuxt",
      "ASP",
      "Auth0",
      "Svelte",
      "Amazon",
      "Netlify",
      "Firebase",
      "GH",
      "Travis",
      "RAILS",
      "RADIXUI",
    ],
    colorIdx: 1,
    scrollFactor: -1.2,
  },
  {
    radius: 150,
    icons: [
      "SQL",
      "GCP",
      "N",
      "GH",
      "AWS",
      "REDUX",
      "REMIX",
      "REDHAT",
      "REACTJS",
    ],
    colorIdx: 2,
    scrollFactor: 1.5,
  },
  {
    radius: 100,
    icons: ["SQL", "GCP", "Netlify", "Firebase", "RESEND"],
    colorIdx: 2,
    scrollFactor: -2,
  },
];

// const colors = ["bg-[#FFD166]", "bg-[#06D6A0]", "bg-[#118AB2]", "bg-[#EF476F]"];

export default function Techstacks() {
  const [scroll, setScroll] = useState(0);
  const ticking = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScroll(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full md:max-w-7xl flex flex-col md:flex-row items-center justify-center py-16 md:py-32 px-4 md:px-0 max-w-7xl mx-auto overflow-hidden">
      {/* Left: Heading */}
      <div className="flex-1 flex flex-col items-start justify-center mb-12 md:mb-0 md:mr-12 text-left">
        <span className="text-sm font-bold tracking-widest text-[#ff7a4d] uppercase mb-2">
          Techstacks
        </span>
        <h2
          className={`${theBoldFont.className} font-theboldfont text-3xl md:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-[#EC1699] to-[#FF4B2B] bg-clip-text text-transparent`}
        >
          EXPERTS IN VARIOUS
          <br className="hidden md:block" /> TECHSTACKS
        </h2>
        {/* <p
          className={`${raleway.className} font-raleway text-gray-700 text-sm md:text-base max-w-md`}
        >
          Our developers are proficient in a wide range of technologies, from
          front-end frameworks to back-end solutions and cloud services.
        </p> */}
      </div>

      {/* Right: Circle Animation/Icons */}
      <div className="flex-1 flex items-center justify-center relative min-h-[280px] md:min-h-[400px] min-w-[280px] md:min-w-[400px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[240px] h-[240px] md:w-[340px] md:h-[340px]">
            {(isMobile ? mobileTechLayers : techLayers).map(
              (layer, layerIdx) => {
                // Calculate rotation based on scroll position
                const rotation = scroll * 0.15 * layer.scrollFactor;
                return (
                  <div
                    key={layerIdx}
                    className={`absolute inset-0 pointer-events-none`}
                    style={{
                      zIndex: 10 - layerIdx,
                      transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                      transform: `rotate(${rotation}deg)`,
                    }}
                  >
                    {layer.icons.map((icon, i) => {
                      const angle = (i / layer.icons.length) * 2 * Math.PI;
                      const centerOffset = isMobile ? 120 : 170;
                      const iconSize = isMobile ? 8 : 16; // Half of the icon size
                      const x =
                        layer.radius * Math.cos(angle) +
                        centerOffset -
                        iconSize;
                      const y =
                        layer.radius * Math.sin(angle) +
                        centerOffset -
                        iconSize;
                      const imgSrc = iconMap[icon as keyof typeof iconMap]
                        ? `/images/Circle-animation-elements/${
                            iconMap[icon as keyof typeof iconMap]
                          }`
                        : undefined;
                      return (
                        <div
                          key={icon + i}
                          className={`absolute flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-full text-white text-lg font-bold `}
                          style={{ left: x, top: y }}
                        >
                          {imgSrc ? (
                            <Image
                              src={imgSrc}
                              alt={icon}
                              width={100}
                              height={100}
                              className="w-6 h-6 md:w-10 md:h-10 object-contain"
                              draggable={false}
                            />
                          ) : (
                            <span className="text-xs md:text-base">{icon}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
