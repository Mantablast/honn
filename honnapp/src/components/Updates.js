import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from 'react';

function Updates() {
    return (
        <div className="home-updates">
            <h2>Recent News and Updates</h2>
            <h3>Karen K. Lee</h3>
            <h4>Blogger Post February 11, 2017</h4>
            <img src='https://sittingatthecrossroads.files.wordpress.com/2016/12/nunavut-cherries.jpg?w=320&h=&zoom=2'/>
            <p className="padding20">About a year ago, I learned of a wonderful Facebook group: Helping our Northern Neighbours. It took me a year before I took what I learned from that group into action and sent out a care package out to a family in Northern Canada. I wanted to share my experiences, and hopefully, open you up to the idea of donating a package!</p>
            <p>If you live in the southern provinces in Canada, it’s a little hard wrapping your mind around what it’s like to live in the north. Now and then, I sometimes share their cost of living to people around me as a fun fact, though in reality, it’s not at all fun. </p>
            <a href="https://karenklee.com/2017/02/11/helping-our-northern-neighbours/">Click here for full article</a>

        </div>
    )
}

export default Updates;