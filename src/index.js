import { createRoot } from 'react-dom/client';

//Componentes
import Tablero from './Tablero';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
   <Tablero/> 
);