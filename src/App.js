import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useGLTF, OrbitControls, Stage, PresentationControls } from "@react-three/drei";
import AllItem from "./components/View/AllItem";




function App() {
  return (
    <div>
      <AllItem />
    </div>
  );
}

export default App;