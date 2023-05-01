import './App.css'
import Model from "../three/Ford_gt_2006"
import { Canvas } from "@react-three/fiber";
import { useRef, Suspense, useState } from "react";
import { useGLTF, OrbitControls, Stage, PresentationControls } from "@react-three/drei";

const CardItem1 = () => {

    return (
        <div className="card">
            <div className="product-canvas" >
                <Canvas >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={0.9}
                            angle={0.1}
                            penumbra={1}
                            position={[1, 10, 5]}
                            castShadow />
                        <Model scale={1.3} rotation={[0.6, 30, 0]} />
                        <OrbitControls enablePan={true}
                            enableZoom={true}
                            enableRotate={true} />
                    </Suspense>
                </Canvas>
                <div className='text-2xl mt-4 p-4 font-bold text-white text-center'>Ford GT 2006</div>
            </div>



        </div>
    )
}

export default CardItem1;