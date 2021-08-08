import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function News() {
    return (
        <div>
            <img className="small-logo" src={'https://user-images.githubusercontent.com/71906988/128268672-70f08c65-5060-4e80-bd67-b59c7589e6a9.png'} />
            <h3>June 1st, 2018 Interview with Your Oxford</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KlrR_DWMfEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>2016 Way North Way ad campaign for raising awareness on high grocery prices</h3>
            <iframe src="https://globalnews.ca/video/embed/2456992/" width="670" height="372" frameborder="0" allowfullscreen scrolling="no"></iframe>
        </div>
    )
}

export default News;