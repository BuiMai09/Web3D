import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import './App.css'
import ModelCar1 from "../three/Free_1975_porsche_911_930_turbo"

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
                        <ModelCar1 scale={1.3} rotation={[0.6, 30, 0]} />
                        <OrbitControls enablePan={true}
                            enableZoom={true}
                            enableRotate={true} />
                    </Suspense>
                </Canvas>
                <div className='text-2xl mt-4 p-4 font-bold text-white text-center cursor-poiter'>
                    <a href="http://localhost:8001">Ford GT 2006</a></div>
            </div>



        </div>
    )
}

export default CardItem1;