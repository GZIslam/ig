import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Gem from '../../../public/Gem'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import styles from './home.module.scss'
import { Loader } from '../../components/Loader'
import classNames from 'classnames'

function Home() {
    return (
        <div className={classNames(styles.home, "screen")}>
            <Suspense fallback={<Loader className={styles.center} />}>
                <Canvas>
                    <ambientLight intensity={10} />
                    <OrbitControls />
                    <PerspectiveCamera
                        makeDefault
                        position={[500, 0.9, 1.8]}
                        fov={60}
                        zoom={0.9}
                    />
                    <Gem />
                    <Environment preset="sunset" />
                </Canvas>
            </Suspense>
        </div>
    )
}

export default Home
