// Original

// 'use client';
// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";
// // import ModelViewer from "@/components/ModelViewer/ModelViewer"

// const KinitoPetBackground: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     // Scene & Camera
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x87ceeb); // sky blue

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(0, 10, 20);

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Create chessboard texture dynamically
//     function createChessTexture(
//       squareSize = 64,
//       color1 = "#cccccc",
//       color2 = "#000000"
//     ) {
//       const canvas = document.createElement("canvas");
//       canvas.width = squareSize * 2;
//       canvas.height = squareSize * 2;
//       const ctx = canvas.getContext("2d")!;

//       ctx.fillStyle = color1;
//       ctx.fillRect(0, 0, squareSize, squareSize);
//       ctx.fillRect(squareSize, squareSize, squareSize, squareSize);

//       ctx.fillStyle = color2;
//       ctx.fillRect(squareSize, 0, squareSize, squareSize);
//       ctx.fillRect(0, squareSize, squareSize, squareSize);

//       const texture = new THREE.CanvasTexture(canvas);
//       texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//       texture.repeat.set(40, 40);
//       return texture;
//     }

//     // Floor
//     const chessTexture = createChessTexture();
//     const floorMaterial = new THREE.MeshBasicMaterial({
//       map: chessTexture,
//       side: THREE.DoubleSide,
//     });
//     const floorGeometry = new THREE.PlaneGeometry(500, 500);
//     const floor = new THREE.Mesh(floorGeometry, floorMaterial);
//     floor.rotation.x = -Math.PI / 2;
//     scene.add(floor);

//     // Mountains
//     const mountainMaterial = new THREE.MeshBasicMaterial({
//       color: 0x4444ff,
//       wireframe: true,
//     });
//     for (let i = 0; i < 25; i++) {
//       const distance = -Math.random() * 180 - 50;
//       const sizeFactor = Math.abs(distance) / 40;
//       const height = sizeFactor * (Math.random() * 4 + 6);
//       const radius = sizeFactor * (Math.random() * 3 + 3);
//       const mountain = new THREE.Mesh(
//         new THREE.ConeGeometry(radius, height, 6),
//         mountainMaterial
//       );
//       mountain.position.set(
//         (Math.random() - 0.5) * 180,
//         height / 2,
//         distance
//       );
//       scene.add(mountain);
//     }

//     // Light
//     const sunLight = new THREE.DirectionalLight(0xffffff, 1);
//     sunLight.position.set(50, 100, -50);
//     scene.add(sunLight);

//     // Clouds
//     const loader = new THREE.TextureLoader();
//     const clouds: THREE.Mesh[] = [];
//     loader.load("https://i.ibb.co/9wNQ0tY/cloud.png", (cloudTexture) => {
//       for (let i = 0; i < 5; i++) {
//         const cloudMaterial = new THREE.MeshLambertMaterial({
//           map: cloudTexture,
//           transparent: true,
//           opacity: 0.8,
//           side: THREE.DoubleSide,
//         });
//         const cloud = new THREE.Mesh(
//           new THREE.PlaneGeometry(40, 20),
//           cloudMaterial
//         );
//         cloud.position.set(
//           Math.random() * 200 - 100,
//           Math.random() * 20 + 30,
//           -100
//         );
//         scene.add(cloud);
//         clouds.push(cloud);
//       }
//     });

//     // Mouse parallax
//     const handleMouseMove = (e: MouseEvent) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 2;
//       const y = (e.clientY / window.innerHeight - 0.5) * 2;
//       camera.position.x = x * 10;
//       camera.position.y = 10 + y * 3;
//       camera.lookAt(0, 0, -50);
//     };
//     document.addEventListener("mousemove", handleMouseMove);

//     // Animate
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Move clouds
//       clouds.forEach((cloud) => {
//         cloud.position.x += 0.05;
//         if (cloud.position.x > 150) cloud.position.x = -150;
//         cloud.lookAt(camera.position);
//       });

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Resize handling
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       document.removeEventListener("mousemove", handleMouseMove);
//       mountRef.current?.removeChild(renderer.domElement);
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={mountRef} className="hero-section" >

    
//   </div>;
// };

// export default KinitoPetBackground;

















// //WORKING VERSION WITH STATIC GIF IMAGES


// 'use client';
// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";

// const KinitoPetBackground: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     // Scene & Camera
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x87ceeb); // sky blue

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(0, 20, 20);

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Create chessboard texture dynamically
//     function createChessTexture(
//       squareSize = 64,
//       color1 = "#cccccc",
//       color2 = "#000000"
//     ) {
//       const canvas = document.createElement("canvas");
//       canvas.width = squareSize * 2;
//       canvas.height = squareSize * 2;
//       const ctx = canvas.getContext("2d")!;

//       ctx.fillStyle = color1;
//       ctx.fillRect(0, 0, squareSize, squareSize);
//       ctx.fillRect(squareSize, squareSize, squareSize, squareSize);

//       ctx.fillStyle = color2;
//       ctx.fillRect(squareSize, 0, squareSize, squareSize);
//       ctx.fillRect(0, squareSize, squareSize, squareSize);

//       const texture = new THREE.CanvasTexture(canvas);
//       texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//       texture.repeat.set(40, 40);
//       return texture;
//     }

//     // Floor
//     const chessTexture = createChessTexture();
//     const floorMaterial = new THREE.MeshBasicMaterial({
//       map: chessTexture,
//       side: THREE.DoubleSide,
//     });
//     const floorGeometry = new THREE.PlaneGeometry(500, 500);
//     const floor = new THREE.Mesh(floorGeometry, floorMaterial);
//     floor.rotation.x = -Math.PI / 2;
//     scene.add(floor);

