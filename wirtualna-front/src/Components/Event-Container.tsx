import React from "react";
import '../Styles/Event-Api-Styling.css';


export class EventDetails {
    eventName: string;
    eventImageURL: string;

    constructor(eventName: string, eventImageURL: string) {
        this.eventName = eventName;
        this.eventImageURL = eventImageURL;
    }
}
interface EventFrameProps {
    eventDetails: EventDetails;
}



const EventFrame: React.FC<EventFrameProps> = ({ eventDetails }) => {
    return (
        <div className="event-container">
            <p className="event-name">{eventDetails.eventName}</p>
            <img className="event-image" src={eventDetails.eventImageURL} alt="Event" />
            <p className="event-date-time">1.10.2023</p>
        </div>
    )

}
export default EventFrame;