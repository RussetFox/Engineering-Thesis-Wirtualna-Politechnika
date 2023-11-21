import React from "react";
import '../Styles/Event-Api-Styling.css';


export class EventDetails {
    eventName: string;
    eventStartTime?: string;
    eventStartDate: string;
    eventImageURL: string;

    constructor(eventName: string, eventImageURL: string, eventDate: string) {
        this.eventName = eventName;
        this.eventImageURL = eventImageURL;
        this.eventStartDate = eventDate;
    }
}
interface EventFrameProps {
    eventDetails: EventDetails;
}



const EventFrame: React.FC<EventFrameProps> = ({ eventDetails }) => {
    return (
        <div className="event-container">
            <text className="event-name">{eventDetails.eventName}</text>
            <img className="event-image" src={eventDetails.eventImageURL} alt="Event" />
            <text className="event-date-time">{eventDetails.eventStartDate}</text>
        </div>
    )

}
export default EventFrame;