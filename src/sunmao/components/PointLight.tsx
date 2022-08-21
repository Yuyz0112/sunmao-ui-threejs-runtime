import { implementRuntimeComponent } from '@sunmao-ui/runtime';
import { Type } from '@sinclair/typebox';

export default implementRuntimeComponent({
  version: 'webgl/v1',
  metadata: {
    name: 'point_light',
    displayName: 'PointLight',
    description: '',
    isDraggable: false,
    isResizable: false,
    exampleProperties: {
      position: {
        x: 10,
        y: 10,
        z: 10,
      },
    },
    exampleSize: [1, 1],
    annotations: {
      category: 'Light',
    },
  },
  spec: {
    properties: Type.Object({
      position: Type.Object({
        x: Type.Number(),
        y: Type.Number(),
        z: Type.Number(),
      }),
    }),
    state: Type.Object({}),
    methods: {},
    slots: {},
    styleSlots: [],
    events: [],
  },
})(({ position }) => {
  // implement your component here
  return <pointLight position={[position.x, position.y, position.z]} />;
});
