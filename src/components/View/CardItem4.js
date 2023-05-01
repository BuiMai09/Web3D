import './App.css'
import ModelCar4 from "../three/Ford_mustang"
import { Canvas } from "@react-three/fiber";
import { useRef, Suspense, useState } from "react";
import { useGLTF, OrbitControls, Stage, PresentationControls } from "@react-three/drei";

const CardItem4 = () => {

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
                        <ModelCar4 scale={3} rotation={[0.4, 5, 0]} />
                        <OrbitControls enablePan={true}
                            enableZoom={true}
                            enableRotate={true} />
                    </Suspense>
                </Canvas>

            </div>
            <div className='text-2xl p-4 font-bold text-white text-center'>Ford Mustang</div>


        </div>
    )
}

export default CardItem4;