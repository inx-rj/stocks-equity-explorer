import '@/assets/css/tailwind.css';
import '@mantine/core/styles.layer.css';
import '@mantine/carousel/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
