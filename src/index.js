import React from 'react';
import ReactDOM from 'react-dom/client';

// CHOOSE ONE:
// USE THE FOLLOWING TWO IMPORTS FOR BOOTSTRAP W?O SASS
// CODE IN ./INDEX.CSS WILL OVERRISE AND CUSTOMIZE BOOTSTRAP
//import 'bootstrap/dist/css/bootstrap.css';
//import './index.css';

// OR...
// USE THE FOLLOWING IMPORT FOR BOOTSTRAL WITH SASS
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>Hello from Python/React, using Create-React-App</div>
);