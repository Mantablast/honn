import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from 'react';

function Home() {

    return (
        <div>
            <section class="hero">
            <div class="hero-inner">
                <h1>Hero Image Section</h1>
                <h2>where the logo may go</h2>
                {/* <img src={imageName} /> */}
            </div>
        </section>
        </div>
    )
}

export default Home;