import { FloatingPanel, Dialog } from "antd-mobile";
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Model from "./Model";

import "./App.css";
import { Suspense, useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Dialog.confirm({ title: "1", onConfirm: () => setLoading(false) });
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="full-screen">
      
      <Canvas camera={{ position: [0, 0, 360], fov: 20 }}>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls/>
          <ambientLight intensity={0.4} />
          <directionalLight color="#ffb46b" position={[0, 0, 100]} />
          <directionalLight color="#ffb46b" position={[0, 0, -100]} />
        </Suspense>
      </Canvas>
      <FloatingPanel anchors={[200, 500]}>11111</FloatingPanel>
    </div>
  );
}

export default App;
