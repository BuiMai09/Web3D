import './App.css'
import ModelCar3 from "../three/Audi_80_lowpoly"
import { Canvas } from "@react-three/fiber";
import { useRef, Suspense, useState } from "react";
import { useGLTF, OrbitControls, Stage, PresentationControls } from "@react-three/drei";

const CardItem2 = () => {

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
                        <ModelCar3 scale={1.4} rotation={[0, -0.999, 0]} />
                        <OrbitControls enablePan={true}
                            enableZoom={true}
                            enableRotate={true} />
                    </Suspense>
                </Canvas>

            </div>
            <div className='text-2xl p-4 font-bold text-white text-center'>Audi 80 Lowpoly</div>


        </div>
    )
}

export default CardItem2;