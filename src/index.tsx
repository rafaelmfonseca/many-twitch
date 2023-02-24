import ReactDOM from 'react-dom/client';

import { App } from './App';

import './index.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.min';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
