import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <main>
      <h1>Pixel Tarot</h1>
      <p>Твоя тихая комната магии</p>
    </main>
  );
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Не найден корневой элемент приложения');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);