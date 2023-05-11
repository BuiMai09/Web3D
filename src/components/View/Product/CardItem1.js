import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import './App.css'

import Model from "../../three/Ford_gt_2006"
const CardItem1 = () => {
    return (
        <div className="card">
            <div className="product-canvas" >
                <Canvas >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={1}
                            angle={0.5}
                            penumbra={3}
                            position={[1, 10, 5]}
                            castShadow />
                        <Model scale={1.3} rotation={[0.6, 30, 0]} />
                        <OrbitControls enablePan={true}
                            enableZoom={true}
                            enableRotate={true} />
                    </Suspense>
                </Canvas>
                <div>
                    <div className='text-2xl mt-4 ml-4 font-bold text-black cursor-poiter'>
                        <a href="http://localhost:8001">Ford GT 2006</a></div>
                </div>
                <div className="text-slate-700 ml-4 text-lg"> 11457 Miles</div>
                <div className="font-semibold ml-4 mb-2 text-lg">AWD 4 - Cylinder Turbo</div>
                <div className="flex gap-12 ml-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">$52,100</button>
                    <button className="bg-orange-200 hover:bg-orange-300 text-slate-700 font-medium py-2 px-4 rounded">Best Seller</button>
                </div>
            </div>



        </div>
    )
}

export default CardItem1;