// Auto-generated by https://github.com/react-spring/gltfjsx

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Car1 from "../../public/model_3d/Car/Car1/free_1975_porsche_911_930_turbo.glb"
export default function ModelCar1(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, Car1)

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={[0.81, 0.81, 0.81]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Plane013_0" position={[0, 0.47, 3.12]} rotation={[-2.83, 0, Math.PI]} scale={[1, 0.96, 1]}>
                <mesh material={materials['930_plastics']} geometry={nodes['Object_4'].geometry} name="Object_4" />
                <mesh material={materials['930_stickers']} geometry={nodes['Object_5'].geometry} name="Object_5" />
                <mesh material={materials['plate']} geometry={nodes['Object_6'].geometry} name="Object_6" />
              </group>
              <group name="Circle038_1" position={[-1.16, 0.56, -1.21]} rotation={[0.48, 0, 0]}>
                <mesh material={materials['930_rim']} geometry={nodes['Object_8'].geometry} name="Object_8" />
                <mesh material={materials['930_tire']} geometry={nodes['Object_9'].geometry} name="Object_9" />
              </group>
              <group name="Circle037_2" position={[-1.02, 0.56, 1.97]} rotation={[0.5, -0.29, 0.15]}>
                <mesh material={materials['930_rim']} geometry={nodes['Object_11'].geometry} name="Object_11" />
                <mesh material={materials['930_tire']} geometry={nodes['Object_12'].geometry} name="Object_12" />
              </group>
              <group name="Circle034_3">
                <mesh material={materials['930_stickers']} geometry={nodes['Object_14'].geometry} name="Object_14" />
              </group>
              <group name="Circle031_4">
                <mesh material={materials['930_stickers']} geometry={nodes['Object_16'].geometry} name="Object_16" />
              </group>
              <group name="Circle016_5">
                <mesh material={materials['930_stickers']} geometry={nodes['Object_18'].geometry} name="Object_18" />
              </group>
              <group
                name="Cube003_6"
                position={[0.7, 0.51, -2.53]}
                rotation={[0.04, -0.21, 0.01]}
                scale={[0.24, 0.24, 0.24]}>
                <mesh material={materials['930_lights']} geometry={nodes['Object_20'].geometry} name="Object_20" />
              </group>
              <group name="Circle025_7" position={[0, 0.69, -2.1]}>
                <mesh material={materials['930_lights']} geometry={nodes['Object_22'].geometry} name="Object_22" />
              </group>
              <group name="Circle006_8">
                <mesh material={materials['930_lights']} geometry={nodes['Object_24'].geometry} name="Object_24" />
              </group>
              <group name="Circle012_9">
                <mesh material={materials['glass']} geometry={nodes['Object_26'].geometry} name="Object_26" />
              </group>
              <group name="Circle003_10">
                <mesh material={materials['930_chromes']} geometry={nodes['Object_28'].geometry} name="Object_28" />
              </group>
              <group name="Circle002_11">
                <mesh material={materials['paint']} geometry={nodes['Object_30'].geometry} name="Object_30" />
              </group>
              <group name="Circle000_12">
                <mesh material={materials['coat']} geometry={nodes['Object_32'].geometry} name="Object_32" />
              </group>
              <group
                name="Cylinder000_13"
                position={[0.25, 1.33, 1.33]}
                rotation={[0.62, 0.44, -0.1]}
                scale={[0.01, 0.01, 0.01]}>
                <mesh material={materials['930_plastics']} geometry={nodes['Object_34'].geometry} name="Object_34" />
              </group>
              <group name="Circle018_14">
                <mesh material={materials['glass']} geometry={nodes['Object_36'].geometry} name="Object_36" />
              </group>
              <group name="Circle061_15">
                <mesh material={materials['930_chromes']} geometry={nodes['Object_38'].geometry} name="Object_38" />
              </group>
              <group
                name="Cube010_16"
                position={[0.7, 0.51, -2.53]}
                rotation={[0.04, -0.21, 0.01]}
                scale={[0.24, 0.24, 0.24]}>
                <mesh material={materials['930_chromes']} geometry={nodes['Object_40'].geometry} name="Object_40" />
              </group>
              <group
                name="Cube009_17"
                position={[0.7, 0.51, -2.53]}
                rotation={[0.04, -0.21, 0.01]}
                scale={[0.24, 0.24, 0.24]}>
                <mesh material={materials['930_plastics']} geometry={nodes['Object_42'].geometry} name="Object_42" />
              </group>
              <group
                name="Cube007_18"
                position={[0.66, 0.48, 3.11]}
                rotation={[0.16, 0.1, -0.02]}
                scale={[0.91, 0.91, 0.91]}>
                <mesh material={materials['930_plastics']} geometry={nodes['Object_44'].geometry} name="Object_44" />
                <mesh material={materials['930_chromes']} geometry={nodes['Object_45'].geometry} name="Object_45" />
              </group>
              <group name="Circle041_19">
                <mesh material={materials['glass']} geometry={nodes['Object_47'].geometry} name="Object_47" />
              </group>
              <group
                name="Cylinder006_20"
                position={[-1.01, 1.26, 1.5]}
                rotation={[0.05, 0, 0.05]}
                scale={[0.01, 0.01, 0.01]}>
                <mesh material={materials['930_chromes']} geometry={nodes['Object_49'].geometry} name="Object_49" />
              </group>
              <group name="Circle060_21">
                <mesh material={materials['930_chromes']} geometry={nodes['Object_51'].geometry} name="Object_51" />
              </group>
              <group name="Circle056_22">
                <mesh material={materials['930_chromes']} geometry={nodes['Object_53'].geometry} name="Object_53" />
              </group>
              <group name="Cube004_23" position={[0.01, 1.67, 0.65]} scale={[0.06, 0.06, 0.06]}>
                <mesh material={materials['930_plastics']} geometry={nodes['Object_56'].geometry} name="Object_56" />
                <mesh material={materials['black']} geometry={nodes['Object_55'].geometry} name="Object_55" />
              </group>
              <group
                name="Cylinder009_24"
                position={[0.79, 0.49, -2.38]}
                rotation={[-1.77, -0.01, -0.46]}
                scale={[6.31, 6.31, 6.31]}>
                <mesh material={materials['930_chromes']} geometry={nodes['Object_58'].geometry} name="Object_58" />
                <mesh material={materials['black']} geometry={nodes['Object_59'].geometry} name="Object_59" />
              </group>
              <group
                name="Plane011_25"
                position={[0, 0.98, -2.49]}
                rotation={[2.32, 0, -Math.PI]}
                scale={[0.02, 0.02, 0.02]}>
                <mesh material={materials['930_plastics']} geometry={nodes['Object_61'].geometry} name="Object_61" />
              </group>
              <group name="Plane010_26" position={[0, 0.87, 2.92]} rotation={[0.46, 0, 0]} scale={[0.03, 0.03, 0.03]}>
                <mesh material={materials['930_plastics']} geometry={nodes['Object_63'].geometry} name="Object_63" />
                <mesh material={materials['930_stickers']} geometry={nodes['Object_64'].geometry} name="Object_64" />
              </group>
              <group name="Cube_27" position={[0.01, 1.67, 0.65]} scale={[0.06, 0.06, 0.06]}>
                <mesh material={materials['930_chromes']} geometry={nodes['Object_66'].geometry} name="Object_66" />
              </group>
              <group
                name="Cylinder003_29"
                position={[-0.25, 1.33, 1.32]}
                rotation={[0.58, 0.32, -0.01]}
                scale={[0.01, 0.01, 0.01]}>
                <group
                  name="Plane007_28"
                  position={[37.47, -1.97, 0.92]}
                  rotation={[-2.95, -1.38, -2.99]}
                  scale={[14.49, 9.23, 13.31]}>
                  <mesh material={materials['930_plastics']} geometry={nodes['Object_70'].geometry} name="Object_70" />
                </group>
                <mesh material={materials['930_plastics']} geometry={nodes['Object_68'].geometry} name="Object_68" />
              </group>
              <group
                name="Plane002_30"
                position={[0.63, 1.55, -1.29]}
                rotation={[-0.35, 0.04, -0.1]}
                scale={[0.2, 0.13, 0.19]}>
                <mesh material={materials['930_plastics']} geometry={nodes['Object_72'].geometry} name="Object_72" />
              </group>
              <group
                name="Plane001_31"
                position={[0.67, 1.36, 1.11]}
                rotation={[0.07, -1.09, -0.48]}
                scale={[0.2, 0.13, 0.18]}>
                <mesh material={materials['930_plastics']} geometry={nodes['Object_74'].geometry} name="Object_74" />
              </group>
              <group
                name="Cylinder002_32"
                position={[0.32, 1.39, -1.83]}
                rotation={[-0.51, -0.83, -0.19]}
                scale={[0.01, 0.01, 0.01]}>
                <mesh material={materials['930_plastics']} geometry={nodes['Object_76'].geometry} name="Object_76" />
              </group>
              <group name="Plane003_33" position={[0, 0.68, -2.62]}>
                <mesh material={materials['930_plastics']} geometry={nodes['Object_78'].geometry} name="Object_78" />
                <mesh material={materials['930_stickers']} geometry={nodes['Object_79'].geometry} name="Object_79" />
                <mesh material={materials['plate']} geometry={nodes['Object_80'].geometry} name="Object_80" />
              </group>
              <group name="Circle040_34">
                <mesh material={materials['930_plastics']} geometry={nodes['Object_82'].geometry} name="Object_82" />
              </group>
              <group name="Plane009_35" rotation={[0, -0.05, 0.15]} scale={[0.72, 0.82, 0.82]}>
                <mesh material={materials['930_lights']} geometry={nodes['Object_84'].geometry} name="Object_84" />
              </group>
              <group
                name="Plane004_36"
                position={[0, 1.05, 1.38]}
                rotation={[0, -0.05, 0.15]}
                scale={[0.72, 0.82, 0.82]}>
                <mesh material={materials['930_chromes']} geometry={nodes['Object_86'].geometry} name="Object_86" />
              </group>
              <group name="Circle051_37" position={[1.02, 0.56, 1.97]} rotation={[0.52, -0.28, 0.16]}>
                <mesh material={materials['930_rim']} geometry={nodes['Object_88'].geometry} name="Object_88" />
                <mesh material={materials['930_tire']} geometry={nodes['Object_89'].geometry} name="Object_89" />
              </group>
              <group name="Circle024_38">
                <mesh material={materials['930_chromes']} geometry={nodes['Object_91'].geometry} name="Object_91" />
              </group>
              <group name="Plane_39">
                <mesh material={materials['930_chromes']} geometry={nodes['Object_93'].geometry} name="Object_93" />
              </group>
              <group name="Circle036_40">
                <mesh
                  material={materials['930_lights_refraction']}
                  geometry={nodes['Object_95'].geometry}
                  name="Object_95"
                />
              </group>
              <group name="Circle035_41">
                <mesh material={materials['930_lights']} geometry={nodes['Object_97'].geometry} name="Object_97" />
              </group>
              <group name="Circle033_42">
                <mesh material={materials['930_chromes']} geometry={nodes['Object_99'].geometry} name="Object_99" />
              </group>
              <group name="Circle030_43">
                <mesh material={materials['930_chromes']} geometry={nodes['Object_101'].geometry} name="Object_101" />
              </group>
              <group name="Circle027_44" scale={[1, 1, 1]}>
                <mesh material={materials['930_plastics']} geometry={nodes['Object_103'].geometry} name="Object_103" />
              </group>
              <group name="Circle026_45">
                <mesh material={materials['930_plastics']} geometry={nodes['Object_105'].geometry} name="Object_105" />
              </group>
              <group name="Circle020_46">
                <mesh material={materials['930_chromes']} geometry={nodes['Object_107'].geometry} name="Object_107" />
              </group>
              <group name="Circle010_47">
                <mesh material={materials['930_chromes']} geometry={nodes['Object_109'].geometry} name="Object_109" />
              </group>
              <group name="Circle009_48">
                <mesh material={materials['930_chromes']} geometry={nodes['Object_111'].geometry} name="Object_111" />
              </group>
              <group name="Circle001_49">
                <mesh material={materials['paint']} geometry={nodes['Object_113'].geometry} name="Object_113" />
              </group>
              <group
                name="Cube006_50"
                position={[1.08, 1.21, 0.93]}
                rotation={[0, 0, -0.06]}
                scale={[0.93, 0.93, 0.93]}>
                <mesh material={materials['930_chromes']} geometry={nodes['Object_115'].geometry} name="Object_115" />
              </group>
              <group
                name="Circle050_51"
                position={[1.16, 0.56, -1.21]}
                rotation={[0.48, 0, 0]}
                scale={[0.89, 0.94, 0.94]}>
                <mesh material={materials['930_rim']} geometry={nodes['Object_117'].geometry} name="Object_117" />
                <mesh material={materials['930_tire']} geometry={nodes['Object_118'].geometry} name="Object_118" />
              </group>
              <group name="Circle048_52" position={[1.02, 0.56, 1.97]} rotation={[0.52, -0.28, 0.16]}>
                <mesh material={materials['930_rim']} geometry={nodes['Object_120'].geometry} name="Object_120" />
              </group>
              <group name="Plane005_53" position={[0, 1.58, 0.67]}>
                <mesh
                  material={materials['930_wunderbaum']}
                  geometry={nodes['Object_122'].geometry}
                  name="Object_122"
                />
              </group>
              <group name="Circle007_54" position={[0, 0.69, -2.1]}>
                <mesh material={materials['930_lights']} geometry={nodes['Object_124'].geometry} name="Object_124" />
              </group>
              <group name="Circle017_55" position={[-1.8, 0.14, 3.2]}>
                <mesh material={materials['930_lights']} geometry={nodes['Object_126'].geometry} name="Object_126" />
              </group>
              <group name="Circle004_56">
                <mesh material={materials['black']} geometry={nodes['Object_128'].geometry} name="Object_128" />
              </group>
              <group name="Circle005_57" position={[0, 0.89, 4.01]}>
                <mesh material={materials['930_lights']} geometry={nodes['Object_130'].geometry} name="Object_130" />
              </group>
              <group name="Circle008_58" position={[0, 0.9, -3.5]}>
                <mesh material={materials['930_lights']} geometry={nodes['Object_132'].geometry} name="Object_132" />
              </group>
              <group name="Circle011_59" position={[1.8, 0.14, 3.2]}>
                <mesh material={materials['930_lights']} geometry={nodes['Object_134'].geometry} name="Object_134" />
              </group>
              <group name="Circle013_60">
                <mesh material={materials['930_stickers']} geometry={nodes['Object_136'].geometry} name="Object_136" />
              </group>
              <group name="Circle014_61">
                <mesh material={materials['930_stickers']} geometry={nodes['Object_138'].geometry} name="Object_138" />
              </group>
              <group name="Plane015_62" position={[0, 0.14, 0.28]} scale={[1.92, 1.92, 3.84]}>
                <mesh material={materials['material_0']} geometry={nodes['Object_140'].geometry} name="Object_140" />
              </group>
            </group>
          </group>
        </group>
      </scene>
    </group>
  )
}
