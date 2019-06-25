import React from 'react';

// Components
import Navbar from '../navbar/navbar';
import AboutContainer from '../about/about';
import Skills from '../skills/skills';
import Portfolio from '../portfolio/portfolio';

function App() {
    return (
        <div className="App">
            <header>
                <Navbar />
            </header>

            <AboutContainer />
            <Skills />
            <Portfolio />
        </div>
    );
}

export default App;
