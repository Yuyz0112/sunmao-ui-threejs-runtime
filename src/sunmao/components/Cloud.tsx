import { implementRuntimeComponent } from '@sunmao-ui/runtime';
import { Type } from '@sinclair/typebox';
import { PRESET_PROPERTY_CATEGORY } from '@sunmao-ui/shared';
import { Cloud } from '@react-three/drei';
import { Suspense } from 'react';

export default implementRuntimeComponent({
  version: 'webgl/v1',
  metadata: {
    name: 'cloud',
    displayName: 'Cloud',
    description: '',
    isDraggable: false,
    isResizable: false,
    exampleProperties: {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      speed: 0.2,
      opacity: 0.8,
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
      speed: Type.Number(),
      opacity: Type.Number(),
    }),
    state: Type.Object({}),
    methods: {},
    slots: {},
    styleSlots: ['content'],
    events: [],
  },
})(({ position, speed, opacity }) => {
  // implement your component here
  return (
    <Suspense fallback={null}>
      <Cloud
        position={[position.x, position.y, position.z]}
        speed={speed}
        opacity={opacity}
      />
    </Suspense>
  );
});
