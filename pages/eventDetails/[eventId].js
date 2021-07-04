import { useRouter } from "next/router";
import styles from "./eventDetails.modules.css";

function EventDetails(props) {
  const router = useRouter();

  const eventId = router.query.eventId;

  //send a request to backend API to fetch event item

  let imgTag;

  if (props.eventSlideshow) {
    imgTag = <iframe src={props.eventSlideShowURL} />;
  } else {
    imgTag = <img src={props.eventImage} alt={props.eventTitle} />;
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

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      }
    ],
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  return {
    props: {
      eventData: {
        eventTitle: "asdasdad",
        eventStartDate: "12-09-2021",
        eventEndDate: "12-10-2021",
        eventDescription: "asdasdasdadasdasdasdasdasdasdasdadasd",
        eventId: eventId,
        eventImage: "sdasdadasdadad",
        eventSlideShowURL: "asdasdasdasdasdasd",
        eventSlideshow: false,
      },
    },
  };
}
