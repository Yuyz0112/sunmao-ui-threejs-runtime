import { type SunmaoUIRuntimeProps } from '@sunmao-ui/runtime';
import lib from './sunmao/lib';
import i18n from './locales';
import '@sunmao-ui/arco-lib/dist/index.css';
import './styles/global.ts';

const libs = [lib];

export default {
  libs,
  dependencies: {
    i18n,
  },
} as SunmaoUIRuntimeProps;
