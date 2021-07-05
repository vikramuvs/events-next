import styles from "./EventDetails.module.css";

function EventDetails(props) {
  let imgTag;

  if (!(props.eventData.hasSlideshow == "1")) {
    imgTag = <iframe src={props.eventData.eventSlideShowURL} />;
  } else {
    imgTag = (
      <img src={props.eventData.eventImage} alt={props.eventData.eventTitle} style={{width: "100%", height: "100%"}} />
    );
  }

  return (
    <div className={styles.eventDetailsContainer}>
      <div className={styles.eventImageContainer}>{imgTag}</div>
      <div className={styles.eventDetailsTitle}>
        <h1>{props.eventData.eventTitle}</h1>
      </div>
      <div className={styles.eventDetailsDate}>
        {props.eventData.eventStartDate} - {props.eventData.eventEndDate}
      </div>
      <div className={styles.eventDetailsDescription}>
        {props.eventData.eventDesc}
      </div>
    </div>
  );
}

export default EventDetails;
