import Link from "next/link";
import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainNavigation from "../components/Layout/MainNavigation";
import EventList from "../components/eventList/EventList";
import { useState, useEffect } from "react";
import { MongoClient } from "mongodb";

function Home(props) {
  const [loadedEvents, setLoadedEvents] = useState([]);

  useEffect(() => {
    //send http request and fetch data
    setLoadedEvents(EVENT_LIST);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>RIT | Events</title>
        <meta name="description" content="Events conducted at RIT, Bengaluru" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainNavigation />

      <div className={styles.main}>
        <h1>Events conducted at Ramaiah Institute of Technology, Bengaluru</h1>

        <EventList details={props.details} />
      </div>

      <footer className={styles.footer}>Copyright. All Rights Reserved.</footer>
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://vikramuvs:eureka123@cluster0.hvhou.mongodb.net/events?retryWrites=true&w=majority"
  );
  const db = client.db();

  const eventsCollection = db.collection("events");

  const eventList = await eventsCollection.find().toArray();

  client.close();

  return {
    props: {
      details: eventList.map((event) => ({
        eventTitle: event.eventTitle,
        eventThumb: event.eventImage,
        eventDescription: event.eventDesc,
        eventStartDate: event.eventStartDate,
        eventEndDate: event.eventEndDate,
        slideshow: event.hasSlideshow,
        video: event.hasVideo,
        id: event._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Home;
