import styles from "./EventItem.module.css";
import Image from "next/image";
import { useRouter } from 'next/router';

function EventItem(props) {
    const router = useRouter();

    function eventClickHandler() {
        router.push('/eventDetails/' + props.id );
    }

  return (
    <div className={styles.eventItem}>
      <Image src={props.thumb} width="100%" height="100%"/>
      <h3 className={styles.hLink} onClick={eventClickHandler}>{props.title}</h3>
      <h2>{props.description}</h2>
      <div className={styles.dateStyle}>
        {props.startDate} - {props.endDate}
      </div>
    </div>
  );
}

export default EventItem;
