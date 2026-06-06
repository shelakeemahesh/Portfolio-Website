import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = isMobile ? 150 : 600; // Optimized count for smooth frame rates

  // Instantiate shared WebGL assets once
  const [pointsGeom, pointsMat] = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const radius = isMobile ? 6 : 9;
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(u);

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(arr, 3));

    const mat = new THREE.PointsMaterial({
      color: "#c8a96e",
      size: isMobile ? 0.04 : 0.03,
      transparent: true,
      opacity: 0.3,
      sizeAttenuation: true,
      depthWrite: false,
    });

    return [geom, mat];
  }, [count]);

  // Clean up WebGL buffers on component unmount
  useEffect(() => {
    return () => {
      pointsGeom.dispose();
      pointsMat.dispose();
    };
  }, [pointsGeom, pointsMat]);

  // Execute rotations cheaply on the GPU via transformation matrices
  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.03;
    pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.04;
  });

  return <points ref={pointsRef} geometry={pointsGeom} material={pointsMat} />;
};

interface IcosahedronGroupProps {
  vertices: [number, number, number][];
}

const IcosahedronGroup: React.FC<IcosahedronGroupProps> = ({ vertices }) => {
  const groupRef = useRef<THREE.Group>(null);
  const radius = isMobile ? 1.6 : 2.2;

  // Single shared 3D assets for core shape and all 12 vertex spheres (1 draw call instead of 12)
  const [icoGeom, icoMat, sphereGeom, sphereMat] = useMemo(() => {
    const ig = new THREE.IcosahedronGeometry(radius, 0);
    const im = new THREE.MeshBasicMaterial({
      color: "#c8a96e",
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const sg = new THREE.SphereGeometry(0.04, 8, 8);
    const sm = new THREE.MeshBasicMaterial({
      color: "#e2c98a",
      transparent: true,
      opacity: 0.8,
    });
    return [ig, im, sg, sm];
  }, [radius]);

  // Dispose WebGL resources on unmount
  useEffect(() => {
    return () => {
      icoGeom.dispose();
      icoMat.dispose();
      sphereGeom.dispose();
      sphereMat.dispose();
    };
  }, [icoGeom, icoMat, sphereGeom, sphereMat]);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x += 0.0015;
    groupRef.current.rotation.y += 0.006;
  });

  return (
    <group ref={groupRef}>
      {/* Central rotating gold wireframe Icosahedron */}
      <mesh geometry={icoGeom} material={icoMat} />

      {/* 12 Vertex dots sharing a single geometry and material to minimize WebGL overhead */}
      {vertices.map((pos, idx) => (
        <mesh
          key={idx}
          position={pos}
          geometry={sphereGeom}
          material={sphereMat}
        />
      ))}
    </group>
  );
};

const OrbitingRings: React.FC = () => {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  const r1 = isMobile ? 2.4 : 3.2;
  const r2 = isMobile ? 3.0 : 4.0;
  const r3 = isMobile ? 3.8 : 5.0;

  // Single shared torus meshes to prevent heap thrashing
  const [geom1, geom2, geom3, mat1, mat2, mat3] = useMemo(() => {
    const g1 = new THREE.TorusGeometry(r1, 0.012, 8, 64);
    const g2 = new THREE.TorusGeometry(r2, 0.012, 8, 64);
    const g3 = new THREE.TorusGeometry(r3, 0.012, 8, 64);

    const m1 = new THREE.MeshBasicMaterial({ color: "#c8a96e", transparent: true, opacity: 0.18 });
    const m2 = new THREE.MeshBasicMaterial({ color: "#c8a96e", transparent: true, opacity: 0.12 });
    const m3 = new THREE.MeshBasicMaterial({ color: "#c8a96e", transparent: true, opacity: 0.07 });

    return [g1, g2, g3, m1, m2, m3];
  }, [r1, r2, r3]);

  useEffect(() => {
    return () => {
      geom1.dispose();
      geom2.dispose();
      geom3.dispose();
      mat1.dispose();
      mat2.dispose();
      mat3.dispose();
    };
  }, [geom1, geom2, geom3, mat1, mat2, mat3]);

  useFrame(() => {
    if (ring1.current) {
      ring1.current.rotation.x += 0.0035;
      ring1.current.rotation.y += 0.0015;
    }
    if (ring2.current) {
      ring2.current.rotation.y += 0.0025;
      ring2.current.rotation.z += 0.0020;
    }
    if (ring3.current) {
      ring3.current.rotation.z += 0.0015;
      ring3.current.rotation.x += 0.0030;
    }
  });

  return (
    <>
      <mesh ref={ring1} geometry={geom1} material={mat1} />
      <mesh ref={ring2} geometry={geom2} material={mat2} />
      <mesh ref={ring3} geometry={geom3} material={mat3} />
    </>
  );
};

const Scene: React.FC = () => {
  const radius = isMobile ? 1.6 : 2.2;
  
  const vertices = useMemo(() => {
    const geom = new THREE.IcosahedronGeometry(radius, 0);
    const pos = geom.getAttribute('position');
    const points: [number, number, number][] = [];
    const seen = new Set<string>();
    for (let i = 0; i < pos.count; i++) {
      const x = parseFloat(pos.getX(i).toFixed(4));
      const y = parseFloat(pos.getY(i).toFixed(4));
      const z = parseFloat(pos.getZ(i).toFixed(4));
      const key = `${x},${y},${z}`;
      if (!seen.has(key)) {
        seen.add(key);
        points.push([x, y, z]);
      }
    }
    geom.dispose();
    return points;
  }, [radius]);

  return (
    <>
      <ambientLight color="#e2c98a" intensity={0.25} />
      <pointLight position={[5, 5, 5]} color="#c8a96e" intensity={1.5} />
      <ParticleField />
      <IcosahedronGroup vertices={vertices} />
      <OrbitingRings />
    </>
  );
};

const HeroCanvas: React.FC = () => {
  return (
    <div className="w-full h-[280px] md:h-full md:absolute md:inset-0 z-0 bg-transparent pointer-events-none mx-auto">
      <Canvas
        camera={{ position: [0, 0, isMobile ? 11 : 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'none' }}
        dpr={[1, 1.5]}
        frameloop="always"
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