//     // Mountains
//     const mountainMaterial = new THREE.MeshBasicMaterial({
//       color: 0x4444ff,
//       wireframe: true,
//     });
//     for (let i = 0; i < 25; i++) {
//       const distance = -Math.random() * 180 - 50;
//       const sizeFactor = Math.abs(distance) / 40;
//       const height = sizeFactor * (Math.random() * 4 + 6);
//       const radius = sizeFactor * (Math.random() * 3 + 3);
//       const mountain = new THREE.Mesh(
//         new THREE.ConeGeometry(radius, height, 6),
//         mountainMaterial
//       );
//       mountain.position.set(
//         (Math.random() - 0.5) * 180,
//         height / 2,
//         distance
//       );
//       scene.add(mountain);
//     }

//     // Light
//     const sunLight = new THREE.DirectionalLight(0xffffff, 1);
//     sunLight.position.set(50, 100, -50);
//     scene.add(sunLight);

//     // Add your GIF URLs here - each URL will create a floating square!
//     const gifUrls = [
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamZhNXZiMzY3bWFtZjI4amRpdDM1bDZkeXhoZTdqMXZxYzk5NWZmOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xAKhG9iFXynDh2LEg5/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamZhNXZiMzY3bWFtZjI4amRpdDM1bDZkeXhoZTdqMXZxYzk5NWZmOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3q2IYN87QjIg51kc/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamZhNXZiMzY3bWFtZjI4amRpdDM1bDZkeXhoZTdqMXZxYzk5NWZmOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OeEVCJ2UqMQNO/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmg1aTdkM2czeGJ1NHp0OHF5cnpscXdxY3c5NjFucWxnNHc0d2JkbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nZ9OnDVJoEaLPlVRc1/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmg1aTdkM2czeGJ1NHp0OHF5cnpscXdxY3c5NjFucWxnNHc0d2JkbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/31X5ofUNHSjjf0o2KQ/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N3FlczdodnI0ZmRkcWU4dm5zZ2t3Y3NnZHVkb2oybWUzM3VkNWxqYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SGkQDlq8Fb5860fGEX/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWtvdGNxMnc4dnZvYTM3M3Bpc3I4aGpiYjRpangzejQ0cjZkeW9pdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6fIYpfMIAawhlUtO/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWtvdGNxMnc4dnZvYTM3M3Bpc3I4aGpiYjRpangzejQ0cjZkeW9pdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEduYVnErlEDkhfCU/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWtvdGNxMnc4dnZvYTM3M3Bpc3I4aGpiYjRpangzejQ0cjZkeW9pdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/f7Gvu2jZuqdKy7YVtj/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N2Q3ejVwNW1wY24wNW9mY3pzcGJldjh0dHU5Z2t4em82ZjV1YnM2NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4Jzi0iyKHLe1qT9S/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cDd2bXNxZm16cDdyc3Y0dnF6amNhMWhoNmtsdDYwa3BoMXA2OHR1NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HbZAHCByI13YGrNzeJ/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Y2VieXV3eGVhMnExbmI4emFwcm1jNmZlNHdrN2k1NTIyMWdjazE3ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MGiARNEh9BuYU/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Y2VieXV3eGVhMnExbmI4emFwcm1jNmZlNHdrN2k1NTIyMWdjazE3ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xTka00xv2CNa6FzFaU/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3osxYhj4VNwxHdlE9G/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kqGcu9biWnARmTremJ/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT9IgwvIzQOUIeVxAI/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oxRmuYNCllPzhtScU/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mq5y2jHRCAqMo/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGlpYjc1N3dneWRmZTRqenh4dnVkZ2xlNnZoaHF1cHMxdjdkdWhvdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sIIhZliB2McAo/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHZzZXh5aDdoZ3Y5Z2ljdjN5bGg2aWhjbnlxeHlzajI5eGk0cGd2ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zBOqRPmkEF3Ow/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHZzZXh5aDdoZ3Y5Z2ljdjN5bGg2aWhjbnlxeHlzajI5eGk0cGd2ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VbAFrrDVGAvZu/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bDlicHhmY29kOTdtM3Z6dDZpMTAzdXFwZmF0aTdpYTRlaXVodWFqeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/scZPhLqaVOM1qG4lT9/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZHFrd3Rpd2NjNzc5ZW01eHdkMmRlcDFuM2JwMmlzaDFjbzlzbHI0ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kl5ctZSctCbE4/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXVyaTFpZGc4Z29uNmVxaHVjcHV2bmpjN3d4azlycGNhNnQ3eXpjZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Gf5QiP1TWCO8qYKmt7/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTdhNTJqMWpwczh2eHBrYjF2cnR2ejVoajllaTh0bHlnZGN4NHN2eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/h0Cq1ClzO3UpupFPjP/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c3hhc3VxODFudHFqNXo0ZzVpeTNsMHBlb2ltOWZsZ3Mxdmw0aG54aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5PDVFiKY3Iikg/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZHlydDZsM3Zpa2hkcmtqcW9zb3NyOTYzbTQ3MHdic3BkMHpoamdobyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2A4AuksVMmWXKfJjGl/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N3hnMjN4b3drMGw2Nm5lc3F4bmpwcndnMm4yOHg1MGN1a282b2ZkOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TdumyoY4DJPJdoYPXn/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWdibjdhNWEwa3plMDExcm1mb3MxaHRsZ2x5cTlsanh0YWx3ZmM3cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iKHUw8sPI9ZZMpDQbW/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWdibjdhNWEwa3plMDExcm1mb3MxaHRsZ2x5cTlsanh0YWx3ZmM3cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/il49eQumsbadTznOH7/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWdibjdhNWEwa3plMDExcm1mb3MxaHRsZ2x5cTlsanh0YWx3ZmM3cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vn4BC1T1zPGygC3ZdW/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NDd5Nzc4NGFyZTdvNGp6MjdrbmdwMTFjMzM4cWQ2NWtjZHVrejM1dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gPN93uuj5jSiOPfno8/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3amRwYmc4YW82MHF5aDN0bmVia3Z6MzAxdmJldThhNGk1aDVpMGNpbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/b8znhKsSuMArkwKjYD/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3anZybjR2NjdnaWM3aHYxaGdsa2IxMnd4bzh4NGtxdG56cGo0ZGtlcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qEqnCcJcgGDxGyNAKG/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3anZybjR2NjdnaWM3aHYxaGdsa2IxMnd4bzh4NGtxdG56cGo0ZGtlcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EfgerR3aPDPsdU50cH/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3amtpbGR0MXlwaDF2M2RkbnlsZzVyNzhxbTkxM2Y2cHpldTI0ZmRscSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/J6LTAH6FmI6J4o47bx/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWxzN29meHR6cGpseTV5bWowbTd3dGcyZDF1ODBkODJ5cjhqaWI0MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/16WWmxrz0i6BFjDNOO/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3enZlOXZxMGVpMnpwOGV1cnlvbTBkYzhjeXFydzVzeG83OWhnNXdyYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Z7G614BopkiX6qrqVc/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3amtpbGR0MXlwaDF2M2RkbnlsZzVyNzhxbTkxM2Y2cHpldTI0ZmRscSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWZUU7OAScUGz0tYmm/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eHp4ZG92bWtoaXAzMGQ5dmFsYXV0NGFnbnM2YW5pYnU2Zm55NW9wbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l378qbpG65OjOg7Ys/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eHp4ZG92bWtoaXAzMGQ5dmFsYXV0NGFnbnM2YW5pYnU2Zm55NW9wbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4sSANVmzFXT3z1MfTx/giphy.gif',
//       'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjVqNnc3bjN4d3A1MmF2cnA2NzVyZDdoY2c1b2gybHNub2NyOWN1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VKK5qKuK1L9Q8owgop/giphy.gif',
//       'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGt2dm9mbmR4N281cTNwdTdyaXBtNHZqcnhxbnE5bXBwYjkxMWw5cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uLuZKxYfhsZ2GOKUmz/giphy.gif'
//     ];

