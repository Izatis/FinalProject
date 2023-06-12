/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --types
Author: MathieuGlt (https://sketchfab.com/MathieuGlt)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/camping-in-the-sky-df76ae2a44cc4bcd9a5f6bd88970c1bb
Title: Camping in the sky
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylindre006__0: THREE.Mesh;
    Cylindre007__0: THREE.Mesh;
    Cylindre008__0: THREE.Mesh;
    Cylindre009__0: THREE.Mesh;
    Cylindre010__0: THREE.Mesh;
    Torus002__0: THREE.Mesh;
    Torus003__0: THREE.Mesh;
    Cube_SceneMaterial_0: THREE.Mesh;
    Torus001_SceneMaterial_0: THREE.Mesh;
    Cylindre001_SceneMaterial_0: THREE.Mesh;
    Cylindre003_SceneMaterial_0: THREE.Mesh;
    Cylindre011_SceneMaterial_0: THREE.Mesh;
    Cube015_SceneMaterial_0: THREE.Mesh;
    Cube017__0: THREE.Mesh;
    Cube018__0: THREE.Mesh;
    Cube019__0: THREE.Mesh;
    Cube020__0: THREE.Mesh;
    Cube021__0: THREE.Mesh;
    Cube022__0: THREE.Mesh;
    Cube023__0: THREE.Mesh;
    Cube024__0: THREE.Mesh;
    Cube025__0: THREE.Mesh;
    Cube026__0: THREE.Mesh;
    Cube027__0: THREE.Mesh;
    Cube028__0: THREE.Mesh;
    Cube029__0: THREE.Mesh;
    Cube030__0: THREE.Mesh;
    Cube031__0: THREE.Mesh;
    Cube032__0: THREE.Mesh;
    Cylindre013_SceneMaterial_0: THREE.Mesh;
    ["Icosph��re001_SceneMaterial_0"]: THREE.Mesh;
    Cylindre018_SceneMaterial_0: THREE.Mesh;
    Cylindre020_SceneMaterial_0: THREE.Mesh;
    Cylindre024_SceneMaterial_0: THREE.Mesh;
    Cylindre019_SceneMaterial_0: THREE.Mesh;
    Cylindre022_SceneMaterial_0: THREE.Mesh;
    Cylindre023_SceneMaterial_0: THREE.Mesh;
    Cylindre025_SceneMaterial_0: THREE.Mesh;
    ["Icosph��re002__0"]: THREE.Mesh;
    ["Icosph��re003__0"]: THREE.Mesh;
  };
  materials: {
    ["Cylindre.006__0"]: THREE.MeshStandardMaterial;
    SceneMaterial: THREE.MeshStandardMaterial;
  };
};

