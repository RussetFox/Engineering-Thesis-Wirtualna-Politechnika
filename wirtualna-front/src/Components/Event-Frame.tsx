import EventContainer from './Event-Container';
import { EventDetails } from './Event-Container';
import '../Styles/Event-Api-Styling.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const handleLogoutAndNav = async (nav) => {
  try {
    await fetch("http://localhost:8080/user/auth/logout", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(() => { nav("/") })
  }
  catch (error) {
    console.error('Error: ', error);
  }
};

export default function EventFrame() {
  const navig = useNavigate();
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

  const handleLogout = () =>{
    handleLogoutAndNav(navig);
  }
  return (
    <div className='event-frame'>
      <button className='event-frame-button'onClick={handleLogout}>Wyloguj się</button>
      <h2>Wydarzenia w Twojej okolicy!</h2>
      {events.slice(0, 3).map((eventDetail, index) => (
        <EventContainer key = {index} eventDetails={eventDetail} />
      ))}
    </div>
  )
}