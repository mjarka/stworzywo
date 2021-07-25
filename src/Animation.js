import React, { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Head from "./Head";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import * as THREE from "three";
import HandAnimation from "./HandAnimation";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Html, Environment, OrbitControls } from "@react-three/drei";

// Head animation lerping based on mouse position
// function Rig({ children }) {
//   const ref = useRef();
//   useFrame((state) => {
//     ref.current.rotation.y = THREE.MathUtils.lerp(
//       ref.current.rotation.y,
//       (state.mouse.x * Math.PI) / 20,
//       0.05
//     );
//     ref.current.rotation.x = THREE.MathUtils.lerp(
//       ref.current.rotation.x,
//       (state.mouse.y * Math.PI) / 20,
//       0.05
//     );
//   });
//   return <group ref={ref}>{children}</group>;
// }

// Changing light color based on 0 1 toggling
function LightAnimation(props) {
  const light1 = useRef();
  const [active, setActive] = useState(1);
  // useEffect(() => {
  //   setActive(Number(props.index));
  // }, [props]);
  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });
  // interpolate values from commong spring
  // const scale = spring.to([0, 1], [1, 5]);
  // const rotation = spring.to([0, 1], [0, Math.PI]);
  const color = spring.to([0, 1], ["#d19900", "#d19900"]);

  return (
    <a.directionalLight ref={light1} color={color} position={[20, 20, 10]} />
  );
}

function Animation(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Canvas camera={{ position: [-2, 2, 5], fov: 45 }}>
      {/* <ambientLight intensity={0.1} /> */}
      <LightAnimation index={props.index} />
      <directionalLight color="#07b3de" position={[-8, -20, -10]} />

      <Suspense fallback={null}>
        {/* <Rig> */}
        <HandAnimation
          index={props.index}
          scale={[0.56, 0.56, 0.56]}
          position={[0, 0, 0]}
          rotation={[0, 6, 0]}
        />
        {/* <Head position={[0, -2, 0]} /> */}
        {/* </Rig> */}
        {/* <Environment preset="city" /> */}
      </Suspense>

      {/* <OrbitControls autoRotate /> */}
    </Canvas>
  );
}

export default Animation;
