import EventContainer from './Event-Container';
import {EventDetails} from './Event-Container';
import '../Styles/Event-Api-Styling.css';
import Image1 from '../Resources/TestImages/Event-Image-1.jpg';
import Image2 from '../Resources/TestImages/Event-Image-2.jpg';
import Image3 from '../Resources/TestImages/Event-Image-3.jpg';

import React from 'react';

const eventDetail1 = new EventDetails('Event1', Image1)
const eventDetail2 = new EventDetails('Event2', Image2)
const eventDetail3 = new EventDetails('Event3', Image3)
const eventArr: EventDetails[] = [eventDetail1, eventDetail2, eventDetail3];

export default function EventFrame() {
    return (
        <div className='event-frame'>
            <button className='event-frame-button'>Zobacz więcej</button>
            <h2>Wydarzenia w Twojej okolicy!</h2>
            <EventContainer eventDetails={eventArr[0]}/>
            <EventContainer eventDetails={eventArr[1]}/>
            <EventContainer eventDetails={eventArr[2]}/>
        </div>
    )
}