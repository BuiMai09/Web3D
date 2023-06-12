import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import Model from "../../three/Porsche_911_c4s_2020_aerokit"

const Porche = () => {
    return (
        <div className="w-full mt-20">
            <div className="flex h-120" >
                <div className="w-1/2 mt-10">
                    <Canvas className="h-120 ml-14">
                        <Suspense fallback={null}>
                            <ambientLight />
                            <spotLight intensity={50}
                                angle={10}
                                penumbra={10}
                                position={[2, 10, 5]}
                                castShadow />
                            <Model scale={2.0} rotation={[0.6, 30, 0]} />
                            <OrbitControls enablePan={true}
                                enableZoom={true}
                                enableRotate={true} />
                        </Suspense>
                    </Canvas>
                </div>
                <div className="w-1/2 ml-16">
                    <div>
                        <div className='text-2xl mt-4 ml-4 font-bold text-black cursor-poiter'>
                            <a href="http://localhost:8000">Porsche 911 2020 Erokit</a>
                        </div>
                    </div>
                    <div className="text-slate-700 ml-4 text-lg"> 11457 Miles</div>
                    <div className="font-semibold ml-4 mb-4 text-lg">AWD 4 - Cylinder Turbo</div>
                    <div className=" ml-4 mb-4 mr-10 text-justify">Porsche 911, producing 2020, running 12,000miles, and genuine warranty, "Special high -capacity" car with different optiosn, running much more sensitive than normal version. Good will to negotiate for buyers</div>
                    <div className="flex gap-12 ml-4 mb-16">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">$25,100</button>
                        <button className="bg-orange-200 hover:bg-orange-300 text-slate-700 font-medium py-2 px-4 rounded"><a href="http://localhost:8000">View by VR</a></button>

                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <div className='text-2xl mt-4 ml-14 font-bold text-black '>Information</div>
                    <div className="ml-14 mr-14 mt-4">
                        <p className="text-justify">The Porsche story begins in the 1960s, a booming time for the American car industry.
                            Back then, the Blue Oval, led by Henry Ford II, had his sights set on racing at LeMans.
                            But that was no easy feat for a company that didn't have the experience of racing on the
                            fast and brutal roads of the European roads and tracks.Thankfully, in 1963, Mister Ford
                            received the news that Enzo Ferrari was thinking of selling to the Detroit giant.
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className='text-2xl mt-4 ml-14 font-bold text-black '>Feature</div>
                    <div className="ml-14 mr-14 mt-4">
                        <p className="text-justify">Unique to Highlander XSE is a sport-tuned suspension that lets it hug the road a little tighter.
                            Retuned shock absorbers, higher-rate springs and a rear stabilizer bar give you enhanced handling on the road,
                            while its lower, athletic stance shows everyone that it’s ready to hit the ground running.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-2xl mt-4 ml-14 font-bold text-black '>Detailed information</div>
                <div className="ml-14 mt-6 mr-20">
                    <table className="min-w-full border text-center dark:border-neutral-500">
                        <thead className="border-b dark:border-neutral-500">
                            <tr>
                                <td>First registration</td>
                                <td>05/2020</td>
                                <td>Power:</td>
                                <td>478 kW / 650 hp</td>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="border-b dark:border-neutral-500">
                                <td cl>Odometer:</td>
                                <td>1.970 km</td>
                                <td>Engine:</td>
                                <td>3745 cm 3 (6 Cyl.)</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td>Body type:</td>
                                <td>Coupe</td>
                                <td>Doors:</td>
                                <td>2</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td>Transmission:</td>
                                <td>8-gear Automatic</td>
                                <td>Exterior:</td>
                                <td>Carraraweissmetallic | metallic</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td>Stock:</td>
                                <td>2157</td>
                                <td>Interior:</td>
                                <td>Schwarz | Leder</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td>Vehicle inspection:</td>
                                <td>05/2023</td>
                                <td>HSN/TSN:</td>
                                <td>0583/AMD</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td>Country version:</td>
                                <td>Germany</td>
                                <td>Previous owners:</td>
                                <td>1</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td>Type classes (CP / TP / LI):</td>
                                <td>11 / 32 / 31</td>
                                <td>Torque:</td>
                                <td>800 Nm</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td>Revolutions at max. torque:</td>
                                <td>2500 rpm</td>
                                <td>Cylinder arrangement:</td>
                                <td>B</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td>Acceleration:</td>
                                <td>2.7</td>
                                <td>Top speed:</td>
                                <td>330 km/h</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-2/3">
                <div className='text-2xl mt-4 ml-14 font-bold text-black '>Review</div>

                <div className="ml-14 mt-6">
                    <div className="flex mb-5 bg-gray-100">
                        <img className="w-12 ml-4 h-12 rounded-full mt-3" src="https://icdn.dantri.com.vn/thumb_w/680/2023/05/22/bai-longdocx-1684727962430.jpeg"></img>
                        <div className="flex flex-col">
                            <div className="font-semibold ml-4 text-lg mt-1">Marc</div>
                            <div className="ml-4 text-sm">Singapore</div>
                            <div className="flex gap-1 ml-4"><FontAwesomeIcon icon={faStar} style={{ color: "#ffd53d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffd53d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffd53d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffd53d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffd53d", }} />
                            </div>
                            <div className="ml-4">
                                Scintillating acceleration, interior design, massive range!!!!
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-5 bg-gray-100">
                        <img className="w-12 ml-4 h-12 rounded-full mt-3" src="https://tinmoi-247.com/images/post/dj-singapore-gay-chu-y-o-rap-viet-1435530.jpg?s=2048:1365"></img>
                        <div className="flex flex-col">
                            <div className="font-semibold ml-4 text-lg mt-1">Wukong</div>
                            <div className="ml-4 text-sm">VietNam</div>
                            <div className="flex gap-1 ml-4"><FontAwesomeIcon icon={faStar} style={{ color: "#ffd53d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffd53d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffd53d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffd53d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#c3bda7", }} />
                            </div>
                            <div className="ml-4">
                                The Mahindra Thar features a boxy and muscular design that pays homage to its heritage. It has a distinctive front grille, round headlights, and flared wheel arches.
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-5 bg-gray-100">
                        <img className="w-12 ml-4 h-12 rounded-full mt-3" src="https://we25.vn/media2018/Img_News/2019/07/27/1-1-1-1-1_20190727133733.jpg"></img>
                        <div className="flex flex-col">
                            <div className="font-semibold ml-4 text-lg mt-1">BaiLong</div>
                            <div className="ml-4 text-sm">China</div>
                            <div className="flex gap-1 ml-4"><FontAwesomeIcon icon={faStar} style={{ color: "#ffd53d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffd53d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffd53d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#ffd53d", }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#c3bda7", }} />
                            </div>
                            <div className="ml-4">
                                The removable hardtop or soft-top options add to its versatility and open-air driving experience. The Thar has a utilitarian and functional design, suitable for off-road adventures.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Porche;