import { createRoot } from 'react-dom/client';
import PanelHelper from './src/components/PanelHelper';
import './src/styles.css';

const domNode = document.createElement("div");
const root = createRoot(domNode);
root.render(<PanelHelper />);

document.body.appendChild(domNode);
