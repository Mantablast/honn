import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Rules() {
    return (
        <div className="rule-box">
            <img className="small-logo" src={'https://user-images.githubusercontent.com/71906988/128268672-70f08c65-5060-4e80-bd67-b59c7589e6a9.png'} />
            <h2>Rules and Eligibility</h2>
            <h4>We are only able to help families living in remote and isolated fly-in communities in the northern parts of Canada.  If you are not in such a community we are afraid we will be unable to help you.  Please request assistance only if you are in dire need of help to feed your family and if family members are regularly missing meals and you are not able to afford adequate food.  We will check on your circumstances before adding you to the list.</h4>
            <h3>Application Requirements</h3>
            <ul className="list-group">By submitting this application to Helping Our Northern Neighbours I agree to the following:
                <li>I am not receiving assistance from any other group or individual.</li>

                <li>I will not self-match, or contact helpers and sponsors and ask them to help me.</li>

                <li>I understand that you only provide basics not luxuries, with an emphasis on food.</li>

                <li>I will not sell anything I receive. </li>

                <li>If I receive something I don’t want I will give it to another family free of charge.</li>

                <li>I will communicate with the person with whom I am matched.</li>

                <li>I will notify the helper/sponsor when anything arrives and thank them.</li>

                <li>I will notify the program if there are any changes to my application.</li>

                <li>All the people listed on the application live in my house full time.</li>

                <li>Only one application will be submitted for my household.</li>

                <li>I understand that I may request items but that the people helping are volunteers and that it is up to them what is sent or if they send boxes from home or order through the local store or online.</li>
            </ul>
        </div>
    )
}

export default Rules;