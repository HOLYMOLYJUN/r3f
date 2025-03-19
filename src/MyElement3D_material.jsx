
import {OrbitControls} from "@react-three/drei"
import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber";

function MyElement3DMaterial () {


    useFrame((state, delta)=>{
        mesh1.current.rotation.z += delta
        mesh2.current.rotation.z += delta
    })

    const mesh1 = useRef()
    const mesh2 = useRef()

    useEffect(()=> {
        mesh2.current.material = mesh1.current.material;
    }, [])

    return (
        <>
            <OrbitControls/>

            <ambientLight intensity={0.2}/>
            <directionalLight position={[0,1,0]}/>
            <directionalLight position={[1,2,8]} intensity={0.7}/>

            <mesh ref={mesh1} position={[0.7, 0, 0]}>
                <boxGeometry/>
                <meshBasicMaterial color="#ffff00" wireframe={true}/>
            </mesh>
            <mesh ref={mesh2} position={[-0.7, 0, 0]}>
                <torusGeometry args={[0.5, 0.2]}/>
            </mesh>
        </>
    )
}

export default MyElement3DMaterial