import React from 'react';

// Components
import Navbar from '../navbar/navbar';
import AboutContainer from '../about/about';
import Skills from '../skills/skills';

function App() {
    return (
        <div className="App">
            <header>
                <Navbar />
            </header>

            <AboutContainer />
            <Skills />
        </div>
    );
}

export default App;
