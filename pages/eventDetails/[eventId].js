import { useRouter } from "next/router";
import styles from "./eventDetails.modules.css";

function EventDetails(props) {
  const router = useRouter();

  const eventId = router.query.eventId;

  //send a request to backend API to fetch event item

  let imgTag;

    if (props.eventSlideshow){
        imgTag = <img src={props.eventImage} alt={props.eventTitle} />;
    }

    else {
        imgTag = <iframe src={props.eventSlideShowURL} />;
    }

  return (
    <div className={styles.eventDetailsContainer}>
      {imgTag}
      <div className={styles.eventDetailsTitle}>
        <h1>{props.eventTitle}</h1>
      </div>
      <div className={styles.eventDetailsDate}>
            {props.eventStartDate} - {props.eventEndDate}
      </div>
      <div className={styles.eventDetailsDescription}>
            {props.eventDescription}
      </div>

    </div>
  );
}

export default EventDetails;
