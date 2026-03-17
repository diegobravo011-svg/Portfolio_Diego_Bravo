import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const MountainHero = ({ onEnter }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // FIX CLAVE: Limpiamos el contenedor por si React lo ejecuta dos veces
        mountRef.current.innerHTML = '';

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        const scene = new THREE.Scene();
        // Hacemos la escena transparente para que tome el color del div padre
        scene.background = null; 

        const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
        camera.position.set(1.5, 1.2, 2.5);
        camera.lookAt(0, 0.2, 0);

        // Alpha true hace que no tenga un fondo blanco cuadrado sólido
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Optimización
        mountRef.current.appendChild(renderer.domElement);

        const positions = [];
        const colors = [];
        const size = 1.6; 
        const resolution = 180; // Un pelín menos para que cargue ultra rápido

        for (let i = 0; i <= resolution; i++) {
            for (let j = 0; j <= resolution; j++) {
                const x = (i / resolution - 0.5) * size;
                const z = (j / resolution - 0.5) * size;
                
                let y = Math.exp(-(x * x + z * z) * 4) * 1.2;
                y += Math.abs(Math.sin(x * 8 + z * 5)) * 0.15 * Math.exp(-(x * x + z * z) * 2);
                y += Math.abs(Math.sin(x * 20 - z * 15)) * 0.05 * Math.exp(-(x * x + z * z) * 2);
                y += Math.abs(Math.sin(x * 40 + z * 40)) * 0.02; 

                if (Math.random() > 0.85) continue;

                positions.push(x, y, z);

                const slope = x + z; 
                let brightness = (y * 0.6) + (slope * 0.3) + 0.2;
                
                if (brightness > 0.65) brightness = 0.78; 
                else if (brightness < 0.3) brightness = 0.18; 
                
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
            opacity: 0.85
        });

        const pointsMesh = new THREE.Points(geometry, material);
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
            if (!mountRef.current) return;
            const w = mountRef.current.clientWidth;
            const h = mountRef.current.clientHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        // FIX CLAVE 2: Limpieza extrema al desmontar
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    // Layout para que quede como en tu foto pero fusionado bien chill
    return (
        <div 
            onClick={onEnter}
            style={{ 
                position: 'relative', 
                width: '100%', 
                height: '100vh', 
                background: '#F5F5F0', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                overflow: 'hidden',
                cursor: 'pointer'
            }}
        >
            
            {/* El Canvas en el fondo */}
            <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />
            
            {/* Título flotando en el medio */}
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', pointerEvents: 'none' }}>
                <h1 style={{ 
                    fontSize: 'clamp(2.5rem, 8vw, 6rem)', 
                    letterSpacing: '0.2em', 
                    color: '#1a1a1a', 
                    margin: 0, 
                    fontFamily: 'monospace',
                    fontWeight: '400' 
                }}>
                    BIENVENIDO
                </h1>
            </div>

            {/* Hint de entrada en el fondo inferior para que no se pise con la montaña */}
            <div style={{ position: 'absolute', bottom: '10vh', left: 0, width: '100%', textAlign: 'center', zIndex: 1, pointerEvents: 'none' }}>
                <p style={{ fontSize: '0.75rem', letterSpacing: '0.25em', color: '#1a1a1a', textTransform: 'uppercase', opacity: 0.5 }}>
                    Haz clic en cualquier lugar para entrar
                </p>
            </div>

        </div>
    );
};

export default MountainHero;