export function HouseModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/camping_in_the_sky/scene.gltf"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.36}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.Cylindre006__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[24428.58, 223.45, 202.82]}
            rotation={[-1.68, -0.54, -0.01]}
            scale={[3.3, 2.98, 59.69]}
          />
          <mesh
            geometry={nodes.Cylindre007__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[24396.77, 223.45, 203.12]}
            rotation={[-1.53, 0.44, Math.PI]}
            scale={[4.1, 4.1, 57.65]}
          />
          <mesh
            geometry={nodes.Cylindre008__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[24428.58, 223.45, 292.22]}
            rotation={[-1.67, -0.46, 0]}
            scale={[3.25, 2.98, 58.39]}
          />
          <mesh
            geometry={nodes.Cylindre009__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[24396.77, 223.45, 292.52]}
            rotation={[-1.52, 0.53, 3.14]}
            scale={[4.14, 4.1, 59.27]}
          />
          <mesh
            geometry={nodes.Cylindre010__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[24412.2, 268.65, 247.89]}
            rotation={[-3.11, -0.03, 2.36]}
            scale={[3.83, 3.84, 63.19]}
          />
          <mesh
            geometry={nodes.Torus002__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[24412.72, 249.46, 292.06]}
            rotation={[-Math.PI / 2, 0.17, 0]}
            scale={[10.97, 10.97, 7.93]}
          />
          <mesh
            geometry={nodes.Torus003__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[24412.22, 248.4, 202.82]}
            rotation={[-Math.PI / 2, -0.17, Math.PI]}
            scale={[10.97, 10.97, 7.93]}
          />
          <mesh
            geometry={nodes.Cube_SceneMaterial_0.geometry}
            material={materials.SceneMaterial}
            position={[-489.24, 173.4, 548.48]}
            rotation={[-1.74, -0.15, 0.47]}
            scale={[-34.78, 56.42, 3.24]}
          />
          <mesh
            geometry={nodes.Torus001_SceneMaterial_0.geometry}
            material={materials.SceneMaterial}
            position={[-486.24, 196.01, 571.16]}
            rotation={[-0.09, -0.56, -1.38]}
            scale={78.38}
          />
          <mesh
            geometry={nodes.Cylindre001_SceneMaterial_0.geometry}
            material={materials.SceneMaterial}
            position={[-427.16, 188.6, 405.38]}
            rotation={[1.24, 0.15, -1.34]}
            scale={[-23.98, 23.9, 62.37]}
          />
          <mesh
            geometry={nodes.Cylindre003_SceneMaterial_0.geometry}
            material={materials.SceneMaterial}
            position={[-603.32, 202.33, 630.95]}
            rotation={[1.34, 0.2, -2.33]}
            scale={[-20.7, 20.7, 47.22]}
          />
          <mesh
            geometry={nodes.Cylindre011_SceneMaterial_0.geometry}
            material={materials.SceneMaterial}
            position={[-393.24, 248.46, 708.26]}
            rotation={[-1.76, -0.16, 3.11]}
            scale={[100, 100, 85.25]}
          />
          <mesh
            geometry={nodes.Cube015_SceneMaterial_0.geometry}
            material={materials.SceneMaterial}
            position={[-388.96, 218.28, 754.48]}
            rotation={[-1.92, -0.15, 0.39]}
            scale={5.01}
          />
          <mesh
            geometry={nodes.Cube017__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11813.54, 172.95, 744.37]}
            rotation={[-1.9, -0.4, 0.32]}
            scale={5.01}
          />
          <mesh
            geometry={nodes.Cube018__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11788.31, 173.11, 739.84]}
            rotation={[-Math.PI / 2, 0, -0.58]}
            scale={5.56}
          />
          <mesh
            geometry={nodes.Cube019__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11829.84, 170.51, 772.42]}
            rotation={[-Math.PI / 2, 0, -2.66]}
            scale={4.94}
          />
          <mesh
            geometry={nodes.Cube020__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11798.16, 172.18, 739.3]}
            rotation={[-Math.PI / 2, 0, 2.49]}
            scale={4.94}
          />
          <mesh
            geometry={nodes.Cube021__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11777.31, 170.76, 747.07]}
            rotation={[-1.57, 0.31, -1.11]}
            scale={5.01}
          />
          <mesh
            geometry={nodes.Cube022__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11820.77, 168.86, 793.92]}
            rotation={[-1.43, 0, -1.22]}
            scale={5.56}
          />
          <mesh
            geometry={nodes.Cube023__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11768.81, 171.32, 754.38]}
            rotation={[-1.43, 0, -2.86]}
            scale={4.94}
          />
          <mesh
            geometry={nodes.Cube024__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11803.57, 166.83, 801.01]}
            rotation={[-1.43, 0, 2.25]}
            scale={4.94}
          />
          <mesh
            geometry={nodes.Cube025__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11824.06, 173.17, 750.08]}
            rotation={[-1.72, 0, -2]}
            scale={5.56}
          />
          <mesh
            geometry={nodes.Cube026__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11823.57, 171.48, 763.84]}
            rotation={[-Math.PI / 2, 0, 2.49]}
            scale={4.94}
          />
          <mesh
            geometry={nodes.Cube027__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11824.52, 168.74, 785.8]}
            rotation={[-1.42, 0.01, 1.81]}
            scale={4.94}
          />
          <mesh
            geometry={nodes.Cube028__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11795.03, 166.77, 801.9]}
            rotation={[-1.43, 0, -0.09]}
            scale={4.94}
          />
          <mesh
            geometry={nodes.Cube029__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11764.56, 169.05, 765.56]}
            rotation={[-1.43, 0, 2.89]}
            scale={5.56}
          />
          <mesh
            geometry={nodes.Cube030__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11770.31, 166.43, 780.57]}
            rotation={[-1.42, 0, 0.7]}
            scale={4.94}
          />
          <mesh
            geometry={nodes.Cube031__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11774.59, 166.26, 792.64]}
            rotation={[-1.73, 0, 0.45]}
            scale={5.01}
          />
          <mesh
            geometry={nodes.Cube032__0.geometry}
            material={materials["Cylindre.006__0"]}
            position={[-11782.67, 165.91, 793.28]}
            rotation={[-1.43, 0, -2.83]}
            scale={3.41}
          />
          <mesh
            geometry={nodes.Cylindre013_SceneMaterial_0.geometry}
            material={materials.SceneMaterial}
            position={[-393.14, -175.21, 587.33]}
            rotation={[-1.89, -0.1, 2.68]}
            scale={8.41}
          />
          <mesh
            geometry={nodes["Icosph��re001_SceneMaterial_0"].geometry}
            material={materials.SceneMaterial}
            position={[-390.39, 258.55, 742.66]}
            rotation={[1.38, 0.16, 0.03]}
            scale={[-13.9, 13.9, 4.84]}
          />
          <mesh
            geometry={nodes.Cylindre018_SceneMaterial_0.geometry}
            material={materials.SceneMaterial}
            position={[-235.08, 228.4, 665.36]}
            rotation={[1.38, 0.16, 0.03]}
            scale={[-3.66, 3.66, 9.39]}
          />
          <mesh
            geometry={nodes.Cylindre020_SceneMaterial_0.geometry}
            material={materials.SceneMaterial}
            position={[-309.81, 217.25, 453.23]}
            rotation={[1.33, 0.15, -1.36]}
            scale={[-20.7, 20.7, 47.22]}
          />
          <mesh
            geometry={nodes.Cylindre024_SceneMaterial_0.geometry}
            material={materials.SceneMaterial}
            position={[-248.39, 205.24, 555.53]}
            rotation={[1.38, 0.16, 0.03]}
            scale={[-3.66, 3.66, 9.39]}
          />
          <mesh
            geometry={nodes.Cylindre019_SceneMaterial_0.geometry}
            material={materials.SceneMaterial}
            position={[-494.23, 239.69, 827.92]}
            rotation={[1.68, 0.34, 0.06]}
            scale={[-2.27, 2.27, 5.82]}
          />
          <mesh
            geometry={nodes.Cylindre022_SceneMaterial_0.geometry}
            material={materials.SceneMaterial}
            position={[-290.79, 223.93, 771.36]}
            rotation={[1.38, 0.16, 0.03]}
            scale={[-3.66, 3.66, 9.39]}
          />
          <mesh
            geometry={nodes.Cylindre023_SceneMaterial_0.geometry}
            material={materials.SceneMaterial}
            position={[-176.74, 220.23, 773.28]}
            rotation={[1.63, -0.24, 2.53]}
            scale={[-3.66, 3.66, 9.39]}
          />
          <mesh
            geometry={nodes.Cylindre025_SceneMaterial_0.geometry}
            material={materials.SceneMaterial}
            position={[-337.25, 192.02, 563.72]}
            rotation={[1.38, 0.16, 0.03]}
            scale={[-3.66, 3.66, 9.39]}
          />
          <mesh
            geometry={nodes["Icosph��re002__0"].geometry}
            material={materials["Cylindre.006__0"]}
            position={[-498.11, 418.29, 194.5]}
            rotation={[-Math.PI / 2, 0, 0.34]}
            scale={65.94}
          />
          <mesh
            geometry={nodes["Icosph��re003__0"].geometry}
            material={materials["Cylindre.006__0"]}
            position={[-465.38, 522.99, 931.41]}
            rotation={[0.83, 0.62, 2.1]}
            scale={37.73}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