//     // Flying squares with GIFs
//     const flyingSquares: Array<{
//       mesh: THREE.Mesh;
//       baseY: number;
//       waveOffset: number;
//       rotationSpeed: THREE.Vector3;
//       speed: number;
//     }> = [];

//     const loader = new THREE.TextureLoader();
    
//     // Create flying squares - one for each GIF URL
//     for (let i = 0; i < gifUrls.length; i++) {
//       const gifUrl = gifUrls[i];
      
//       loader.load(
//         gifUrl,
//         (texture) => {
//           // Configure texture for GIF animation
//           texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
//           texture.minFilter = THREE.LinearFilter;
//           texture.magFilter = THREE.LinearFilter;
          
//           const squareMaterial = new THREE.MeshBasicMaterial({
//             map: texture,
//             transparent: true,
//             opacity: 0.9,
//             side: THREE.DoubleSide,
//           });
          
//           const squareSize = Math.random() * 8 + 6; // Random size between 6-14
//           const square = new THREE.Mesh(
//             new THREE.PlaneGeometry(squareSize, squareSize),
//             squareMaterial
//           );
          
//           // Random starting position
//           const startX = 150 + Math.random() * 100; // Start from right side
//           const baseY = Math.random() * 40 + 20; // Height between 20-60
//           const z = Math.random() * -80 - 20; // Depth variation
          
//           square.position.set(startX, baseY, z);
          
//           // Random slow rotation speeds
//           const rotationSpeed = new THREE.Vector3(
//             (Math.random() - 0.5) * 0.005, // Very slow rotation
//             (Math.random() - 0.5) * 0.005,
//             (Math.random() - 0.5) * 0.003
//           );
          
//           const speed = Math.random() * 0.3 + 0.2; // Speed between 0.2-0.5
//           const waveOffset = Math.random() * Math.PI * 2; // Random wave phase
          
//           scene.add(square);
//           flyingSquares.push({
//             mesh: square,
//             baseY: baseY,
//             waveOffset: waveOffset,
//             rotationSpeed: rotationSpeed,
//             speed: speed
//           });
//         },
//         undefined,
//         (error) => {
//           console.log('Failed to load texture, using fallback');
//           // Fallback: create a colorful square with retro colors
//           const fallbackColors = [0xff00ff, 0x00ffff, 0xffff00, 0xff0080, 0x80ff00];
//           const color = fallbackColors[Math.floor(Math.random() * fallbackColors.length)];
          
//           const squareMaterial = new THREE.MeshBasicMaterial({
//             color: color,
//             transparent: true,
//             opacity: 0.8,
//           });
          
//           const squareSize = Math.random() * 8 + 6;
//           const square = new THREE.Mesh(
//             new THREE.PlaneGeometry(squareSize, squareSize),
//             squareMaterial
//           );
          
//           const startX = 150 + Math.random() * 100;
//           const baseY = Math.random() * 40 + 20;
//           const z = Math.random() * -80 - 20;
          
//           square.position.set(startX, baseY, z);
          
//           const rotationSpeed = new THREE.Vector3(
//             (Math.random() - 0.5) * 0.005,
//             (Math.random() - 0.5) * 0.005,
//             (Math.random() - 0.5) * 0.003
//           );
          
//           const speed = Math.random() * 0.3 + 0.2;
//           const waveOffset = Math.random() * Math.PI * 2;
          
//           scene.add(square);
//           flyingSquares.push({
//             mesh: square,
//             baseY: baseY,
//             waveOffset: waveOffset,
//             rotationSpeed: rotationSpeed,
//             speed: speed
//           });
//         }
//       );
//     }

//     // Mouse parallax
//     const handleMouseMove = (e: MouseEvent) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 2;
//       const y = (e.clientY / window.innerHeight - 0.5) * 2;
//       camera.position.x = x * 10;
//       camera.position.y = 10 + y * 3;
//       camera.lookAt(0, 0, -50);
//     };
//     document.addEventListener("mousemove", handleMouseMove);

//     // Animation variables
//     let time = 0;

//     // Animate
//     const animate = () => {
//       requestAnimationFrame(animate);
//       time += 0.01;

//       // Animate flying squares
//       flyingSquares.forEach((square, index) => {
//         // Move left
//         square.mesh.position.x -= square.speed;
        
