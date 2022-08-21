import { implementRuntimeComponent } from '@sunmao-ui/runtime';
import { Type } from '@sinclair/typebox';
import { PRESET_PROPERTY_CATEGORY } from '@sunmao-ui/shared';
import { OrbitControls } from '@react-three/drei';

export default implementRuntimeComponent({
  version: 'webgl/v1',
  metadata: {
    name: 'orbit_controls',
    displayName: 'OrbitControls',
    description: '',
    isDraggable: false,
    isResizable: false,
    exampleProperties: {},
    exampleSize: [1, 1],
    annotations: {
      category: PRESET_PROPERTY_CATEGORY.Basic,
    },
  },
  spec: {
    properties: Type.Object({}),
    state: Type.Object({}),
    methods: {},
    slots: {},
    styleSlots: ['content'],
    events: [],
  },
})(() => {
  // implement your component here
  return <OrbitControls />;
});
