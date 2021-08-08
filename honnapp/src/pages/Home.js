import { BrowserRouter as Router, Switch, Route , Link} from "react-router-dom";
import React, { useState } from 'react';
import { Card, CardColumns, CardGroup, Body, Footer, Img, Text, Deck, Title, Button } from 'react-bootstrap';
import Updates from '../components/Updates';
import { Document, Page } from 'react-pdf';
import Pdf from '../NewsletterAugust2021.pdf'
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
                        Latest Newsletter
                    </h3>
                    <p>Get the latest info</p>
                    {/* <Link to="/newsletter"><button>
                            August 2021
                        </button>
                    </Link> */}
                    <a href={Pdf} target='_blank' rel='noopener noreferrer'><button>August 2021</button></a>
                </div>
            </div>

            <div className="card-group">
                <div className="homecard">
                    <h3 className="cardtitle">
                        Learn Ways to Help</h3>
                    <p>Donations big or small help</p>
                    <Link to="/help"><button>
                        Help today
                    </button>
                    </Link>
                </div>
            </div>

            <div className="card-group">
                <div className="homecard">
                    <h3 className="cardtitle">
                        Apply for Help
                    </h3>
                    <p>Complete the application</p>
                    <button><a href="https://form.jotform.com/212186680940256" target="_blank">Apply for Help</a></button>
                </div>
            </div>
            <Updates />
        </div>
    )
}

export default Home;


<a href="https://form.jotform.com/212186680940256" target="_blank">Apply for Help</a>