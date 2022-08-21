import { implementRuntimeComponent } from '@sunmao-ui/runtime';
import { Type } from '@sinclair/typebox';
import { PRESET_PROPERTY_CATEGORY } from '@sunmao-ui/shared';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default implementRuntimeComponent({
  version: 'webgl/v1',
  metadata: {
    name: 'canvas',
    displayName: 'Canvas',
    description: '',
    exampleProperties: {
      orbitControls: {
        rotate: false,
        zoom: false,
      },
    },
    exampleSize: [1, 1],
    annotations: {
      category: PRESET_PROPERTY_CATEGORY.Basic,
    },
  },
  spec: {
    properties: Type.Object({
      orbitControls: Type.Object(
        {
          rotate: Type.Boolean(),
          zoom: Type.Boolean(),
        },
        {
          title: 'Orbit Controls',
        }
      ),
    }),
    state: Type.Object({}),
    methods: {},
    slots: {
      content: {
        slotProps: Type.Object({}),
      },
    },
    styleSlots: ['content'],
    events: [],
  },
})(({ slotsElements, orbitControls }) => {
  // implement your component here
  return (
    <Canvas>
      {slotsElements.content?.({})}
      <OrbitControls
        enableZoom={orbitControls.zoom}
        enableRotate={orbitControls.rotate}
      />
    </Canvas>
  );
});
