import { MongoClient, ObjectId } from "mongodb";
import EventDetails from "../../components/eventDetails/EventDetails";

function EventDetailsDisplay(props) {

  return (
   <EventDetails eventData={props.eventData}/>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://vikramuvs:eureka123@cluster0.hvhou.mongodb.net/events?retryWrites=true&w=majority"
  );
  const db = client.db();

  const eventsCollection = db.collection("events");

  const eventList = await eventsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: true,
    paths: eventList.map((eventItem) => ({
      params: {
        eventId: eventItem._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://vikramuvs:eureka123@cluster0.hvhou.mongodb.net/events?retryWrites=true&w=majority"
  );
  const db = client.db();

  const eventsCollection = db.collection("events");

  const selectedEvent = await eventsCollection.findOne({
    _id: ObjectId(eventId),
  });
 
  client.close();

  return {
    props: {
      eventData: {
        id: selectedEvent._id.toString(),
        hasSlideshow: selectedEvent.hasSlideshow,
        eventSlideShowURL: selectedEvent.slideshowURL,
        eventImage: selectedEvent.eventImage,
        eventTitle: selectedEvent.eventTitle,
        eventStartDate: selectedEvent.eventStartDate,
        eventEndDate: selectedEvent.eventEndDate,
        eventDesc: selectedEvent.eventDesc,
        eventVideoURL: selectedEvent.videoURL,
        hasVideo: selectedEvent.hasVideo,
        eventDept: selectedEvent.eventDept
      },
    },
  };
}

export default EventDetailsDisplay;
