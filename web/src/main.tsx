import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';

import './index.css';
import Peek from './components/Peek';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <Peek />
    </VisibilityProvider>
  </React.StrictMode>,
);
