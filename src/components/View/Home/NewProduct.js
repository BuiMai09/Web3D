import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "../../three/Porsche_911_c4s_2020_aerokit"

const NewProduct = () => {
    return (
        <>
            <div className="flex flex-col mt-20 h-200 justify-center items-center">
                <div className="text-slate-400 mt-2 text-2xl text-center">
                    Meet your new car
                </div>
                <div className="text-2xl mt-2 p-4 font-bold text-black text-center">Ford GT 2006</div>
                <div className=" h-12">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"><a href="http://localhost:8001">More Detail</a></button>
                </div>
            </div>
            <div className="h-80 w-100">
                <Canvas >
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight intensity={20}
                            angle={10}
                            penumbra={10}
                            position={[2, 10, 5]}
                            castShadow />
                        <Model scale={2} rotation={[0.4, 5, 0]} position={[0, -0.5, 0]} />
                        <OrbitControls enablePan={true}
                            enableZoom={true}
                            enableRotate={true} />
                    </Suspense>
                </Canvas>
            </div>
            
        </>
    )
}

export default NewProduct;