import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Car2 from "../../public/model_3d/Car/Car1/audi_80_lowpoly.glb"
export default function ModelCar3(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, Car2)
  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="1c93fb932a604f22a68ffe36f95bdce8fbx" rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
            <group name="RootNode">
              <group name="Audi_body" position={[-94.22, -2.22, 150.58]} rotation={[0, -Math.PI / 2, 0]}>
                <mesh
                  material={materials['Material_31']}
                  geometry={nodes['Audi_body_Material_#31_0'].geometry}
                  name="Audi_body_Material_#31_0"
                />
              </group>
              <group name="Rimz" position={[81.55, -43.8, 151.55]} rotation={[0, Math.PI / 2, 0]}>
                <group name="Object_6" position={[0, 0, -11.72]}>
                  <mesh
                    material={materials['Material_31']}
                    geometry={nodes['Rimz_Material_#31_0'].geometry}
                    name="Rimz_Material_#31_0"
                  />
                </group>
              </group>
              <group name="Cylinder006" position={[-81.55, -43.8, 151.55]} rotation={[0, -Math.PI / 2, 0]}>
                <group name="Object_9" position={[0, 0, -11.72]}>
                  <mesh
                    material={materials['Material_31']}
                    geometry={nodes['Cylinder006_Material_#31_0'].geometry}
                    name="Cylinder006_Material_#31_0"
                  />
                </group>
              </group>
              <group name="Cylinder007" position={[81.55, -43.8, -144.53]} rotation={[0, Math.PI / 2, 0]}>
                <group name="Object_12" position={[0, 0, -11.72]}>
                  <mesh
                    material={materials['Material_31']}
                    geometry={nodes['Cylinder007_Material_#31_0'].geometry}
                    name="Cylinder007_Material_#31_0"
                  />
                </group>
              </group>
              <group name="Cylinder008" position={[-81.55, -43.8, -144.53]} rotation={[0, -Math.PI / 2, 0]}>
                <group name="Object_15" position={[0, 0, -11.72]}>
                  <mesh
                    material={materials['Material_31']}
                    geometry={nodes['Cylinder008_Material_#31_0'].geometry}
                    name="Cylinder008_Material_#31_0"
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </scene>
    </group>
  )
}
