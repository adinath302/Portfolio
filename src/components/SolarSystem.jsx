import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import planets from '../data/planets';

const SUN_COLOR = 0x8b5cf6;

const makeGlowTexture = (inner, outer) => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, inner);
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(canvas);
};

const makeLabelSprite = (text, color) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 512;
  canvas.height = 128;

  const font = 'bold 54px "Space Grotesk", system-ui, sans-serif';
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const textWidth = ctx.measureText(text).width;

  const pad = 36;
  const w = textWidth + pad * 2;
  const x = 256 - w / 2;
  const y = 64 - 34;

  ctx.fillStyle = 'rgba(10, 12, 26, 0.78)';
  const radius = 34;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + 68, radius);
  ctx.arcTo(x + w, y + 68, x, y + 68, radius);
  ctx.arcTo(x, y + 68, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = color;
  ctx.fillText(text, 256, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 8;
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(7, 1.75, 1);
  sprite.position.y = 2.2;
  return sprite;
};

const SolarSystem = ({ selectedId, onSelect }) => {
  const mountRef = useRef(null);
  const selectedIdRef = useRef(null);
  const callbacksRef = useRef({ onSelect });
  callbacksRef.current.onSelect = onSelect;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let camera;
    let renderer;
    let controls;
    let animationId;
    const clock = new THREE.Clock();

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return undefined;
    }    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      300
    );
    camera.position.set(0, 8, 26);

    const scene = new THREE.Scene();

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 8;
    controls.maxDistance = 60;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    scene.add(new THREE.AmbientLight(0x404070, 0.9));
    const directional = new THREE.DirectionalLight(0xffffff, 1.2);
    directional.position.set(10, 20, 10);
    scene.add(directional);
    scene.add(new THREE.PointLight(0x8b5cf6, 2.2, 80));

    const starCount = 1600;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const r = 60 + Math.random() * 160;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const starsGeo = new THREE.BufferGeometry();
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(
      starsGeo,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.12,
        transparent: true,
        opacity: 0.85,
      })
    );
    scene.add(stars);

    const sunMesh = new THREE.Mesh(
      new THREE.SphereGeometry(2.3, 48, 48),
      new THREE.MeshBasicMaterial({ color: SUN_COLOR })
    );
    scene.add(sunMesh);

    const glowSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: makeGlowTexture('rgba(139, 92, 246, 0.55)', 'rgba(139, 92, 246, 0)'),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    glowSprite.scale.set(26, 26, 1);
    scene.add(glowSprite);

    const sunLabel = makeLabelSprite('ADINATH GAWARE', '#eef0ff');
    sunLabel.scale.set(11, 2.75, 1);
    sunLabel.position.y = 5.2;
    scene.add(sunLabel);

    const bodies = [];
    planets.forEach((planet, index) => {
      const phase = (index / planets.length) * Math.PI * 2;
      const group = new THREE.Group();

      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(planet.radius, 40, 40),
        new THREE.MeshStandardMaterial({
          color: planet.color,
          emissive: planet.color,
          emissiveIntensity: 0.4,
          roughness: 0.35,
          metalness: 0.1,
        })
      );
      mesh.userData.planetId = planet.id;
      group.add(mesh);

      const label = makeLabelSprite(planet.name, '#eef0ff');
      label.scale.set(Math.max(4.5, planet.name.length * 0.62), 1.3, 1);
      group.add(label);

      const ring = [];
      const segments = 96;
      for (let i = 0; i <= segments; i += 1) {
        const a = (i / segments) * Math.PI * 2;
        ring.push(
          new THREE.Vector3(Math.cos(a) * planet.orbitRadius, 0, Math.sin(a) * planet.orbitRadius)
        );
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(ring);
      const ringLine = new THREE.Line(
        ringGeo,
        new THREE.LineBasicMaterial({
          color: 0x3a3f66,
          transparent: true,
          opacity: 0.45,
        })
      );
      scene.add(ringLine);

      bodies.push({
        id: planet.id,
        group,
        mesh,
        radius: planet.radius,
        orbitRadius: planet.orbitRadius,
        orbitSpeed: planet.orbitSpeed,
        color: planet.color,
        phase,
        angle: phase,
      });
      scene.add(group);
    });

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let hoveredId = null;
    let isDown = false;
    let moved = false;

    const updatePointer = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const onPointerMove = (event) => {
      updatePointer(event);
      if (isDown) moved = true;

      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(bodies.map((b) => b.mesh));
      const hitId = hits.length ? hits[0].object.userData.planetId : null;

      if (hitId !== hoveredId) {
        if (hoveredId) {
          const prev = bodies.find((b) => b.id === hoveredId);
          if (prev) {
            prev.mesh.scale.setScalar(1);
            prev.mesh.material.emissiveIntensity = 0.4;
          }
        }
        hoveredId = hitId;
        if (hoveredId) {
          const cur = bodies.find((b) => b.id === hoveredId);
          if (cur) {
            cur.mesh.scale.setScalar(1.15);
            cur.mesh.material.emissiveIntensity = 0.8;
            renderer.domElement.style.cursor = 'pointer';
          }
        } else {
          renderer.domElement.style.cursor = 'grab';
        }
      }
    };

    const onPointerDown = () => {
      isDown = true;
      moved = false;
    };

    const onPointerUp = (event) => {
      if (!isDown) return;
      isDown = false;
      if (moved) return;

      updatePointer(event);
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(bodies.map((b) => b.mesh));
      if (hits.length) {
        callbacksRef.current.onSelect(hits[0].object.userData.planetId);
      } else {
        callbacksRef.current.onSelect(null);
      }
    };

    const el = renderer.domElement;
    el.style.touchAction = 'none';
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);

    const overviewPos = new THREE.Vector3(0, 8, 26);
    const origin = new THREE.Vector3(0, 0, 0);
    const flightTarget = new THREE.Vector3();
    const flightLookAt = new THREE.Vector3();
    let flightActive = false;
    let returning = false;

    mount.__bodies = bodies;
    mount.__flight = {
      get target() {
        return flightTarget;
      },
      get lookAt() {
        return flightLookAt;
      },
      set active(v) {
        flightActive = v;
      },
      get active() {
        return flightActive;
      },
      set returning(v) {
        returning = v;
      },
      get returning() {
        return returning;
      },
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);

      bodies.forEach((body) => {
        const paused = selectedIdRef.current === body.id;
        const speedFactor = paused ? 0.15 : 1;
        body.angle += body.orbitSpeed * dt * speedFactor;
        const x = Math.cos(body.angle) * body.orbitRadius;
        const z = Math.sin(body.angle) * body.orbitRadius;
        body.group.position.set(x, 0, z);
      });

      if (flightActive) {
        camera.position.lerp(flightTarget, 0.08);
        controls.target.lerp(flightLookAt, 0.1);
        if (camera.position.distanceTo(flightTarget) < 0.15) {
          flightActive = false;
          controls.autoRotate = false;
        }
      } else if (returning) {
        camera.position.lerp(overviewPos, 0.08);
        controls.target.lerp(origin, 0.1);
        if (camera.position.distanceTo(overviewPos) < 0.2) {
          returning = false;
          controls.autoRotate = true;
        }
      }

      stars.rotation.y += dt * 0.01;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          const materials = Array.isArray(obj.material)
            ? obj.material
            : [obj.material];
          materials.forEach((mat) => {
            Object.values(mat).forEach((value) => {
              if (value && value.isTexture) value.dispose();
            });
            mat.dispose();
          });
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
      controls.dispose();
    };
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const bodies = mount.__bodies;
    const flight = mount.__flight;
    if (!bodies || !flight) return;

    selectedIdRef.current = selectedId;

    if (selectedId) {
      const body = bodies.find((b) => b.id === selectedId);
      if (body) {
        const pos = body.group.position
          .clone()
          .normalize()
          .multiplyScalar(body.orbitRadius + 4.5);
        pos.y += 1.5;
        flight.target.copy(pos);
        flight.lookAt.copy(body.group.position);
        flight.active = true;
        flight.returning = false;
      }
    } else {
      flight.returning = true;
      flight.active = false;
    }
  }, [selectedId]);

  return <div ref={mountRef} className="absolute inset-0" />;
};

export default SolarSystem;
