import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

//Componentes
import Tablero from './Tablero';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
    <StrictMode>
           <Tablero/> 
    </StrictMode>

);