import './App.css'
import ModelCar3 from "../../three/Audi_80_lowpoly"
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
                        <spotLight intensity={20}
                            angle={4}
                            penumbra={12}
                            position={[1, 10, 5]}
                            castShadow />
                        <ModelCar3 scale={1.7} rotation={[0.5, -1.5, 0]} />
                        <OrbitControls enablePan={true}
                            enableZoom={true}
                            enableRotate={true} />
                    </Suspense>
                </Canvas>

            </div>
            <div>
                <div className='text-2xl mt-4 ml-4 font-bold text-black cursor-poiter'>
                    <a href="http://localhost:8000">Audi 80 Lowpoly</a></div>
            </div>
            <div className="text-slate-700 ml-4 text-lg"> 11457 Miles</div>
            <div className="font-semibold ml-4 mb-2 text-lg">AWD 4 - Cylinder Turbo</div>
            <div className="flex gap-12 ml-4 mb-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">$20,000</button>
                <button className="bg-orange-200 hover:bg-orange-300 text-slate-700 font-medium py-2 px-4 rounded">Best Seller</button>
            </div>

        </div>
    )
}

export default CardItem2;