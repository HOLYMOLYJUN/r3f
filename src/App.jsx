
import './App.css'

import {Canvas} from '@react-three/fiber'
import MyElement3D from './MyElement3D_geometry'

function App() {

  return (
    <>
      <Canvas>
        <MyElement3D />
      </Canvas>
    </>
  )
}

export default App