//         // Wave-like vertical movement
//         const waveHeight = 5; // Amplitude of the wave
//         const waveFrequency = 0.5; // How fast the wave oscillates
//         square.mesh.position.y = square.baseY + 
//           Math.sin(time * waveFrequency + square.waveOffset) * waveHeight;
        
//         // Apply slow rotations
//         square.mesh.rotation.x += square.rotationSpeed.x;
//         square.mesh.rotation.y += square.rotationSpeed.y;
//         square.mesh.rotation.z += square.rotationSpeed.z;
        
//         // Reset position when square goes off screen
//         if (square.mesh.position.x < -150) {
//           square.mesh.position.x = 150 + Math.random() * 50;
//           square.baseY = Math.random() * 40 + 20;
//           square.mesh.position.z = Math.random() * -80 - 20;
//           square.waveOffset = Math.random() * Math.PI * 2;
//         }
//       });

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Resize handling
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       document.removeEventListener("mousemove", handleMouseMove);
//       mountRef.current?.removeChild(renderer.domElement);
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={mountRef} className="hero-section" />;
// };

// export default KinitoPetBackground;





















































// working version with animated gifs

// 'use client';
// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";

// const KinitoPetBackground: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     // Scene & Camera
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x87ceeb); // sky blue

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(0, 10, 20);

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Create chessboard texture dynamically
//     function createChessTexture(
//       squareSize = 64,
//       color1 = "#cccccc",
//       color2 = "#000000"
//     ) {
//       const canvas = document.createElement("canvas");
//       canvas.width = squareSize * 2;
//       canvas.height = squareSize * 2;
//       const ctx = canvas.getContext("2d")!;

//       ctx.fillStyle = color1;
//       ctx.fillRect(0, 0, squareSize, squareSize);
//       ctx.fillRect(squareSize, squareSize, squareSize, squareSize);

//       ctx.fillStyle = color2;
//       ctx.fillRect(squareSize, 0, squareSize, squareSize);
//       ctx.fillRect(0, squareSize, squareSize, squareSize);

//       const texture = new THREE.CanvasTexture(canvas);
//       texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//       texture.repeat.set(40, 40);
//       return texture;
//     }

//     // Floor
//     const chessTexture = createChessTexture();
//     const floorMaterial = new THREE.MeshBasicMaterial({
//       map: chessTexture,
//       side: THREE.DoubleSide,
//     });
//     const floorGeometry = new THREE.PlaneGeometry(500, 500);
//     const floor = new THREE.Mesh(floorGeometry, floorMaterial);
//     floor.rotation.x = -Math.PI / 2;
//     scene.add(floor);

//     // Mountains
//     const mountainMaterial = new THREE.MeshBasicMaterial({
//       color: 0x4444ff,
//       wireframe: true,
//     });
//     for (let i = 0; i < 25; i++) {
//       const distance = -Math.random() * 180 - 50;
//       const sizeFactor = Math.abs(distance) / 40;
//       const height = sizeFactor * (Math.random() * 4 + 6);
//       const radius = sizeFactor * (Math.random() * 3 + 3);
//       const mountain = new THREE.Mesh(
//         new THREE.ConeGeometry(radius, height, 6),
//         mountainMaterial
//       );
//       mountain.position.set(
//         (Math.random() - 0.5) * 180,
//         height / 2,
//         distance
//       );
//       scene.add(mountain);
//     }

//     // Light
//     const sunLight = new THREE.DirectionalLight(0xffffff, 1);
//     sunLight.position.set(50, 100, -50);
//     scene.add(sunLight);

