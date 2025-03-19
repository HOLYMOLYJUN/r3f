
import './App.css'

import {Canvas} from '@react-three/fiber'
import MyElement3DGEO from './MyElement3D_geometry'
import MyElement3DMaterial from './MyElement3D_material'

function App() {

  return (
    <>
      <Canvas>
        <MyElement3DMaterial />
      </Canvas>
    </>
  )
}
g
export default App
