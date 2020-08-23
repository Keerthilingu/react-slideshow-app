import React from "react";
import "./App.css";

import Slides from "./components/Slides";
const title = "Slideshow App";

function App({ slides }) {
    return (
        <div className="App">
        <div className="App-header">
                <h3>{title}</h3>
            </div>

            <div>
                <Slides slides={slides} />
            </div>
        </div>
    );
}
export default App;
