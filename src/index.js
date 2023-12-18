import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import AppFC from './App.tsx';

{/* <StrictMode> */ }
const root = createRoot(document.getElementById('root'));
root.render(
  <AppFC />
)
{/* </StrictMode> */ }
