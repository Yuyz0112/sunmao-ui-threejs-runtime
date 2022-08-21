import Cloud from './components/Cloud';
import Sky from './components/Sky';
import OrbitControls from './components/OrbitControls';
import PointLight from './components/PointLight';
import AmbientLight from './components/AmbientLight';
import Box from './components/Box';
import Canvas from './components/Canvas';
import Font from './components/Font';
import animation from './traits/animation';
import i18n from './utilMethods/i18n';
import navigate from './utilMethods/navigate';
import { type SunmaoLib } from '@sunmao-ui/runtime';
const lib: SunmaoLib = {
    components: [Font, Canvas, Box, AmbientLight, PointLight, OrbitControls, Sky, Cloud],
    traits: [animation],
    utilMethods: [i18n, navigate],
};
export default lib;
