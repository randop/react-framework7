import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import F7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7-React Plugin
import Framework7React from 'framework7-react';

import 'framework7-icons';

// Init F7-React Plugin
Framework7.use(Framework7React);

import Hello from "./app.jsx";

ReactDOM.render(<Hello />, document.getElementById('root') );
