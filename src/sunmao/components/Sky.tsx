import { implementRuntimeComponent } from '@sunmao-ui/runtime';
import { Type } from '@sinclair/typebox';
import { PRESET_PROPERTY_CATEGORY } from '@sunmao-ui/shared';
import { Sky } from '@react-three/drei';

export default implementRuntimeComponent({
  version: 'webgl/v1',
  metadata: {
    name: 'sky',
    displayName: 'Sky',
    description: '',
    isDraggable: false,
    isResizable: false,
    exampleProperties: {
      azimuth: 0.1,
      turbidity: 10,
      rayleigh: 0.5,
      inclination: 0.6,
      distance: 1000,
    },
    exampleSize: [1, 1],
    annotations: {
      category: PRESET_PROPERTY_CATEGORY.Basic,
    },
  },
  spec: {
    properties: Type.Object({
      azimuth: Type.Number(),
      turbidity: Type.Number(),
      rayleigh: Type.Number(),
      inclination: Type.Number(),
      distance: Type.Number(),
    }),
    state: Type.Object({}),
    methods: {},
    slots: {},
    styleSlots: ['content'],
    events: [],
  },
})(({ azimuth, turbidity, rayleigh, inclination, distance }) => {
  // implement your component here
  return (
    <Sky
      azimuth={azimuth}
      turbidity={turbidity}
      rayleigh={rayleigh}
      inclination={inclination}
      distance={distance}
    />
  );
});
