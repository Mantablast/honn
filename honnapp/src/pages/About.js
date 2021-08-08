import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function About() {
    return (
        <div className="help-box">
            <h2>About Honn</h2>
            <p>Helping Our Northern Neighbours was born in July of 2014 after it was discovered that prices for food and other goods in Northern Canada were unbelievably high when compared to their counterparts in the south. Apparently this was due in part to the cost of transporting the items to these locations, but instead of being absorbed by the government, these prices were being passed on to the people living in these areas. According to photos that were posted a case of water was being sold for $106, a roast of beef $217, a jug of orange juice $19, and a 4L jug of milk for more than $12.</p>
                <p>People were regularly posting and asking if anyone could send them food as their cupboards were bare and they had nothing to feed their family. Subsequently media outlets ran stories of an Elder digging through the castoffs in a dump trying to find something edible that could be taken home, of children missing school because they were hungry, or of the Principal finding a student crying during school hours because the pain in their tummy was unbearable, and of the high suicide rates in these areas. There were stories of empty food bank shelves, and soup kitchen need outweighing the supply. Teachers were using their own money to buy shoes for children who had inadequate footwear for the harsh conditions, or a coat for a child who did not have one.</p>

                <p>While we were introduced to this problem in Nunavut, with a little research we learned that similar conditions plague northern First Nations communities as well. It was then when we found there were very few groups in existence to address the needs in the north outside the Inuit communities themselves that we decided to create an organization that would form a partnership with those in the north to try to give them a hand up and support and encourage the development of local initiatives to assist the people while we and others work toward bringing awareness to the conditions that exist and until a permanent solution can be found and implemented. We are not the change or the answer. We are a band-aid solution in the interim, because help that comes too late does not do much for people who have died in the meantime. One day we hope to put ourselves out of business.</p>
                <p>We work in remote and isolated fly-in only or limited access areas of the three territories and the northern regions of the ten provinces of Canada.</p>
        </div>
    )
}

export default About;