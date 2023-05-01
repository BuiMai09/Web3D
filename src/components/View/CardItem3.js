import './App.css'
import ModelCar2 from "../three/Lambor_revuelto"
import { Canvas } from "@react-three/fiber";
import { useRef, Suspense, useState } from "react";
import { useGLTF, OrbitControls, Stage, PresentationControls } from "@react-three/drei";

const CardItem3 = () => {

    return (
        <div className="card mb-10">
            <div className="product-canvas" >
                <Canvas >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={0.9}
                            angle={0.1}
                            penumbra={1}
                            position={[1, 10, 5]}
                            castShadow />
                        <ModelCar2 scale={1.5} rotation={[0.4, 5, 0]} />
                        <OrbitControls enablePan={true}
                            enableZoom={true}
                            enableRotate={true} />
                    </Suspense>
                </Canvas>

            </div>

            <div className='text-2xl p-4 font-bold text-white text-center'>Lamborghini Revuelto</div>

        </div>
    )
}

export default CardItem3;