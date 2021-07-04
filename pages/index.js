import Link from "next/link";
import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainNavigation from "../components/Layout/MainNavigation";
import EventList from '../components/eventList/EventList';
import { useState, useEffect } from "react";

const EVENT_LIST = [{
  eventTitle: 'Dummy Title',
  eventThumb: "https://lh3.googleusercontent.com/HTBrf7de3Isc5ZvFsykmvl86dV33PkWesiB8IQC5cTLpR7KvvCnCEPpESdYpgQZtBT1YlE9nz3pCtA9nuN8hE9if-1kwL-g3M0_k7_AQgJjdCBMWDfUhKyNS1nz-4C_65J_333Pn3oKvaRam9DsCbYPxkUK_z0XahCbxc4nnquMxTmoMzYwBVp67p-lg9Q31aJ8RhZapRtZrio8ocEQmDKgeJWe7ZzZIdbJQECJwM7WYdWABpMdIL2FPgIgu-gVhJVIu3ZG3Oz7Q2WJhH2sOLal45RmKc2Wi7aq-5ljVyJGVRjBTIV73LuSxaiAslDkX6WOxATXgh1yRm6z8eFXz6g6SdN4gE4N-gBmpQjv_moprRsfnH5Xd17xde71UxdehGe3-4qRmGFNrilfcHeHdD_fRP-MpWy8PoLDL94djC0B0HIJRZCCLqKaaS0bbTpbUlySiZ1APHlPEWsW-FVAd8nj4GkMYrUvxzjQ3X0rhYPVlULEZAA8Bz24bAcOqxgHcUW1dPUhXBwx1jZ5b0o8j7ExXVhAD2dYMIv_hcejT-h29byvzjbnOcXBlv0J_c7M2MS5yYSZnhnAizVuymMx4W_ltMH_U5nW4sZWPf8TXl5VhTHPar9lThqs2oQ8Lo9PLoqiGvyb5Mia2gD4tfBv9r_PigRWALGfXEKb3rKGGccypZ1ASr0xfssIhvjjJQ8B_udJdq9LE5dj_0LVC9RUUfAI=w1882-h604-no",
  eventDescription: "lorem ipsum lorem upsusadadoaisd asdipaosd asdoais adasdad adasd a ad ada a daasdad",
  eventStartDate: '10-02-2021',
  eventEndDate: '11-02-2021',
  slideshow: true,
  video: true,
},
{
  eventTitle: 'Dummy Title',
  eventThumb: "https://lh3.googleusercontent.com/HTBrf7de3Isc5ZvFsykmvl86dV33PkWesiB8IQC5cTLpR7KvvCnCEPpESdYpgQZtBT1YlE9nz3pCtA9nuN8hE9if-1kwL-g3M0_k7_AQgJjdCBMWDfUhKyNS1nz-4C_65J_333Pn3oKvaRam9DsCbYPxkUK_z0XahCbxc4nnquMxTmoMzYwBVp67p-lg9Q31aJ8RhZapRtZrio8ocEQmDKgeJWe7ZzZIdbJQECJwM7WYdWABpMdIL2FPgIgu-gVhJVIu3ZG3Oz7Q2WJhH2sOLal45RmKc2Wi7aq-5ljVyJGVRjBTIV73LuSxaiAslDkX6WOxATXgh1yRm6z8eFXz6g6SdN4gE4N-gBmpQjv_moprRsfnH5Xd17xde71UxdehGe3-4qRmGFNrilfcHeHdD_fRP-MpWy8PoLDL94djC0B0HIJRZCCLqKaaS0bbTpbUlySiZ1APHlPEWsW-FVAd8nj4GkMYrUvxzjQ3X0rhYPVlULEZAA8Bz24bAcOqxgHcUW1dPUhXBwx1jZ5b0o8j7ExXVhAD2dYMIv_hcejT-h29byvzjbnOcXBlv0J_c7M2MS5yYSZnhnAizVuymMx4W_ltMH_U5nW4sZWPf8TXl5VhTHPar9lThqs2oQ8Lo9PLoqiGvyb5Mia2gD4tfBv9r_PigRWALGfXEKb3rKGGccypZ1ASr0xfssIhvjjJQ8B_udJdq9LE5dj_0LVC9RUUfAI=w1882-h604-no",
  eventDescription: "lorem ipsum lorem upsusadadoaisd asdipaosd asdoais adasdad adasd a ad ada a daasdad",
  eventStartDate: '10-02-2021',
  eventEndDate: '11-02-2021',
  slideshow: true,
  video: true,
},
{
  eventTitle: 'Dummy Title',
  eventThumb: "https://lh3.googleusercontent.com/HTBrf7de3Isc5ZvFsykmvl86dV33PkWesiB8IQC5cTLpR7KvvCnCEPpESdYpgQZtBT1YlE9nz3pCtA9nuN8hE9if-1kwL-g3M0_k7_AQgJjdCBMWDfUhKyNS1nz-4C_65J_333Pn3oKvaRam9DsCbYPxkUK_z0XahCbxc4nnquMxTmoMzYwBVp67p-lg9Q31aJ8RhZapRtZrio8ocEQmDKgeJWe7ZzZIdbJQECJwM7WYdWABpMdIL2FPgIgu-gVhJVIu3ZG3Oz7Q2WJhH2sOLal45RmKc2Wi7aq-5ljVyJGVRjBTIV73LuSxaiAslDkX6WOxATXgh1yRm6z8eFXz6g6SdN4gE4N-gBmpQjv_moprRsfnH5Xd17xde71UxdehGe3-4qRmGFNrilfcHeHdD_fRP-MpWy8PoLDL94djC0B0HIJRZCCLqKaaS0bbTpbUlySiZ1APHlPEWsW-FVAd8nj4GkMYrUvxzjQ3X0rhYPVlULEZAA8Bz24bAcOqxgHcUW1dPUhXBwx1jZ5b0o8j7ExXVhAD2dYMIv_hcejT-h29byvzjbnOcXBlv0J_c7M2MS5yYSZnhnAizVuymMx4W_ltMH_U5nW4sZWPf8TXl5VhTHPar9lThqs2oQ8Lo9PLoqiGvyb5Mia2gD4tfBv9r_PigRWALGfXEKb3rKGGccypZ1ASr0xfssIhvjjJQ8B_udJdq9LE5dj_0LVC9RUUfAI=w1882-h604-no",
  eventDescription: "lorem ipsum lorem upsusadadoaisd asdipaosd asdoais adasdad adasd a ad ada a daasdad",
  eventStartDate: '10-02-2021',
  eventEndDate: '11-02-2021',
  slideshow: true,
  video: true,
},
{
  eventTitle: 'Dummy Title',
  eventThumb: "https://lh3.googleusercontent.com/HTBrf7de3Isc5ZvFsykmvl86dV33PkWesiB8IQC5cTLpR7KvvCnCEPpESdYpgQZtBT1YlE9nz3pCtA9nuN8hE9if-1kwL-g3M0_k7_AQgJjdCBMWDfUhKyNS1nz-4C_65J_333Pn3oKvaRam9DsCbYPxkUK_z0XahCbxc4nnquMxTmoMzYwBVp67p-lg9Q31aJ8RhZapRtZrio8ocEQmDKgeJWe7ZzZIdbJQECJwM7WYdWABpMdIL2FPgIgu-gVhJVIu3ZG3Oz7Q2WJhH2sOLal45RmKc2Wi7aq-5ljVyJGVRjBTIV73LuSxaiAslDkX6WOxATXgh1yRm6z8eFXz6g6SdN4gE4N-gBmpQjv_moprRsfnH5Xd17xde71UxdehGe3-4qRmGFNrilfcHeHdD_fRP-MpWy8PoLDL94djC0B0HIJRZCCLqKaaS0bbTpbUlySiZ1APHlPEWsW-FVAd8nj4GkMYrUvxzjQ3X0rhYPVlULEZAA8Bz24bAcOqxgHcUW1dPUhXBwx1jZ5b0o8j7ExXVhAD2dYMIv_hcejT-h29byvzjbnOcXBlv0J_c7M2MS5yYSZnhnAizVuymMx4W_ltMH_U5nW4sZWPf8TXl5VhTHPar9lThqs2oQ8Lo9PLoqiGvyb5Mia2gD4tfBv9r_PigRWALGfXEKb3rKGGccypZ1ASr0xfssIhvjjJQ8B_udJdq9LE5dj_0LVC9RUUfAI=w1882-h604-no",
  eventDescription: "lorem ipsum lorem upsusadadoaisd asdipaosd asdoais adasdad adasd a ad ada a daasdad",
  eventStartDate: '10-02-2021',
  eventEndDate: '11-02-2021',
  slideshow: true,
  video: true,
}
];

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
        <h1>
          Events conducted at Ramaiah Institute of Technology, Bengaluru
        </h1>
        
          <EventList 
            details={props.details}
          />

      </div>

      <footer className={styles.footer}>
        Copyright. All Rights Reserved.
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      details: EVENT_LIST
    },
    revalidate: 1
  };
}

export default Home;