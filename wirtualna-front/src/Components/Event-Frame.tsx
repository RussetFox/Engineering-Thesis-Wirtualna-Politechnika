import EventContainer from './Event-Container';
import { EventDetails } from './Event-Container';
import '../Styles/Event-Api-Styling.css';
import { useEffect, useState } from 'react';

const eventArr: EventDetails[] = [];


export default function EventFrame () {
    const [events, setEvents] = useState(() => []);
    useEffect(() => {
        fetch('http://localhost:8080/', { method: 'GET' })
            .then((res) => res.json())
            .then(data => {
                const transformedEvents = data.map(event => 
                  new EventDetails(event.eventName, event.eventImageUrl, event.eventStartDate)
                );
                setEvents(transformedEvents);
              })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className='event-frame'>
            <button className='event-frame-button'>Wyloguj się</button>
            <h2>Wydarzenia w Twojej okolicy!</h2>
            {events.slice(0, 3).map((eventDetail) => (
            <EventContainer eventDetails={eventDetail} />
      ))}
        </div>
    )
}