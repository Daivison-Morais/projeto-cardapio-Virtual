import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";

import './assets/styles/reset.css';
import './assets/styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<App tab="home" />);

