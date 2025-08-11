// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import profileImg from "./assets/profile.jpeg";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   Download,
//   Sun,
//   Moon,
// } from "lucide-react";

// export default function FullstackProfileHome({
//   data = {
//     name: "Swami Antaryami Das",
//     title: "Full-Stack Developer",
//     location: "Bengaluru, India",
//     about:
//       "I craft high-performance web applications with elegant, scalable code and stunning UI. Specializing in React, Node.js, and cloud-native systems.",
//     avatar: profileImg,
//     resumeUrl: "#",
//     socials: {
//       github: "https://github.com/swami-dev",
//       linkedin: "https://linkedin.com/in/swami-antaryami-das-a341aa1b4",
//       mail: "mailto:blockswitching@gmail.com",
//     },
//     stats: [
//       { label: "Years Experience", value: "5+" },
//       { label: "Projects", value: "8" },
//       { label: "Open Source", value: "5" },
//     ],
//     skills: [
//       "Python",
//       "Django",
//       "React",
//       "TypeScript",
//       "Node.js",
//       "Postgres",
//       "Docker",
//       "AWS",
//     ],
//     projects: [
//       {
//         id: 1,
//         title: "Realtime Analytics Dashboard",
//         description:
//           "React + WebSocket + Node. Handles millions of events/day with seamless UX.",
//         preview:
//           "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60",
//         url: "#",
//       },
//       {
//         id: 2,
//         title: "E-commerce Platform",
//         description: "Resilient microservices architecture with secure payments.",
//         preview:
//           "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
//         url: "#",
//       },
//       {
//         id: 3,
//         title: "Open Source Component Library",
//         description: "Themeable, accessible UI components for rapid prototyping.",
//         preview:
//           "https://images.unsplash.com/photo-1520975916931-2a0f4b4a7c2b?auto=format&fit=crop&w=800&q=60",
//         url: "#",
//       },
//     ],
//   },
// }) {
//   const [dark, setDark] = useState(false);
//   const [planets, setPlanets] = useState([]);
//   const [shootingStars, setShootingStars] = useState([]);
//   const containerRef = useRef(null);

//   const colors = [
//     "#ff4b1f", "#ff9068", "#1fddff", "#2af598",
//     "#ff512f", "#dd2476", "#24c6dc", "#514a9d",
//     "#f12711", "#f5af19"
//   ];

//   // Create planets with moons
//   useEffect(() => {
//     const newPlanets = Array.from({ length: 7 }).map(() => ({
//       size: Math.random() * 50 + 30,
//       color: colors[Math.floor(Math.random() * colors.length)],
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       speed: Math.random() * 0.5 + 0.2,
//       moon: {
//         size: Math.random() * 12 + 6,
//         color: "#fff",
//         orbitRadius: Math.random() * 30 + 20,
//         orbitSpeed: Math.random() * 0.02 + 0.005,
//         angle: Math.random() * Math.PI * 2,
//       },
//     }));
//     setPlanets(newPlanets);
//   }, []);