//     // Add your GIF URLs here - each URL will create a floating square!
//     const gifUrls = [
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2toNHlnZWJzM3BjaHVtZHBpbW13ODY4bjIwZHIwMmlnY3FlYzU1ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Hcw7rjsIsHcmk/giphy.gif', // classic keyboard cat
//       'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXY3ZXY1Z2FoM3Q5cTNhOHE1Y3lxbnQxeHNxZ3B3bnZpcXFkc3J6NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U7BxuF4pDyDUk/giphy.gif', // cats after anesthesia
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamZhNXZiMzY3bWFtZjI4amRpdDM1bDZkeXhoZTdqMXZxYzk5NWZmOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xAKhG9iFXynDh2LEg5/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamZhNXZiMzY3bWFtZjI4amRpdDM1bDZkeXhoZTdqMXZxYzk5NWZmOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3q2IYN87QjIg51kc/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamZhNXZiMzY3bWFtZjI4amRpdDM1bDZkeXhoZTdqMXZxYzk5NWZmOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OeEVCJ2UqMQNO/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmg1aTdkM2czeGJ1NHp0OHF5cnpscXdxY3c5NjFucWxnNHc0d2JkbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nZ9OnDVJoEaLPlVRc1/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmg1aTdkM2czeGJ1NHp0OHF5cnpscXdxY3c5NjFucWxnNHc0d2JkbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/31X5ofUNHSjjf0o2KQ/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N3FlczdodnI0ZmRkcWU4dm5zZ2t3Y3NnZHVkb2oybWUzM3VkNWxqYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SGkQDlq8Fb5860fGEX/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWtvdGNxMnc4dnZvYTM3M3Bpc3I4aGpiYjRpangzejQ0cjZkeW9pdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6fIYpfMIAawhlUtO/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWtvdGNxMnc4dnZvYTM3M3Bpc3I4aGpiYjRpangzejQ0cjZkeW9pdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEduYVnErlEDkhfCU/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWtvdGNxMnc4dnZvYTM3M3Bpc3I4aGpiYjRpangzejQ0cjZkeW9pdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/f7Gvu2jZuqdKy7YVtj/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N2Q3ejVwNW1wY24wNW9mY3pzcGJldjh0dHU5Z2t4em82ZjV1YnM2NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4Jzi0iyKHLe1qT9S/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cDd2bXNxZm16cDdyc3Y0dnF6amNhMWhoNmtsdDYwa3BoMXA2OHR1NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HbZAHCByI13YGrNzeJ/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Y2VieXV3eGVhMnExbmI4emFwcm1jNmZlNHdrN2k1NTIyMWdjazE3ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MGiARNEh9BuYU/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Y2VieXV3eGVhMnExbmI4emFwcm1jNmZlNHdrN2k1NTIyMWdjazE3ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xTka00xv2CNa6FzFaU/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3osxYhj4VNwxHdlE9G/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kqGcu9biWnARmTremJ/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT9IgwvIzQOUIeVxAI/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oxRmuYNCllPzhtScU/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mq5y2jHRCAqMo/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGlpYjc1N3dneWRmZTRqenh4dnVkZ2xlNnZoaHF1cHMxdjdkdWhvdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sIIhZliB2McAo/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHZzZXh5aDdoZ3Y5Z2ljdjN5bGg2aWhjbnlxeHlzajI5eGk0cGd2ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zBOqRPmkEF3Ow/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHZzZXh5aDdoZ3Y5Z2ljdjN5bGg2aWhjbnlxeHlzajI5eGk0cGd2ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VbAFrrDVGAvZu/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bDlicHhmY29kOTdtM3Z6dDZpMTAzdXFwZmF0aTdpYTRlaXVodWFqeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/scZPhLqaVOM1qG4lT9/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZHFrd3Rpd2NjNzc5ZW01eHdkMmRlcDFuM2JwMmlzaDFjbzlzbHI0ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kl5ctZSctCbE4/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXVyaTFpZGc4Z29uNmVxaHVjcHV2bmpjN3d4azlycGNhNnQ3eXpjZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Gf5QiP1TWCO8qYKmt7/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTdhNTJqMWpwczh2eHBrYjF2cnR2ejVoajllaTh0bHlnZGN4NHN2eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/h0Cq1ClzO3UpupFPjP/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c3hhc3VxODFudHFqNXo0ZzVpeTNsMHBlb2ltOWZsZ3Mxdmw0aG54aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5PDVFiKY3Iikg/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZHlydDZsM3Zpa2hkcmtqcW9zb3NyOTYzbTQ3MHdic3BkMHpoamdobyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2A4AuksVMmWXKfJjGl/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N3hnMjN4b3drMGw2Nm5lc3F4bmpwcndnMm4yOHg1MGN1a282b2ZkOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TdumyoY4DJPJdoYPXn/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWdibjdhNWEwa3plMDExcm1mb3MxaHRsZ2x5cTlsanh0YWx3ZmM3cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iKHUw8sPI9ZZMpDQbW/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWdibjdhNWEwa3plMDExcm1mb3MxaHRsZ2x5cTlsanh0YWx3ZmM3cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/il49eQumsbadTznOH7/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWdibjdhNWEwa3plMDExcm1mb3MxaHRsZ2x5cTlsanh0YWx3ZmM3cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vn4BC1T1zPGygC3ZdW/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NDd5Nzc4NGFyZTdvNGp6MjdrbmdwMTFjMzM4cWQ2NWtjZHVrejM1dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gPN93uuj5jSiOPfno8/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3amRwYmc4YW82MHF5aDN0bmVia3Z6MzAxdmJldThhNGk1aDVpMGNpbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/b8znhKsSuMArkwKjYD/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3anZybjR2NjdnaWM3aHYxaGdsa2IxMnd4bzh4NGtxdG56cGo0ZGtlcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qEqnCcJcgGDxGyNAKG/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3anZybjR2NjdnaWM3aHYxaGdsa2IxMnd4bzh4NGtxdG56cGo0ZGtlcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EfgerR3aPDPsdU50cH/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3amtpbGR0MXlwaDF2M2RkbnlsZzVyNzhxbTkxM2Y2cHpldTI0ZmRscSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/J6LTAH6FmI6J4o47bx/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWxzN29meHR6cGpseTV5bWowbTd3dGcyZDF1ODBkODJ5cjhqaWI0MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/16WWmxrz0i6BFjDNOO/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3enZlOXZxMGVpMnpwOGV1cnlvbTBkYzhjeXFydzVzeG83OWhnNXdyYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Z7G614BopkiX6qrqVc/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3amtpbGR0MXlwaDF2M2RkbnlsZzVyNzhxbTkxM2Y2cHpldTI0ZmRscSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWZUU7OAScUGz0tYmm/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eHp4ZG92bWtoaXAzMGQ5dmFsYXV0NGFnbnM2YW5pYnU2Zm55NW9wbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l378qbpG65OjOg7Ys/giphy.gif',
//       'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eHp4ZG92bWtoaXAzMGQ5dmFsYXV0NGFnbnM2YW5pYnU2Zm55NW9wbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4sSANVmzFXT3z1MfTx/giphy.gif',
//       'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjVqNnc3bjN4d3A1MmF2cnA2NzVyZDdoY2c1b2gybHNub2NyOWN1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VKK5qKuK1L9Q8owgop/giphy.gif',
//       'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGt2dm9mbmR4N281cTNwdTdyaXBtNHZqcnhxbnE5bXBwYjkxMWw5cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uLuZKxYfhsZ2GOKUmz/giphy.gif'
//     ];

//     // Flying squares with GIFs
//     const flyingSquares: Array<{
//       mesh: THREE.Mesh;
//       baseY: number;
//       waveOffset: number;
//       rotationSpeed: THREE.Vector3;
//       speed: number;
//     }> = [];

//     // Create flying squares - one for each GIF URL
//     for (let i = 0; i < gifUrls.length; i++) {
//       const gifUrl = gifUrls[i];
//       const mp4Url = gifUrl.replace(/\.gif$/, '.mp4');

//       const video = document.createElement('video');
//       video.src = mp4Url;
//       video.crossOrigin = 'anonymous';
//       video.loop = true;
//       video.muted = true;
//       video.playsInline = true;
//       video.play().catch((error) => {
//         console.error('Failed to play video:', error);
//         // Optional fallback to static GIF if MP4 fails
//         const textureLoader = new THREE.TextureLoader();
//         textureLoader.load(gifUrl, (texture) => {
//           texture.minFilter = THREE.LinearFilter;
//           texture.magFilter = THREE.LinearFilter;
//           squareMaterial.map = texture;
//           squareMaterial.needsUpdate = true;
//         });
//       });

