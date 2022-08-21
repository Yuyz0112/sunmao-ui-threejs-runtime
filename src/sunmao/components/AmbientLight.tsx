import { implementRuntimeComponent } from '@sunmao-ui/runtime';
import { Type } from '@sinclair/typebox';

export default implementRuntimeComponent({
  version: 'webgl/v1',
  metadata: {
    name: 'ambient_light',
    displayName: 'AmbientLight',
    description: '',
    isDraggable: false,
    isResizable: false,
    exampleProperties: {},
    exampleSize: [1, 1],
    annotations: {
      category: 'Light',
    },
  },
  spec: {
    properties: Type.Object({}),
    state: Type.Object({}),
    methods: {},
    slots: {},
    styleSlots: [],
    events: [],
  },
})(() => {
  // implement your component here
  return <ambientLight />;
});
