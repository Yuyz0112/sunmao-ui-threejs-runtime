import React, { Suspense, useState } from 'react';
import { useGLTF, useCursor } from '@react-three/drei';
import { implementRuntimeComponent } from '@sunmao-ui/runtime';
import { PRESET_PROPERTY_CATEGORY } from '@sunmao-ui/shared';
import { Type } from '@sinclair/typebox';

const Model: React.FC<{ name: string; color: string } & any> = ({
  name,
  color,
  ...props
}) => {
  // Fetching the GLTF, nodes is a collection of all the meshes
  // It's cached/memoized, it only gets loaded and parsed once
  const { nodes } = useGLTF('/assets/compressed.glb') as any;
  // Feed hover state into useCursor, which sets document.body.style.cursor to pointer|auto
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  return (
    <mesh
      // Click sets the mesh as the new target
      onClick={e => e.stopPropagation()}
      onPointerOver={e => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      name={name}
      geometry={nodes[name].geometry}
      material={nodes[name].material}
      material-color={hovered ? '#ff6080' : color}
      {...props}
      dispose={null}
    />
  );
};

export default implementRuntimeComponent({
  version: 'webgl/v1',
  metadata: {
    name: 'model',
    displayName: 'Model',
    description: '',
    isDraggable: false,
    isResizable: false,
    exampleProperties: {
      name: 'DNA',
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      scale: 1,
      color: 'white',
    },
    exampleSize: [1, 1],
    annotations: {
      category: PRESET_PROPERTY_CATEGORY.Basic,
    },
  },
  spec: {
    properties: Type.Object({
      name: Type.KeyOf(
        Type.Object({
          DNA: Type.Boolean(),
          Curly: Type.Boolean(),
          Headphones: Type.Boolean(),
          Notebook: Type.Boolean(),
          Rocket003: Type.Boolean(),
          Roundcube001: Type.Boolean(),
          Table: Type.Boolean(),
          VR_Headset: Type.Boolean(),
          Zeppelin: Type.Boolean(),
        })
      ),
      position: Type.Object({
        x: Type.Number(),
        y: Type.Number(),
        z: Type.Number(),
      }),
      rotation: Type.Object({
        x: Type.Number(),
        y: Type.Number(),
        z: Type.Number(),
      }),
      scale: Type.Number(),
      color: Type.String({
        widget: 'core/v1/color',
      }),
    }),
    state: Type.Object({}),
    methods: {},
    slots: {},
    styleSlots: [],
    events: [],
  },
})(({ name, position, rotation, scale, color }) => {
  return (
    <Suspense fallback={null}>
      <Model
        name={name}
        color={color}
        {...{
          position: [position.x, position.y, position.z],
          rotation: [rotation.x, rotation.y, rotation.z],
          scale,
        }}
      />
    </Suspense>
  );
});