//       const texture = new THREE.VideoTexture(video);
//       texture.minFilter = THREE.LinearFilter;
//       texture.magFilter = THREE.LinearFilter;

//       const squareMaterial = new THREE.MeshBasicMaterial({
//         map: texture,
//         transparent: true,
//         opacity: 0.9,
//         side: THREE.DoubleSide,
//       });

//       const squareSize = Math.random() * 8 + 6; // Random size between 6-14
//       const square = new THREE.Mesh(
//         new THREE.PlaneGeometry(squareSize, squareSize),
//         squareMaterial
//       );

//       // Random starting position
//       const startX = 150 + Math.random() * 100; // Start from right side
//       const baseY = Math.random() * 40 + 20; // Height between 20-60
//       const z = Math.random() * -80 - 20; // Depth variation

//       square.position.set(startX, baseY, z);

//       // Random slow rotation speeds
//       const rotationSpeed = new THREE.Vector3(
//         (Math.random() - 0.5) * 0.005, // Very slow rotation
//         (Math.random() - 0.5) * 0.005,
//         (Math.random() - 0.5) * 0.003
//       );

//       const speed = Math.random() * 0.3 + 0.2; // Speed between 0.2-0.5
//       const waveOffset = Math.random() * Math.PI * 2; // Random wave phase

//       scene.add(square);
//       flyingSquares.push({
//         mesh: square,
//         baseY: baseY,
//         waveOffset: waveOffset,
//         rotationSpeed: rotationSpeed,
//         speed: speed
//       });
//     }

//     // Mouse parallax
//     const handleMouseMove = (e: MouseEvent) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 2;
//       const y = (e.clientY / window.innerHeight - 0.5) * 2;
//       camera.position.x = x * 10;
//       camera.position.y = 10 + y * 3;
//       camera.lookAt(0, 0, -50);
//     };
//     document.addEventListener("mousemove", handleMouseMove);

//     // Animation variables
//     let time = 0;

//     // Animate
//     const animate = () => {
//       requestAnimationFrame(animate);
//       time += 0.01;

//       // Animate flying squares
//       flyingSquares.forEach((square, index) => {
//         // Move left
//         square.mesh.position.x -= square.speed;
        
//         // Wave-like vertical movement
//         const waveHeight = 5; // Amplitude of the wave
//         const waveFrequency = 0.5; // How fast the wave oscillates
//         square.mesh.position.y = square.baseY + 
//           Math.sin(time * waveFrequency + square.waveOffset) * waveHeight;
        
//         // Apply slow rotations
//         square.mesh.rotation.x += square.rotationSpeed.x;
//         square.mesh.rotation.y += square.rotationSpeed.y;
//         square.mesh.rotation.z += square.rotationSpeed.z;
        
//         // Reset position when square goes off screen
//         if (square.mesh.position.x < -150) {
//           square.mesh.position.x = 150 + Math.random() * 50;
//           square.baseY = Math.random() * 40 + 20;
//           square.mesh.position.z = Math.random() * -80 - 20;
//           square.waveOffset = Math.random() * Math.PI * 2;
//         }
//       });

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Resize handling
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       document.removeEventListener("mousemove", handleMouseMove);
//       mountRef.current?.removeChild(renderer.domElement);
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={mountRef} className="hero-section" />;
// };

// export default KinitoPetBackground;



























// Atempted to improve lag and weight of effect with claude

'use client';
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

// ── Tune these to balance visual density vs performance ────────────────────
const VISIBLE_SQUARES   = 16;   // planes in the scene at once
const PIXEL_RATIO_CAP   = 1.5;  // prevents 4× render cost on retina screens
const MOUSE_THROTTLE_MS = 32;   // ~30 fps is plenty for camera parallax
// ──────────────────────────────────────────────────────────────────────────

