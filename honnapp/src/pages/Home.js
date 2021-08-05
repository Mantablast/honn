import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from 'react';
import { Card, CardColumns, CardGroup, Body, Footer, Img, Text, Deck, Title, Button } from 'react-bootstrap';
import Updates from '../components/Updates';

function Home() {

    return (
        <div>
            <section className="hero">
                <div className="hero-inner">
                    <img src={'https://user-images.githubusercontent.com/71906988/128268672-70f08c65-5060-4e80-bd67-b59c7589e6a9.png'} />
                </div>
            </section>
            <div className="card-group">
                <div className="homecard">
                    <h3 className="cardtitle">
                        Latest News
                    </h3>
                    <p>Get the latest info</p>
                    <button>Updates</button>
                </div>
            </div>

            <div className="card-group">
                <div className="homecard">
                    <h3 className="cardtitle">
                        Learn Ways to Help
                    </h3>
                    <p>Donations big or small help</p>
                    <button>Help Today</button>
                </div>
            </div>

            <div className="card-group">
                <div className="homecard">
                    <h3 className="cardtitle">
                        Apply for Help
                    </h3>
                    <p>Complete the application</p>
                    <button>Apply for Help</button>
                </div>
            </div>
            <Updates />
        </div>
    )
}

export default Home;
