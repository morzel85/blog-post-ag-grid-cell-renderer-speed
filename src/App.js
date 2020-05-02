import React from 'react';
import './App.css';

import Grid from './grid/Grid';

function App() {
    return (
        <div className="App">
            <Grid />
            <div className="about">
                Example app for <a href="https://morzel.net">morzel.net</a> blog post
            </div>
        </div>
    );
}

export default App;
