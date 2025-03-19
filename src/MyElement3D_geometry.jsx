
import {Box, OrbitControls} from "@react-three/drei"
import { useEffect, useRef } from "react"
import { useControls } from "leva"
import * as THREE from "three"



function MyElement3DGeo () {
    //Drei : R3F에서 사용할 수 있는 유용한 컴포넌트들을 모아놓은 라이브러리

    const refMesh = useRef();
    const refWireMesh = useRef();


    /* const { xSize,ySize,zSize,xSegments,ySegments,zSegments } = useControls({
        xSize: { value: 1, min: 0.1, max: 5, step: 0.01},
        ySize: { value: 1, min: 0.1, max: 5, step: 0.01},
        zSize: { value: 1, min: 0.1, max: 5, step: 0.01},
        xSegments: { value: 1, min: 1, max: 10, step: 1}, //1보다 큰 정수값
        ySegments: { value: 1, min: 1, max: 10, step: 1}, //1보다 큰 정수값
        zSegments: { value: 1, min: 1, max: 10, step: 1}, //1보다 큰 정수값
    }) */
       
    /* useEffect(()=>{
        refWireMesh.current.geometry = refMesh.current.geometry
    },[xSize,ySize,zSize,xSegments,ySegments,zSegments  ])
    

    const { radius, widthSegments, heightSegments ,phiSatrt, phiLength , thetaStart, thetaLength  } = useControls({
        radius: {value: 1, min: 0.1, max: 5, step: 0.01},
        widthSegments: { value: 32, min: 3, max:256, step:1},
        heightSegments: { value: 32, min: 2, max:256, step: 1},
        phiSatrt: { value: 0, min: 0, max: 360, step :0.1},
        phiLength: { value: 360, min: 0, max: 360, step :0.1},
        thetaStart: { value: 0, min: 0, max: 180, step :0.1 },
        thetaLength: { value: 180, min: 0, max: 180, step :0.1 },
    })

    useEffect(()=>{
        refWireMesh.current.geometry = refMesh.current.geometry
    },[radius, widthSegments, heightSegments, phiSatrt  , phiLength  , thetaStart , thetaLength  ]) */

    const { topRadius, bottomRadius, height, radialSegments, heightSegments, bOpen, thetaStart, thetaLength  } = useControls({
        topRadius: { value: 1, min: 0.1, max: 5, step: 0.01},
        bottomRadius: { value: 1, min: 0.1, max: 5, step: 0.01},
        height: { value: 1, min: 0.1, max: 5, step: 0.01},
        radialSegments: { value: 32, min: 3, max: 256, step: 1},
        heightSegments: { value: 1, min: 1, max: 256, step: 1},
        bOpen: { value: false },
        thetaStart: { value: 0, min: 0, max: 360, step: 0.01},
        thetaLength: { value: 360, min: 0, max: 360, step: 0.01},
    })

    useEffect(()=>{
        refWireMesh.current.geometry = refMesh.current.geometry
    },[topRadius, bottomRadius, height, radialSegments, radialSegments, heightSegments, bOpen, thetaStart ,thetaLength]) 

    return (
        <>
            <OrbitControls/>

            <ambientLight intensity={0.1}/>
            <directionalLight position={[2, 1, 3]} intensity={0.5}/>
            <mesh ref={refMesh}>
                <cylinderGeometry 
                    args={[topRadius, bottomRadius, height, radialSegments, heightSegments, bOpen, thetaStart * Math.PI/180, thetaLength * Math.PI/180]}/>
                <meshStandardMaterial color="#1abc9c"/>
            </mesh>
            <mesh ref={refWireMesh}>
                <meshStandardMaterial emissive="yellow" wireframe={true}/>
            </mesh>

            <axesHelper scale={10}/>
            
        </>
    )
}

export default MyElement3DGeo