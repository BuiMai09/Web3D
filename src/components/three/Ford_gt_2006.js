
import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Car1 from "../../public/model_3d/Car/Car1/ford_gt_2006.glb"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, Car1)

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Ford_GT_2006_15" scale={[0.01, 0.01, 0.01]}>
                <group name="Body_2" rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                  <group name="Body_Car_0">
                    <mesh material={materials['Body']} geometry={nodes['Object_6'].geometry} name="Object_6" />
                    <mesh material={materials['Glass']} geometry={nodes['Object_7'].geometry} name="Object_7" />
                    <mesh material={materials['White_Body']} geometry={nodes['Object_8'].geometry} name="Object_8" />
                    <mesh material={materials['Tooye_Light']} geometry={nodes['Object_9'].geometry} name="Object_9" />
                    <mesh material={materials['Metal']} geometry={nodes['Object_10'].geometry} name="Object_10" />
                    <mesh
                      material={materials['Yellow_Light']}
                      geometry={nodes['Object_11'].geometry}
                      name="Object_11"
                    />
                    <mesh material={materials['White_Light']} geometry={nodes['Object_12'].geometry} name="Object_12" />
                    <mesh
                      material={materials['Material.006']}
                      geometry={nodes['Object_13'].geometry}
                      name="Object_13"
                    />
                    <mesh material={materials['Red_Light']} geometry={nodes['Object_14'].geometry} name="Object_14" />
                    <mesh
                      material={materials['Material.009']}
                      geometry={nodes['Object_15'].geometry}
                      name="Object_15"
                    />
                    <mesh material={materials['Black']} geometry={nodes['Object_16'].geometry} name="Object_16" />
                    <mesh
                      material={materials['Side_Texture']}
                      geometry={nodes['Object_17'].geometry}
                      name="Object_17"
                    />
                    <mesh material={materials['Light_inyo']} geometry={nodes['Object_18'].geometry} name="Object_18" />
                  </group>
                  <group name="Upper_Wheel_1">
                    <mesh material={materials['Black_Metal']} geometry={nodes['Object_20'].geometry} name="Object_20" />
                  </group>
                </group>
                <group name="Deatils_8" rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                  <group name="Dashboard_&_Wheel_3">
                    <mesh material={materials['Black.001']} geometry={nodes['Object_34'].geometry} name="Object_34" />
                    <mesh material={materials['Glass']} geometry={nodes['Object_29'].geometry} name="Object_29" />
                    <mesh material={materials['Metal']} geometry={nodes['Object_30'].geometry} name="Object_30" />
                    <mesh
                      material={materials['Speedmeter_3']}
                      geometry={nodes['Object_23'].geometry}
                      name="Object_23"
                    />
                    <mesh
                      material={materials['Speedmeter_4']}
                      geometry={nodes['Object_24'].geometry}
                      name="Object_24"
                    />
                    <mesh
                      material={materials['Speedmeter_5']}
                      geometry={nodes['Object_25'].geometry}
                      name="Object_25"
                    />
                    <mesh
                      material={materials['Speedmeter_6']}
                      geometry={nodes['Object_26'].geometry}
                      name="Object_26"
                    />
                    <mesh
                      material={materials['Speedmeter_7']}
                      geometry={nodes['Object_27'].geometry}
                      name="Object_27"
                    />
                    <mesh
                      material={materials['Logo_Farmoon']}
                      geometry={nodes['Object_28'].geometry}
                      name="Object_28"
                    />
                    <mesh
                      material={materials['Material.001']}
                      geometry={nodes['Object_31'].geometry}
                      name="Object_31"
                    />
                    <mesh material={materials['Miror']} geometry={nodes['Object_32'].geometry} name="Object_32" />
                    <mesh
                      material={materials['Speedmeter_1']}
                      geometry={nodes['Object_35'].geometry}
                      name="Object_35"
                    />
                    <mesh
                      material={materials['Speedmeter_2']}
                      geometry={nodes['Object_36'].geometry}
                      name="Object_36"
                    />
                    <mesh
                      material={materials['Interior_Silver']}
                      geometry={nodes['Object_37'].geometry}
                      name="Object_37"
                    />
                    <mesh
                      material={materials['Farmoon_Charm']}
                      geometry={nodes['Object_33'].geometry}
                      name="Object_33"
                    />
                  </group>
                  <group name="Dashboard_&_Wheel002_4" position={[0.76, -0.43, 0.82]}>
                    <mesh
                      material={materials['Interior_Silver']}
                      geometry={nodes['Object_39'].geometry}
                      name="Object_39"
                    />
                  </group>
                  <group name="Dashboard_&_Wheel003_5" position={[0, 0, 0]}>
                    <mesh material={materials['Metal']} geometry={nodes['Object_41'].geometry} name="Object_41" />
                    <mesh
                      material={materials['Interior_Silver']}
                      geometry={nodes['Object_43'].geometry}
                      name="Object_43"
                    />
                    <mesh
                      material={materials['Material.004']}
                      geometry={nodes['Object_42'].geometry}
                      name="Object_42"
                    />
                  </group>
                  <group name="Dashboard_&_Wheel004_6">
                    <mesh
                      material={materials['Interior_Silver']}
                      geometry={nodes['Object_45'].geometry}
                      name="Object_45"
                    />
                  </group>
                  <group name="Interior_7">
                    <mesh material={materials['Body']} geometry={nodes['Object_50'].geometry} name="Object_50" />
                    <mesh material={materials['Metal']} geometry={nodes['Object_51'].geometry} name="Object_51" />
                    <mesh material={materials['Black_Metal']} geometry={nodes['Object_49'].geometry} name="Object_49" />
                    <mesh material={materials['Miror']} geometry={nodes['Object_48'].geometry} name="Object_48" />
                    <mesh material={materials['Material']} geometry={nodes['Object_47'].geometry} name="Object_47" />
                    <mesh material={materials['Seat']} geometry={nodes['Object_52'].geometry} name="Object_52" />
                    <mesh
                      material={materials['Metal_Roughness']}
                      geometry={nodes['Object_54'].geometry}
                      name="Object_54"
                    />
                    <mesh material={materials['Seat_2']} geometry={nodes['Object_53'].geometry} name="Object_53" />
                  </group>
                </group>
                <group name="Disk_Breake_10" rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                  <group name="Breake_Disk_9">
                    <mesh material={materials['Breake']} geometry={nodes['Object_57'].geometry} name="Object_57" />
                  </group>
                </group>
                <group name="Glass_12" rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                  <group name="Car_Galss_11">
                    <mesh material={materials['Glass']} geometry={nodes['Object_60'].geometry} name="Object_60" />
                  </group>
                </group>
                <group name="Wheel_14" rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                  <group name="Car_Wheels_13">
                    <mesh material={materials['Metal_Ring']} geometry={nodes['Object_63'].geometry} name="Object_63" />
                    <mesh material={materials['Disk']} geometry={nodes['Object_64'].geometry} name="Object_64" />
                  </group>
                </group>
              </group>
              <group name="Cylinder_16">
                <mesh material={materials['Black.001']} geometry={nodes['Object_66'].geometry} name="Object_66" />
              </group>
              <group
                name="FordWheelFtL_17"
                position={[0, 0.01, -0.3]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.36, 1.36, 1.36]}>
                <mesh material={materials['2011_06']} geometry={nodes['Object_68'].geometry} name="Object_68" />
                <mesh material={materials['bfgoodri']} geometry={nodes['Object_69'].geometry} name="Object_69" />
              </group>
              <group
                name="FordWheelFtL001_18"
                position={[0, 0.01, -3.16]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.36, 1.36, 1.36]}>
                <mesh material={materials['2011_06']} geometry={nodes['Object_71'].geometry} name="Object_71" />
                <mesh material={materials['bfgoodri']} geometry={nodes['Object_72'].geometry} name="Object_72" />
              </group>
              <group name="Cube_19">
                <mesh material={materials['Material.002']} geometry={nodes['Object_74'].geometry} name="Object_74" />
                <mesh material={materials['Material.003']} geometry={nodes['Object_75'].geometry} name="Object_75" />
              </group>
            </group>
          </group>
        </group>
      </scene>
    </group>
  )
}
