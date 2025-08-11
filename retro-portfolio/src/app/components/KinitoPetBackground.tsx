'use client';
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
// import ModelViewer from "@/components/ModelViewer/ModelViewer"

const KinitoPetBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // sky blue

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 20);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create chessboard texture dynamically
    function createChessTexture(
      squareSize = 64,
      color1 = "#cccccc",
      color2 = "#000000"
    ) {
      const canvas = document.createElement("canvas");
      canvas.width = squareSize * 2;
      canvas.height = squareSize * 2;
      const ctx = canvas.getContext("2d")!;

      ctx.fillStyle = color1;
      ctx.fillRect(0, 0, squareSize, squareSize);
      ctx.fillRect(squareSize, squareSize, squareSize, squareSize);

      ctx.fillStyle = color2;
      ctx.fillRect(squareSize, 0, squareSize, squareSize);
      ctx.fillRect(0, squareSize, squareSize, squareSize);

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(40, 40);
      return texture;
    }

    // Floor
    const chessTexture = createChessTexture();
    const floorMaterial = new THREE.MeshBasicMaterial({
      map: chessTexture,
      side: THREE.DoubleSide,
    });
    const floorGeometry = new THREE.PlaneGeometry(500, 500);
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // Mountains
    const mountainMaterial = new THREE.MeshBasicMaterial({
      color: 0x4444ff,
      wireframe: true,
    });
    for (let i = 0; i < 25; i++) {
      const distance = -Math.random() * 180 - 50;
      const sizeFactor = Math.abs(distance) / 40;
      const height = sizeFactor * (Math.random() * 4 + 6);
      const radius = sizeFactor * (Math.random() * 3 + 3);
      const mountain = new THREE.Mesh(
        new THREE.ConeGeometry(radius, height, 6),
        mountainMaterial
      );
      mountain.position.set(
        (Math.random() - 0.5) * 180,
        height / 2,
        distance
      );
      scene.add(mountain);
    }

    // Light
    const sunLight = new THREE.DirectionalLight(0xffffff, 1);
    sunLight.position.set(50, 100, -50);
    scene.add(sunLight);

    // Clouds
    const loader = new THREE.TextureLoader();
    const clouds: THREE.Mesh[] = [];
    loader.load("https://i.ibb.co/9wNQ0tY/cloud.png", (cloudTexture) => {
      for (let i = 0; i < 5; i++) {
        const cloudMaterial = new THREE.MeshLambertMaterial({
          map: cloudTexture,
          transparent: true,
          opacity: 0.8,
          side: THREE.DoubleSide,
        });
        const cloud = new THREE.Mesh(
          new THREE.PlaneGeometry(40, 20),
          cloudMaterial
        );
        cloud.position.set(
          Math.random() * 200 - 100,
          Math.random() * 20 + 30,
          -100
        );
        scene.add(cloud);
        clouds.push(cloud);
      }
    });

    // Mouse parallax
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      camera.position.x = x * 10;
      camera.position.y = 10 + y * 3;
      camera.lookAt(0, 0, -50);
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);

      // Move clouds
      clouds.forEach((cloud) => {
        cloud.position.x += 0.05;
        if (cloud.position.x > 150) cloud.position.x = -150;
        cloud.lookAt(camera.position);
      });

      renderer.render(scene, camera);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="hero-section" >

    
  </div>;
};

export default KinitoPetBackground;
