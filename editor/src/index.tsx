import SunmaoEditor from './SunmaoEditor';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { RouteComponent } from '../../src/components/Router';

export default function Editor() {
  return (
    <RouteComponent
      generateComponent={route => () => <SunmaoEditor name={route.name} />}
      type="history"
    />
  );
}

createRoot(document.getElementById('root')!).render(<Editor />);
