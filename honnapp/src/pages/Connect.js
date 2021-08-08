import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from 'react';

function Connect() {

    return (
        <div>
            <section className="hero">
                <div className="hero-inner-small">
                    <img src={'https://user-images.githubusercontent.com/71906988/128268672-70f08c65-5060-4e80-bd67-b59c7589e6a9.png'} />
                    <h3>Find and follow HONN on for updates</h3>
                    <div className="social-icons">
                        <a href="https://form.jotform.com/212186680940256" target="_blank"><img className="donate-img" src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png'></img></a>
                        <a href="https://form.jotform.com/212186680940256" target="_blank"><img className="donate-img" src='https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png'></img></a>
                        <a href="https://form.jotform.com/212186680940256" target="_blank"><img className="donate-img" src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png'></img></a>
                    </div>
                    <h3>Subscribe to our mailing list for updates.</h3>
                    <form id="contact-form" method="POST">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" size="4" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>



        </div>
    )
}

export default Connect;