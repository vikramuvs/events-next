import EventItem from './EventItem';
import styles from './EventList.module.css';

function EventList(props) {
    const details = props.details;

    const eventItem = details.map((eventItem, i) => <EventItem 
        title={eventItem.eventTitle}
        description={eventItem.eventDescription}
        startDate={eventItem.eventStartDate}
        endDate={eventItem.eventEndDate}
        thumb={eventItem.eventThumb}
        id={eventItem.id}
        />);

    return (
        <div className={styles.eventList}>
           { eventItem }
        </div>
        
    );
}

export default EventList;