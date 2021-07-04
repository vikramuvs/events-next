import NewEventForm from "../../components/ui/newEventForm";
import styles from "./addEvent.module.css";

function AddEvent() {
  async function addEventHandler(eventdata) {
    const response = await fetch('/api/addNewEvent', {
      method: 'POST',
      body: JSON.stringify(eventdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return <div className={styles.addEventContainer}>
    <NewEventForm onAddEvent={addEventHandler}/>
  </div>;
}

export default AddEvent;
