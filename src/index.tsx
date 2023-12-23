import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import AppFC from './App.tsx';


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <AppFC />
)

// --global window, document