//   // Animate moons
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPlanets((prev) =>
//         prev.map((p) => ({
//           ...p,
//           moon: {
//             ...p.moon,
//             angle: p.moon.angle + p.moon.orbitSpeed,
//           },
//         }))
//       );
//     }, 16); // ~60fps
//     return () => clearInterval(interval);
//   }, []);

//   // Mouse parallax
//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const centerX = window.innerWidth / 2;
//     const centerY = window.innerHeight / 2;
//     const deltaX = (clientX - centerX) / centerX;
//     const deltaY = (clientY - centerY) / centerY;

//     setPlanets((prev) =>
//       prev.map((p) => ({
//         ...p,
//         offsetX: deltaX * p.speed * 50,
//         offsetY: deltaY * p.speed * 50,
//       }))
//     );
//   };

//   // Shooting stars generator
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const id = Date.now();
//       const newStar = {
//         id,
//         startX: Math.random() * window.innerWidth,
//         startY: Math.random() * window.innerHeight * 0.5,
//       };
//       setShootingStars((prev) => [...prev, newStar]);
//       setTimeout(() => {
//         setShootingStars((prev) => prev.filter((s) => s.id !== id));
//       }, 1500);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   const gradientText = {
//     background: "linear-gradient(90deg, #ff4b1f, #1fddff)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       className={dark ? "bg-dark text-light" : "bg-light text-dark"}
//       style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}
//     >
//       {/* Background Planets & Moons */}
//       {planets.map((p, idx) => {
//         const moonX = p.x + (p.moon.orbitRadius * Math.cos(p.moon.angle));
//         const moonY = p.y + (p.moon.orbitRadius * Math.sin(p.moon.angle));
//         return (
//           <React.Fragment key={idx}>
//             <motion.div
//               style={{
//                 position: "absolute",
//                 width: p.size,
//                 height: p.size,
//                 background: p.color,
//                 borderRadius: "50%",
//                 top: p.y,
//                 left: p.x,
//                 filter: "blur(2px)",
//                 zIndex: 0,
//               }}
//               animate={{
//                 x: p.offsetX || 0,
//                 y: p.offsetY || 0,
//               }}
//               transition={{ type: "spring", stiffness: 20, damping: 10 }}
//             />
//             <motion.div
//               style={{
//                 position: "absolute",
//                 width: p.moon.size,
//                 height: p.moon.size,
//                 background: p.moon.color,
//                 borderRadius: "50%",
//                 top: moonY,
//                 left: moonX,
//                 zIndex: 0,
//               }}
//               animate={{
//                 x: p.offsetX || 0,
//                 y: p.offsetY || 0,
//               }}
//               transition={{ type: "spring", stiffness: 20, damping: 10 }}
//             />
//           </React.Fragment>
//         );
//       })}

//       {/* Shooting Stars */}
//       {shootingStars.map((star) => (
//         <motion.div
//           key={star.id}
//           style={{
//             position: "absolute",
//             top: star.startY,
//             left: star.startX,
//             width: "2px",
//             height: "80px",
//             background: "white",
//             boxShadow: "0 0 8px white",
//             zIndex: 0,
//           }}
//           initial={{ opacity: 1 }}
//           animate={{ x: 300, y: 300, opacity: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         />
//       ))}

//       {/* Main Content */}
//       <div className="container py-5" style={{ position: "relative", zIndex: 1 }}>
//         <header className="d-flex justify-content-between align-items-center mb-5">
//           <div>
//             <h2 style={gradientText} className="fw-bold">
//               {data.name}
//             </h2>
//             <small className="text-muted">{data.title}</small>
//           </div>
//           <div className="d-flex gap-2">
//             <button
//               className="btn btn-outline-secondary rounded-circle"
//               onClick={() => setDark(!dark)}
//               title="Toggle theme"
//             >
//               {dark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>
//             <a href={data.resumeUrl} download className="btn btn-primary">
//               <Download size={16} className="me-2" />
//               Resume
//             </a>
//           </div>
//         </header>

//         {/* Hero */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="row align-items-center mb-5"
//         >
//           <div className="col-md-4 text-center">
//             <img
//               src={data.avatar}
//               alt="Avatar"
//               className="rounded-circle shadow-lg border border-4 border-primary"
//               style={{ width: "180px", height: "180px", objectFit: "cover" }}
//             />
//           </div>
//           <div className="col-md-8">
//             <h1 className="fw-bold mb-3">
//               Building{" "}
//               <span style={gradientText}>exceptional web experiences</span>
//             </h1>
//             <p className="lead text-muted">{data.about}</p>
//             <div className="mt-3 d-flex gap-3">
//               <a href={data.socials.github} className="text-decoration-none text-reset">
//                 <Github /> GitHub
//               </a>
//               <a href={data.socials.linkedin} className="text-decoration-none text-reset">
//                 <Linkedin /> LinkedIn
//               </a>
//               <a href={data.socials.mail} className="text-decoration-none text-reset">
//                 <Mail /> Email
//               </a>
//             </div>
//             <div className="mt-4">
//               {data.skills.map((s) => (
//                 <span key={s} className="badge bg-primary me-2 mb-2">
//                   {s}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* Stats */}
//         <div className="row text-center mb-5">
//           {data.stats.map((stat) => (
//             <div key={stat.label} className="col-md-4">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="p-4 shadow-sm rounded bg-white"
//               >
//                 <h3 className="fw-bold">{stat.value}</h3>
//                 <p className="text-muted mb-0">{stat.label}</p>
//               </motion.div>
//             </div>
//           ))}
//         </div>

//         {/* Projects */}
//         <section id="projects" className="mb-5">
//           <h2 className="fw-bold mb-3" style={gradientText}>
//             Selected Projects
//           </h2>
//           <div className="row g-4">
//             {data.projects.map((p) => (
//               <motion.div
//                 key={p.id}
//                 whileHover={{ scale: 1.02 }}
//                 className="col-md-4"
//               >
//                 <div className="card shadow-sm border-0 h-100">
//                   <img
//                     src={p.preview}
//                     className="card-img-top"
//                     alt={p.title}
//                     style={{ height: "180px", objectFit: "cover" }}
//                   />
//                   <div className="card-body">
//                     <h5 className="fw-bold">{p.title}</h5>
//                     <p className="text-muted small">{p.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="pt-4 border-top text-muted small">
//           <div className="d-flex justify-content-between">
//             <span>
//               © {new Date().getFullYear()} {data.name} — Built with ❤️
//             </span>
//             <div className="d-flex gap-3">
//               <a href={data.socials.github} className="text-reset">
//                 <Github size={16} />
//               </a>
//               <a href={data.socials.linkedin} className="text-reset">
//                 <Linkedin size={16} />
//               </a>
//               <a href={data.socials.mail} className="text-reset">
//                 <Mail size={16} />
//               </a>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import profileImg from "./assets/profile.jpeg";
// import { Github, Linkedin, Mail, Download, Sun, Moon } from "lucide-react";

// export default function FullstackProfileHome({
//   data = {
//     name: "Swami Antaryami Das",
//     title: "Full-Stack Developer",
//     location: "Bengaluru, India",
//     about:
//       "I craft high-performance web applications with elegant, scalable code and stunning UI. Specializing in React, Node.js, and cloud-native systems.",
//     avatar: profileImg,
//     resumeUrl: "#",
//     socials: {
//       github: "https://github.com/swami-dev",
//       linkedin: "https://linkedin.com/in/swami-antaryami-das-a341aa1b4",
//       mail: "mailto:blockswitching@gmail.com",
//     },
//     stats: [
//       { label: "Years Experience", value: "5+" },
//       { label: "Projects", value: "8" },
//       { label: "Open Source", value: "5" },
//     ],
//     skills: [
//       "Python",
//       "Django",
//       "React",
//       "TypeScript",
//       "Node.js",
//       "Postgres",
//       "Docker",
//       "AWS",
//     ],
//     projects: [
//       {
//         id: 1,
//         title: "Realtime Analytics Dashboard",
//         description:
//           "React + WebSocket + Node. Handles millions of events/day with seamless UX.",
//         preview:
//           "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60",
//         url: "#",
//       },
//       {
//         id: 2,
//         title: "E-commerce Platform",
//         description: "Resilient microservices architecture with secure payments.",
//         preview:
//           "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
//         url: "#",
//       },
//       {
//         id: 3,
//         title: "Open Source Component Library",
//         description: "Themeable, accessible UI components for rapid prototyping.",
//         preview:
//           "https://images.unsplash.com/photo-1520975916931-2a0f4b4a7c2b?auto=format&fit=crop&w=800&q=60",
//         url: "#",
//       },
//     ],
//   },
// }) {
//   const [dark, setDark] = useState(false);
//   const [planets, setPlanets] = useState([]);
//   const [shootingStars, setShootingStars] = useState([]);
//   const containerRef = useRef(null);

//   const colors = [
//     "#ff4b1f",
//     "#ff9068",
//     "#1fddff",
//     "#2af598",
//     "#ff512f",
//     "#dd2476",
//     "#24c6dc",
//     "#514a9d",
//     "#f12711",
//     "#f5af19",
//   ];

//   useEffect(() => {
//     const newPlanets = Array.from({ length: 7 }).map(() => ({
//       size: Math.random() * 50 + 30,
//       color: colors[Math.floor(Math.random() * colors.length)],
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       speed: Math.random() * 0.5 + 0.2,
//       moon: {
//         size: Math.random() * 12 + 6,
//         color: "#fff",
//         orbitRadius: Math.random() * 30 + 20,
//         orbitSpeed: Math.random() * 0.02 + 0.005,
//         angle: Math.random() * Math.PI * 2,
//       },
//     }));
//     setPlanets(newPlanets);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPlanets((prev) =>
//         prev.map((p) => ({
//           ...p,
//           moon: {
//             ...p.moon,
//             angle: p.moon.angle + p.moon.orbitSpeed,
//           },
//         }))
//       );
//     }, 16);
//     return () => clearInterval(interval);
//   }, []);

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const centerX = window.innerWidth / 2;
//     const centerY = window.innerHeight / 2;
//     const deltaX = (clientX - centerX) / centerX;
//     const deltaY = (clientY - centerY) / centerY;

//     setPlanets((prev) =>
//       prev.map((p) => ({
//         ...p,
//         offsetX: deltaX * p.speed * 50,
//         offsetY: deltaY * p.speed * 50,
//       }))
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const id = Date.now();
//       const newStar = {
//         id,
//         startX: Math.random() * window.innerWidth,
//         startY: Math.random() * window.innerHeight * 0.5,
//       };
//       setShootingStars((prev) => [...prev, newStar]);
//       setTimeout(() => {
//         setShootingStars((prev) => prev.filter((s) => s.id !== id));
//       }, 1500);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   const gradientText = {
//     background: "linear-gradient(90deg, #ff4b1f, #1fddff)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//   };

//   const darkStyles = {
//     backgroundColor: "#121212",
//     color: "#f5f5f5",
//   };

//   const lightStyles = {
//     backgroundColor: "#f8f9fa",
//     color: "#212529",
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       style={{
//         minHeight: "100vh",
//         position: "relative",
//         overflow: "hidden",
//         ...(dark ? darkStyles : lightStyles),
//       }}
//     >
//       {/* Planets */}
//       {planets.map((p, idx) => {
//         const moonX = p.x + p.moon.orbitRadius * Math.cos(p.moon.angle);
//         const moonY = p.y + p.moon.orbitRadius * Math.sin(p.moon.angle);
//         return (
//           <React.Fragment key={idx}>
//             <motion.div
//               style={{
//                 position: "absolute",
//                 width: p.size,
//                 height: p.size,
//                 background: p.color,
//                 borderRadius: "50%",
//                 top: p.y,
//                 left: p.x,
//                 filter: "blur(2px)",
//                 zIndex: 0,
//               }}
//               animate={{
//                 x: p.offsetX || 0,
//                 y: p.offsetY || 0,
//               }}
//             />
//             <motion.div
//               style={{
//                 position: "absolute",
//                 width: p.moon.size,
//                 height: p.moon.size,
//                 background: p.moon.color,
//                 borderRadius: "50%",
//                 top: moonY,
//                 left: moonX,
//                 zIndex: 0,
//               }}
//               animate={{
//                 x: p.offsetX || 0,
//                 y: p.offsetY || 0,
//               }}
//             />
//           </React.Fragment>
//         );
//       })}

//       {/* Shooting stars */}
//       {shootingStars.map((star) => (
//         <motion.div
//           key={star.id}
//           style={{
//             position: "absolute",
//             top: star.startY,
//             left: star.startX,
//             width: "2px",
//             height: "80px",
//             background: "white",
//             boxShadow: "0 0 8px white",
//             zIndex: 0,
//           }}
//           initial={{ opacity: 1 }}
//           animate={{ x: 300, y: 300, opacity: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         />
//       ))}

//       {/* Main content */}
//       <div className="container py-5" style={{ position: "relative", zIndex: 1 }}>
//         <header className="d-flex justify-content-between align-items-center mb-5">
//           <div>
//             <h2 style={gradientText} className="fw-bold">
//               {data.name}
//             </h2>
//             <small className={dark ? "text-light" : "text-muted"}>
//               {data.title}
//             </small>
//           </div>
//           <div className="d-flex gap-2">
//             <button
//               className={`btn btn-outline-${dark ? "light" : "dark"} rounded-circle`}
//               onClick={() => setDark(!dark)}
//             >
//               {dark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>
//             <a
//               href={data.resumeUrl}
//               download
//               className={`btn btn-${dark ? "light" : "primary"}`}
//             >
//               <Download size={16} className="me-2" /> Resume
//             </a>
//           </div>
//         </header>

//         {/* Hero section */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="row align-items-center mb-5"
//         >
//           <div className="col-md-4 text-center">
//             <img
//               src={data.avatar}
//               alt="Avatar"
//               className="rounded-circle shadow-lg border border-4 border-primary"
//               style={{ width: "180px", height: "180px", objectFit: "cover" }}
//             />
//           </div>
//           <div className="col-md-8">
//             <h1 className="fw-bold mb-3">
//               Building <span style={gradientText}>exceptional web experiences</span>
//             </h1>
//             <p className={dark ? "text-light" : "text-muted"}>{data.about}</p>
//             <div className="mt-3 d-flex gap-3">
//               <a href={data.socials.github} className={dark ? "text-light" : "text-reset"}>
//                 <Github /> GitHub
//               </a>
//               <a href={data.socials.linkedin} className={dark ? "text-light" : "text-reset"}>
//                 <Linkedin /> LinkedIn
//               </a>
//               <a href={data.socials.mail} className={dark ? "text-light" : "text-reset"}>
//                 <Mail /> Email
//               </a>
//             </div>
//             <div className="mt-4">
//               {data.skills.map((s) => (
//                 <span
//                   key={s}
//                   className={`badge ${dark ? "bg-light text-dark" : "bg-primary"} me-2 mb-2`}
//                 >
//                   {s}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* Stats */}
//         <div className="row text-center mb-5">
//           {data.stats.map((stat) => (
//             <div key={stat.label} className="col-md-4">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className={`p-4 shadow-sm rounded ${dark ? "bg-secondary text-light" : "bg-white"}`}
//               >
//                 <h3 className="fw-bold">{stat.value}</h3>
//                 <p className={dark ? "text-light" : "text-muted"}>{stat.label}</p>
//               </motion.div>
//             </div>
//           ))}
//         </div>

//         {/* Projects */}
//         <section className="mb-5">
//           <h2 className="fw-bold mb-3" style={gradientText}>
//             Selected Projects
//           </h2>
//           <div className="row g-4">
//             {data.projects.map((p) => (
//               <motion.div key={p.id} whileHover={{ scale: 1.02 }} className="col-md-4">
//                 <div
//                   className={`card shadow-sm border-0 h-100 ${dark ? "bg-secondary text-light" : ""}`}
//                 >
//                   <img
//                     src={p.preview}
//                     className="card-img-top"
//                     alt={p.title}
//                     style={{ height: "180px", objectFit: "cover" }}
//                   />
//                   <div className="card-body">
//                     <h5 className="fw-bold">{p.title}</h5>
//                     <p className="small">{p.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="pt-4 border-top small">
//           <div className="d-flex justify-content-between">
//             <span>
//               © {new Date().getFullYear()} {data.name} — Built with ❤️
//             </span>
//             <div className="d-flex gap-3">
//               <a href={data.socials.github} className={dark ? "text-light" : "text-reset"}>
//                 <Github size={16} />
//               </a>
//               <a href={data.socials.linkedin} className={dark ? "text-light" : "text-reset"}>
//                 <Linkedin size={16} />
//               </a>
//               <a href={data.socials.mail} className={dark ? "text-light" : "text-reset"}>
//                 <Mail size={16} />
//               </a>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }
// src/FullstackProfileHome.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import profileImg from "./assets/profile.jpeg";
import { Github, Linkedin, Mail, Download, Sun, Moon } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FullstackProfileHome({
  data = {
    name: "Swami Antaryami Das",
    title: "Full-Stack Developer",
    location: "Bengaluru, India",
    about:
      "I craft high-performance web applications with elegant, scalable code and stunning UI. Specializing in React, Node.js, and cloud-native systems.",
    avatar: profileImg,
    resumeUrl: "#",
    socials: {
      github: "https://github.com/swami-dev",
      linkedin: "https://linkedin.com/in/swami-antaryami-das-a341aa1b4",
      mail: "mailto:blockswitching@gmail.com",
    },
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects", value: "8" },
      { label: "Open Source", value: "5" },
    ],
    skills: [
      "Python",
      "Django",
      "React",
      "TypeScript",
      "Node.js",
      "Postgres",
      "Docker",
      "AWS",
    ],
    projects: [
      {
        id: 1,
        title: "Realtime Analytics Dashboard",
        description:
          "React + WebSocket + Node. Handles millions of events/day with seamless UX.",
        preview:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60",
        url: "#",
      },
      {
        id: 2,
        title: "E-commerce Platform",
        description: "Resilient microservices architecture with secure payments.",
        preview:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
        url: "#",
      },
      {
        id: 3,
        title: "Open Source Component Library",
        description: "Themeable, accessible UI components for rapid prototyping.",
        preview:
          "https://images.unsplash.com/photo-1520975916931-2a0f4b4a7c2b?auto=format&fit=crop&w=800&q=60",
        url: "#",
      },
    ],
  },
}) {
  const [dark, setDark] = useState(false);
  const containerRef = useRef(null);

  // Planets stored in ref for animation (avoid frequent React re-renders)
  const planetsRef = useRef([]);
  const planetNodesRef = useRef([]); // DOM nodes for planets
  const moonNodesRef = useRef([]); // DOM nodes for moons

  // Shooting stars state (small, short-lived)
  const [stars, setStars] = useState([]);

  // mouse normalized [-1,1]
  const mouseRef = useRef({ x: 0, y: 0 });

  const colorPool = [
    "#FF00A8",
    "#9D00FF",
    "#00E0FF",
    "#FFC300",
    "#007BFF",
    "#FF4500",
    "#39FF14",
    "#00FFFF",
  ];

  // ---- Helpers to compute planets based on container size ----
  const computePlanets = (count = 8, width = 1200, height = 800) => {
    const min = Math.min(width, height);
    const centerX = width / 2;
    const centerY = height / 2;
    return Array.from({ length: count }).map((_, i) => {
      const orbit = Math.round(min * (0.12 + i * 0.065)); // px
      const size = Math.round(min * (0.02 + (i % 4) * 0.006)); // px
      return {
        angle: Math.random() * Math.PI * 2,
        orbit,
        size: Math.max(8, Math.min(80, size)),
        color: colorPool[i % colorPool.length],
        speed: 0.02 + Math.random() * 0.02, // rad/frame-scale
        cx: centerX,
        cy: centerY,
        moon: {
          angle: Math.random() * Math.PI * 2,
          orbitRadius: 10 + Math.random() * 40,
          size: Math.max(4, Math.round(size * (0.18 + Math.random() * 0.25))),
          color: "#ffffff",
          speed: 0.03 + Math.random() * 0.02,
        },
      };
    });
  };

  // initialize planets responsive to screen size
  useEffect(() => {
    if (typeof window === "undefined") return;
    const setup = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const count = w < 576 ? 4 : w < 992 ? 6 : 9; // responsive planet count
      const p = computePlanets(count, w, h);
      planetsRef.current = p;
      // clear DOM refs arrays so they will fill on render
      planetNodesRef.current = [];
      moonNodesRef.current = [];
    };
    setup();
    const onResize = () => setup();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // attach mouse listener for parallax
  useEffect(() => {
    const onMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mouseRef.current.x = (e.clientX / w) * 2 - 1; // -1..1
      mouseRef.current.y = (e.clientY / h) * 2 - 1; // -1..1
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // animation loop - updates DOM nodes directly for performance
  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const animate = (time) => {
      const dt = (time - last) / 1000; // seconds
      last = time;
      const m = mouseRef.current;

      const pArr = planetsRef.current;
      const pn = planetNodesRef.current;
      const mn = moonNodesRef.current;
      if (pArr.length) {
        for (let i = 0; i < pArr.length; i++) {
          const p = pArr[i];
          // advance angles (use dt so speed is framerate independent)
          p.angle += p.speed * dt * 2 * Math.PI * 0.2; // scaled
          p.moon.angle += p.moon.speed * dt * 2 * Math.PI * 0.2;

          // center may change on resize
          const rect = containerRef.current
            ? containerRef.current.getBoundingClientRect()
            : { width: window.innerWidth, height: window.innerHeight, left: 0, top: 0 };
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;

          // parallax offsets from mouse (-1..1)
          const px = m.x * (20 + i * 6) * p.speed;
          const py = m.y * (12 + i * 4) * p.speed;

          // planet position around center
          const planetX = cx + Math.cos(p.angle) * p.orbit + px;
          const planetY = cy + Math.sin(p.angle) * p.orbit + py;

          // apply transform to planet node
          const planetNode = pn[i];
          if (planetNode) {
            // translate so the planet is centered on computed coords
            planetNode.style.transform = `translate(${planetX - p.size / 2}px, ${planetY - p.size / 2}px)`;
            planetNode.style.width = `${p.size}px`;
            planetNode.style.height = `${p.size}px`;
            planetNode.style.background = p.color;
            planetNode.style.boxShadow = dark ? `0 0 18px ${p.color}` : `0 0 12px ${p.color}`;
            planetNode.style.opacity = dark ? 0.95 : 0.85;
          }

          // moon
          const mX = planetX + Math.cos(p.moon.angle) * p.moon.orbitRadius;
          const mY = planetY + Math.sin(p.moon.angle) * p.moon.orbitRadius;
          const moonNode = mn[i];
          if (moonNode) {
            moonNode.style.transform = `translate(${mX - p.moon.size / 2}px, ${mY - p.moon.size / 2}px)`;
            moonNode.style.width = `${p.moon.size}px`;
            moonNode.style.height = `${p.moon.size}px`;
            moonNode.style.background = p.moon.color;
            moonNode.style.boxShadow = dark ? "0 0 10px rgba(255,255,255,0.9)" : "0 0 8px rgba(255,255,255,0.7)";
            moonNode.style.opacity = dark ? 0.95 : 0.9;
          }
        }
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dark]); // re-run when theme toggles so shadows update

  // shooting stars: periodically add, rely on CSS animation & removal on end
  useEffect(() => {
    const interval = setInterval(() => {
      const id = String(Date.now() + Math.random());
      setStars((s) => [...s, id]);
      // cleanup after 1.4s (animation length)
      setTimeout(() => setStars((s) => s.filter((x) => x !== id)), 1600);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // gradient text style
  const gradientText = {
    background: "linear-gradient(90deg, #FF00A8, #9D00FF, #00E0FF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  // dark/light container styles (ensures good contrast)
  const containerStyles = {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background: dark ? "#06060a" : "#f8f9fa",
    color: dark ? "#e9eef8" : "#212529",
    transition: "background 300ms ease, color 300ms ease",
  };

  return (
    <div ref={containerRef} style={containerStyles} onMouseMove={() => {}}>
      {/* DOM nodes for planets and moons are rendered here and updated via refs/raf */}
      <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {/* orbits rim — subtle decorative concentric rings */}
        {planetsRef.current.map((_, i) => {
          // We render empty ring that doesn't move; orbit visual is subtle (optional)
          const ringSize = (planetsRef.current[i]?.orbit || 0) * 2;
          return (
            <div
              key={"ring-" + i}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: `${ringSize}px`,
                height: `${ringSize}px`,
                transform: `translate(-50%, -50%)`,
                borderRadius: "50%",
                border: `1px solid rgba(255,255,255,${dark ? 0.04 : 0.06})`,
                pointerEvents: "none",
                mixBlendMode: dark ? "screen" : "normal",
              }}
            />
          );
        })}

        {/* Planets & moons placeholders - refs attached on render */}
        {planetsRef.current.map((p, i) => (
          <React.Fragment key={"planet-frag-" + i}>
            <div
              ref={(el) => (planetNodesRef.current[i] = el)}
              className="planet-node"
              style={{
                position: "absolute",
                width: `${p.size}px`,
                height: `${p.size}px`,
                borderRadius: "50%",
                transform: `translate(-50%, -50%)`,
                willChange: "transform, box-shadow, opacity",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            <div
              ref={(el) => (moonNodesRef.current[i] = el)}
              className="moon-node"
              style={{
                position: "absolute",
                width: `${p.moon.size}px`,
                height: `${p.moon.size}px`,
                borderRadius: "50%",
                transform: `translate(-50%, -50%)`,
                willChange: "transform, box-shadow, opacity",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
          </React.Fragment>
        ))}
      </div>

      {/* Shooting stars elements (CSS animated) */}
      {stars.map((id) => {
        const left = Math.random() * 100; // %
        const top = Math.random() * 40; // %
        const dur = 0.8 + Math.random() * 0.9;
        const angle = -20 - Math.random() * 40;
        return (
          <div
            key={id}
            className="shooting-star"
            onAnimationEnd={() => setStars((s) => s.filter((x) => x !== id))}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${dur}s`,
              transform: `rotate(${angle}deg)`,
              zIndex: 0,
            }}
          />
        );
      })}

      {/* Content (zIndex above background) */}
      <div className="container py-5" style={{ position: "relative", zIndex: 2 }}>
        <header className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 style={gradientText} className="fw-bold mb-0">
              {data.name}
            </h2>
            <small className={dark ? "text-light" : "text-muted"}>{data.title}</small>
          </div>

          <div className="d-flex gap-2 align-items-center">
            <button
              className={`btn btn-${dark ? "light" : "outline-secondary"} rounded-circle`}
              onClick={() => setDark((d) => !d)}
              title="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href={data.resumeUrl}
              download
              className={`btn ${dark ? "btn-light" : "btn-primary"}`}
            >
              <Download size={16} className="me-2" />
              Resume
            </a>
          </div>
        </header>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="row align-items-center mb-4"
        >
          <div className="col-md-4 text-center">
            <img
              src={data.avatar}
              alt="Avatar"
              className="rounded-circle shadow-lg border border-4 border-primary"
              style={{ width: 180, height: 180, objectFit: "cover" }}
            />
          </div>

          <div className="col-md-8">
            <h1 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>
              Building <span style={gradientText}>exceptional web experiences</span>
            </h1>
            <p className={dark ? "text-light" : "text-muted"}>{data.about}</p>

            <div className="mt-3 d-flex gap-3 flex-wrap">
              <a href={data.socials.github} className={dark ? "text-light" : "text-reset"}>
                <Github /> GitHub
              </a>
              <a href={data.socials.linkedin} className={dark ? "text-light" : "text-reset"}>
                <Linkedin /> LinkedIn
              </a>
              <a href={data.socials.mail} className={dark ? "text-light" : "text-reset"}>
                <Mail /> Email
              </a>
            </div>

            <div className="mt-3">
              {data.skills.map((s) => (
                <span
                  key={s}
                  className={`badge me-2 mb-2 ${dark ? "bg-light text-dark" : "bg-primary"}`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Stats */}
        <div className="row text-center mb-5">
          {data.stats.map((stat) => (
            <div key={stat.label} className="col-6 col-md-4 mb-3">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`p-4 rounded shadow-sm ${dark ? "bg-secondary text-light" : "bg-white"}`}
              >
                <h3 className="fw-bold mb-0">{stat.value}</h3>
                <p className={dark ? "text-light" : "text-muted"}>{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <section id="projects" className="mb-5">
          <h2 className="fw-bold mb-3" style={gradientText}>
            Selected Projects
          </h2>
          <div className="row g-4">
            {data.projects.map((p) => (
              <div key={p.id} className="col-12 col-md-4">
                <motion.div whileHover={{ scale: 1.02 }} className={`card h-100 ${dark ? "bg-secondary text-light" : ""}`}>
                  <img src={p.preview} alt={p.title} className="card-img-top" style={{ height: 180, objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="fw-bold">{p.title}</h5>
                    <p className={dark ? "text-light small" : "text-muted small"}>{p.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-4 border-top small">
          <div className="d-flex justify-content-between">
            <span>
              © {new Date().getFullYear()} {data.name} — Built with ❤️
            </span>
            <div className="d-flex gap-3">
              <a className={dark ? "text-light" : "text-reset"} href={data.socials.github}><Github size={16} /></a>
              <a className={dark ? "text-light" : "text-reset"} href={data.socials.linkedin}><Linkedin size={16} /></a>
              <a className={dark ? "text-light" : "text-reset"} href={data.socials.mail}><Mail size={16} /></a>
            </div>
          </div>
        </footer>
      </div>

      {/* Inline CSS for shooting-star + small helpers */}
      <style>{`
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 80px;
          background: linear-gradient(90deg, rgba(255,255,255,1), rgba(255,255,255,0));
          box-shadow: 0 0 8px rgba(255,255,255,0.9);
          transform-origin: top left;
          pointer-events: none;
          animation-name: star-fall;
          animation-timing-function: cubic-bezier(.2,.8,.2,1);
          animation-fill-mode: forwards;
        }
        @keyframes star-fall {
          0% { opacity: 1; transform: translate(0,0) rotate(0deg) scaleY(1); }
          70% { opacity: 1; }
          100% { opacity: 0; transform: translate(600px, 300px) rotate(30deg) scaleY(0.25); }
        }
        /* small performance tweak */
        .planet-node, .moon-node { will-change: transform, opacity, box-shadow; transition: box-shadow 250ms ease; }
        @media (max-width: 767px) {
          /* make text and layout more compact */
          h1 { font-size: 1.4rem !important; }
        }
      `}</style>
    </div>
  );
}
