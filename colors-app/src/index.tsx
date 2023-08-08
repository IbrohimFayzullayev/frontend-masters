import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/application';
import { ColorProvider } from './context';

import { makeServer } from './api';

import './index.css';

const environment = process.env.NODE_ENV;
makeServer({ environment });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ColorProvider>
      <Application />
    </ColorProvider>
  </React.StrictMode>,
);
