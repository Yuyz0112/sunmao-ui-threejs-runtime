import { implementRuntimeComponent } from '@sunmao-ui/runtime';
import { Type } from '@sinclair/typebox';
import { PRESET_PROPERTY_CATEGORY } from '@sunmao-ui/shared';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';

export default implementRuntimeComponent({
  version: 'webgl/v1',
  metadata: {
    name: 'box',
    displayName: 'Box',
    description: '',
    isDraggable: false,
    isResizable: false,
    exampleProperties: {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      color: 'orange',
      scale: 1,
    },
    exampleSize: [1, 1],
    annotations: {
      category: PRESET_PROPERTY_CATEGORY.Basic,
    },
  },
  spec: {
    properties: Type.Object({
      position: Type.Object({
        x: Type.Number(),
        y: Type.Number(),
        z: Type.Number(),
      }),
      color: Type.String({
        widget: 'core/v1/color',
      }),
      scale: Type.Number(),
    }),
    state: Type.Object({
      hovered: Type.Boolean(),
      clicked: Type.Boolean(),
    }),
    methods: {},
    slots: {},
    styleSlots: ['content'],
    events: [],
  },
})(({ position, color, mergeState, scale }) => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (ref.current.rotation.x += 0.01));

  useEffect(() => {
    mergeState({
      hovered,
      clicked,
    });
  }, [hovered, clicked, mergeState]);

  return (
    <mesh
      ref={ref}
      scale={scale}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      position={[position.x, position.y, position.z]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
});