const GIF_URLS = [
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2toNHlnZWJzM3BjaHVtZHBpbW13ODY4bjIwZHIwMmlnY3FlYzU1ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Hcw7rjsIsHcmk/giphy.gif', // classic keyboard cat
      'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXY3ZXY1Z2FoM3Q5cTNhOHE1Y3lxbnQxeHNxZ3B3bnZpcXFkc3J6NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U7BxuF4pDyDUk/giphy.gif', // cats after anesthesia
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamZhNXZiMzY3bWFtZjI4amRpdDM1bDZkeXhoZTdqMXZxYzk5NWZmOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xAKhG9iFXynDh2LEg5/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamZhNXZiMzY3bWFtZjI4amRpdDM1bDZkeXhoZTdqMXZxYzk5NWZmOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3q2IYN87QjIg51kc/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamZhNXZiMzY3bWFtZjI4amRpdDM1bDZkeXhoZTdqMXZxYzk5NWZmOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OeEVCJ2UqMQNO/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmg1aTdkM2czeGJ1NHp0OHF5cnpscXdxY3c5NjFucWxnNHc0d2JkbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nZ9OnDVJoEaLPlVRc1/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmg1aTdkM2czeGJ1NHp0OHF5cnpscXdxY3c5NjFucWxnNHc0d2JkbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/31X5ofUNHSjjf0o2KQ/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N3FlczdodnI0ZmRkcWU4dm5zZ2t3Y3NnZHVkb2oybWUzM3VkNWxqYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SGkQDlq8Fb5860fGEX/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWtvdGNxMnc4dnZvYTM3M3Bpc3I4aGpiYjRpangzejQ0cjZkeW9pdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6fIYpfMIAawhlUtO/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWtvdGNxMnc4dnZvYTM3M3Bpc3I4aGpiYjRpangzejQ0cjZkeW9pdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEduYVnErlEDkhfCU/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MWtvdGNxMnc4dnZvYTM3M3Bpc3I4aGpiYjRpangzejQ0cjZkeW9pdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/f7Gvu2jZuqdKy7YVtj/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N2Q3ejVwNW1wY24wNW9mY3pzcGJldjh0dHU5Z2t4em82ZjV1YnM2NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4Jzi0iyKHLe1qT9S/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cDd2bXNxZm16cDdyc3Y0dnF6amNhMWhoNmtsdDYwa3BoMXA2OHR1NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HbZAHCByI13YGrNzeJ/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Y2VieXV3eGVhMnExbmI4emFwcm1jNmZlNHdrN2k1NTIyMWdjazE3ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MGiARNEh9BuYU/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Y2VieXV3eGVhMnExbmI4emFwcm1jNmZlNHdrN2k1NTIyMWdjazE3ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xTka00xv2CNa6FzFaU/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3osxYhj4VNwxHdlE9G/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kqGcu9biWnARmTremJ/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT9IgwvIzQOUIeVxAI/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oxRmuYNCllPzhtScU/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjcHZtdXI4MTczcDAzam5zZmt5aXkzN3ZvdXF4N2RpaHRqZjdxbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mq5y2jHRCAqMo/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGlpYjc1N3dneWRmZTRqenh4dnVkZ2xlNnZoaHF1cHMxdjdkdWhvdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sIIhZliB2McAo/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHZzZXh5aDdoZ3Y5Z2ljdjN5bGg2aWhjbnlxeHlzajI5eGk0cGd2ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zBOqRPmkEF3Ow/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHZzZXh5aDdoZ3Y5Z2ljdjN5bGg2aWhjbnlxeHlzajI5eGk0cGd2ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VbAFrrDVGAvZu/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bDlicHhmY29kOTdtM3Z6dDZpMTAzdXFwZmF0aTdpYTRlaXVodWFqeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/scZPhLqaVOM1qG4lT9/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZHFrd3Rpd2NjNzc5ZW01eHdkMmRlcDFuM2JwMmlzaDFjbzlzbHI0ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kl5ctZSctCbE4/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXVyaTFpZGc4Z29uNmVxaHVjcHV2bmpjN3d4azlycGNhNnQ3eXpjZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Gf5QiP1TWCO8qYKmt7/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTdhNTJqMWpwczh2eHBrYjF2cnR2ejVoajllaTh0bHlnZGN4NHN2eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/h0Cq1ClzO3UpupFPjP/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c3hhc3VxODFudHFqNXo0ZzVpeTNsMHBlb2ltOWZsZ3Mxdmw0aG54aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5PDVFiKY3Iikg/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZHlydDZsM3Zpa2hkcmtqcW9zb3NyOTYzbTQ3MHdic3BkMHpoamdobyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2A4AuksVMmWXKfJjGl/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N3hnMjN4b3drMGw2Nm5lc3F4bmpwcndnMm4yOHg1MGN1a282b2ZkOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TdumyoY4DJPJdoYPXn/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWdibjdhNWEwa3plMDExcm1mb3MxaHRsZ2x5cTlsanh0YWx3ZmM3cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iKHUw8sPI9ZZMpDQbW/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWdibjdhNWEwa3plMDExcm1mb3MxaHRsZ2x5cTlsanh0YWx3ZmM3cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/il49eQumsbadTznOH7/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWdibjdhNWEwa3plMDExcm1mb3MxaHRsZ2x5cTlsanh0YWx3ZmM3cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vn4BC1T1zPGygC3ZdW/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NDd5Nzc4NGFyZTdvNGp6MjdrbmdwMTFjMzM4cWQ2NWtjZHVrejM1dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gPN93uuj5jSiOPfno8/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3amRwYmc4YW82MHF5aDN0bmVia3Z6MzAxdmJldThhNGk1aDVpMGNpbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/b8znhKsSuMArkwKjYD/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3anZybjR2NjdnaWM3aHYxaGdsa2IxMnd4bzh4NGtxdG56cGo0ZGtlcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qEqnCcJcgGDxGyNAKG/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3anZybjR2NjdnaWM3aHYxaGdsa2IxMnd4bzh4NGtxdG56cGo0ZGtlcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EfgerR3aPDPsdU50cH/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3amtpbGR0MXlwaDF2M2RkbnlsZzVyNzhxbTkxM2Y2cHpldTI0ZmRscSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/J6LTAH6FmI6J4o47bx/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWxzN29meHR6cGpseTV5bWowbTd3dGcyZDF1ODBkODJ5cjhqaWI0MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/16WWmxrz0i6BFjDNOO/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3enZlOXZxMGVpMnpwOGV1cnlvbTBkYzhjeXFydzVzeG83OWhnNXdyYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Z7G614BopkiX6qrqVc/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3amtpbGR0MXlwaDF2M2RkbnlsZzVyNzhxbTkxM2Y2cHpldTI0ZmRscSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWZUU7OAScUGz0tYmm/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eHp4ZG92bWtoaXAzMGQ5dmFsYXV0NGFnbnM2YW5pYnU2Zm55NW9wbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l378qbpG65OjOg7Ys/giphy.gif',
      'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eHp4ZG92bWtoaXAzMGQ5dmFsYXV0NGFnbnM2YW5pYnU2Zm55NW9wbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4sSANVmzFXT3z1MfTx/giphy.gif',
      'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjVqNnc3bjN4d3A1MmF2cnA2NzVyZDdoY2c1b2gybHNub2NyOWN1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VKK5qKuK1L9Q8owgop/giphy.gif',
      'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGt2dm9mbmR4N281cTNwdTdyaXBtNHZqcnhxbnE5bXBwYjkxMWw5cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uLuZKxYfhsZ2GOKUmz/giphy.gif'
    ];
// ↑ Replace with your actual self-hosted paths (or keep Giphy URLs while testing)

const FALLBACK_COLORS = [0xff00ff, 0x00ffff, 0xffff00, 0xff0080, 0x80ff00];

const KinitoPetBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // ── Scene & Camera ─────────────────────────────────────────────────────
    const scene  = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 20, 20);

    // ── Renderer ───────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, PIXEL_RATIO_CAP));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // ── Chess floor ────────────────────────────────────────────────────────
    const chessCanvas = document.createElement('canvas');
    chessCanvas.width = chessCanvas.height = 128;
    const ctx = chessCanvas.getContext('2d')!;
    ctx.fillStyle = '#cccccc'; ctx.fillRect(0, 0, 64, 64); ctx.fillRect(64, 64, 64, 64);
    ctx.fillStyle = '#000000'; ctx.fillRect(64, 0, 64, 64); ctx.fillRect(0, 64, 64, 64);
    const chessTex = new THREE.CanvasTexture(chessCanvas);
    chessTex.wrapS = chessTex.wrapT = THREE.RepeatWrapping;
    chessTex.repeat.set(40, 40);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(500, 500),
      new THREE.MeshBasicMaterial({ map: chessTex, side: THREE.DoubleSide })
    );
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // ── Mountains — ONE shared geometry + ONE shared material ──────────────
    const mtnGeo = new THREE.ConeGeometry(1, 1, 6);
    const mtnMat = new THREE.MeshBasicMaterial({ color: 0x4444ff, wireframe: true });
    for (let i = 0; i < 25; i++) {
      const dist   = -Math.random() * 180 - 50;
      const sf     = Math.abs(dist) / 40;
      const h      = sf * (Math.random() * 4 + 6);
      const r      = sf * (Math.random() * 3 + 3);
      const m      = new THREE.Mesh(mtnGeo, mtnMat);
      m.scale.set(r, h, r);
      m.position.set((Math.random() - 0.5) * 180, h / 2, dist);
      scene.add(m);
    }

    // Light
    const sun = new THREE.DirectionalLight(0xffffff, 1);
    sun.position.set(50, 100, -50);
    scene.add(sun);

    // ── Flying squares ─────────────────────────────────────────────────────
    // ONE shared geometry for every square — just scaled differently per mesh
    const planeGeo = new THREE.PlaneGeometry(1, 1);

    type Square = {
      mesh:       THREE.Mesh;
      mat:        THREE.MeshBasicMaterial;
      baseY:      number;
      waveOffset: number;
      rotX:       number;
      rotY:       number;
      rotZ:       number;
      speed:      number;
    };

    // Shuffle URL pool so order is random each visit
    const urlPool = [...GIF_URLS].sort(() => Math.random() - 0.5);
    const squares: Square[] = [];

    // Pre-build all meshes immediately with placeholder colours —
    // the scene is populated and rendering before a single network request completes.
    for (let i = 0; i < VISIBLE_SQUARES; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color:       FALLBACK_COLORS[i % FALLBACK_COLORS.length],
        transparent: true,
        opacity:     0.9,
        side:        THREE.DoubleSide,
      });

      const size = Math.random() * 8 + 6;
      const mesh = new THREE.Mesh(planeGeo, mat);
      mesh.scale.set(size, size, 1);

      const baseY = Math.random() * 40 + 20;
      // Stagger X positions so they don't all arrive at once
      mesh.position.set(150 + i * 18 + Math.random() * 20, baseY, Math.random() * -80 - 20);

      scene.add(mesh);
      squares.push({
        mesh,
        mat,
        baseY,
        waveOffset: Math.random() * Math.PI * 2,
        rotX:       (Math.random() - 0.5) * 0.005,
        rotY:       (Math.random() - 0.5) * 0.005,
        rotZ:       (Math.random() - 0.5) * 0.003,
        speed:      Math.random() * 0.3 + 0.2,
      });
    }

    // Load textures staggered — one every 80 ms so the browser
    // never fans out 40+ simultaneous requests
    const loader    = new THREE.TextureLoader();
    const textures: THREE.Texture[] = [];
    let   loadedCount = 0;

    urlPool.slice(0, VISIBLE_SQUARES).forEach((url, i) => {
      setTimeout(() => {
        loader.load(
          url,
          (tex) => {
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
            textures[i] = tex;
            squares[i].mat.map   = tex;
            squares[i].mat.color.set(0xffffff); // clear tint so texture shows true colour
            squares[i].mat.needsUpdate = true;
            loadedCount++;
          },
          undefined,
          () => { loadedCount++; } // failed — placeholder colour remains, no crash
        );
      }, i * 80);
    });

    // ── Throttled mouse parallax with lerp ────────────────────────────────
    let targetX = 0, targetY = 20, lastMouse = 0;
    const onMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouse < MOUSE_THROTTLE_MS) return;
      lastMouse = now;
      targetX =  (e.clientX / window.innerWidth  - 0.5) * 20;
      targetY = 20 + (e.clientY / window.innerHeight - 0.5) * 6;
    };
    document.addEventListener('mousemove', onMouseMove);

    // ── Pause rendering when hero is off-screen (fixes scroll jank) ───────
    let visible = true;
    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0.01 }
    );
    observer.observe(mountRef.current!);

    // ── Animation loop ─────────────────────────────────────────────────────
    let time = 0;
    let rafId: number;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (!visible) return;

      time += 0.01;

      // Smooth camera glide
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(0, 10, -20);

      for (const sq of squares) {
        sq.mesh.position.x -= sq.speed;
        sq.mesh.position.y  = sq.baseY + Math.sin(time * 0.5 + sq.waveOffset) * 5;
        sq.mesh.rotation.x += sq.rotX;
        sq.mesh.rotation.y += sq.rotY;
        sq.mesh.rotation.z += sq.rotZ;

        if (sq.mesh.position.x < -150) {
          sq.mesh.position.x = 150 + Math.random() * 50;
          sq.baseY            = Math.random() * 40 + 20;
          sq.mesh.position.z  = Math.random() * -80 - 20;
          sq.waveOffset       = Math.random() * Math.PI * 2;
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ─────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // ── Cleanup ────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('mousemove', onMouseMove);
      textures.forEach(t => t?.dispose());
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="hero-section" />;
};

export default KinitoPetBackground;