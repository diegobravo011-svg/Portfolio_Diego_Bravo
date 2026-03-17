import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const MountainMonochromeVibe = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#fdfcf5'); 

        const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
        camera.position.set(1.5, 1.2, 2.5);
        camera.lookAt(0, 0.2, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        const positions = [];
        const colors = [];
        
        const size = 1.6; 
        const resolution = 200; 

        for (let i = 0; i <= resolution; i++) {
            for (let j = 0; j <= resolution; j++) {
                const x = (i / resolution - 0.5) * size;
                const z = (j / resolution - 0.5) * size;
                
                // Matemática de la montaña (sin el corte de la base)
                let y = Math.exp(-(x * x + z * z) * 4) * 1.2;
                y += Math.abs(Math.sin(x * 8 + z * 5)) * 0.15 * Math.exp(-(x * x + z * z) * 2);
                y += Math.abs(Math.sin(x * 20 - z * 15)) * 0.05 * Math.exp(-(x * x + z * z) * 2);
                y += Math.abs(Math.sin(x * 40 + z * 40)) * 0.02; 

                if (Math.random() > 0.85) continue;

                positions.push(x, y, z);

                // Ajuste de tonos: blancos más apagados
                const slope = x + z; 
                let brightness = (y * 0.6) + (slope * 0.3) + 0.2;
                
                if (brightness > 0.65) brightness = 0.78; // Gris claro en lugar de blanco puro (1.0)
                else if (brightness < 0.3) brightness = 0.18; // Gris muy oscuro/negro
                
                colors.push(brightness, brightness, brightness);
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.015,
            vertexColors: true,
            transparent: true,
            opacity: 0.9
        });

        const pointsMesh = new THREE.Points(geometry, material);
        
        // Reducir el tamaño de la malla para que sea más pequeña
        pointsMesh.scale.set(0.65, 0.65, 0.65);
        pointsMesh.position.y = -0.3;
        
        scene.add(pointsMesh);

        let animationFrameId;
        let time = 0;

        const animate = () => {
            time += 0.003; 
            pointsMesh.rotation.y = time;

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            const w = mountRef.current.clientWidth;
            const h = mountRef.current.clientHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            if(mountRef.current) {
                while(mountRef.current.firstChild) {
                    mountRef.current.removeChild(mountRef.current.firstChild);
                }
            }
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', background: '#fdfcf5', padding: '20px 0' }}>
            <div ref={mountRef} style={{ width: '100%', maxWidth: '350px', height: '350px' }} />
        </div>
    );
};

export default MountainMonochromeVibe;
