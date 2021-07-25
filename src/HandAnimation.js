import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
export default function HandAnimation(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/hand.gltf");
  const { actions, names } = useAnimations(animations, group);

  const [clicked, setClicked] = useState(0);
  const [hovered, setHovered] = useState(false);
  // useEffect(() => {
  //   actions.wave.clampWhenFinished = true;
  //   actions.wave.setLoop(THREE.LoopOnce, 1);
  //   actions.wave.play();
  // });
  const [matcap2, matcap1] = useTexture(["/stacy2.jpg", "/stacy.jpg"]);
  console.log(actions);
  useEffect(() => {
    actions[names[1]].setLoop(THREE.LoopOnce, 1);
    actions[names[1]].clampWhenFinished = true;
    actions[names[0]].setLoop(THREE.LoopOnce, 1);
    actions[names[0]].clampWhenFinished = true;
    actions[names[2]].setLoop(THREE.LoopOnce, 1);
    actions[names[2]].clampWhenFinished = true;
    actions[names[3]].setLoop(THREE.LoopOnce, 1);
    actions[names[3]].clampWhenFinished = true;
    actions[names[4]].setLoop(THREE.LoopOnce, 1);
    actions[names[4]].clampWhenFinished = true;
    actions[names[5]].setLoop(THREE.LoopOnce, 1);
    actions[names[5]].clampWhenFinished = true;
    actions[names[6]].setLoop(THREE.LoopOnce, 1);
    actions[names[6]].clampWhenFinished = true;
  });

  // Change cursor on pointer
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );
  useEffect(() => {
    actions[names[props.index]].reset().fadeIn(0.5).play();
    // In the clean-up phase, fade it out
    return () => actions[names[props.index]].fadeOut(0.5);
  }, [props.index]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    group.current.rotation.x = Math.sin(t / 2) / 8;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.04, -3.68, 0.42]}>
        <primitive object={nodes.Bone} />
        <primitive object={nodes.Bone026} />
        <primitive object={nodes.Bone039} />
        <primitive object={nodes.Bone040} />
        <skinnedMesh
          geometry={nodes.Hand_Of_Adam_Detail_3_1.geometry}
          material={materials["Material.001"]}
          skeleton={nodes.Hand_Of_Adam_Detail_3_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hand_Of_Adam_Detail_3_2.geometry}
          skeleton={nodes.Hand_Of_Adam_Detail_3_2.skeleton}
        >
          <meshBasicMaterial map={matcap1} skinning />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Hand_Of_Adam_Detail_3_3.geometry}
          material={materials["Material.003"]}
          skeleton={nodes.Hand_Of_Adam_Detail_3_3.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/hand.gltf");
