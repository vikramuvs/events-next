import { useState, useRef } from "react";
import { storage, firebase } from "../../components/firebase";

function NewEventForm(props) {
  const [slideshowToggler, setslideshowToggler] = useState(0);
  const [videoToggler, setvideoToggler] = useState(0);
  const [imgURL, setImgURL] = useState('');

  const titleRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const imgRef = useRef();
  const descRef = useRef();
  const slideshowRef = useRef();
  const videoRef = useRef();
  const deptRef = useRef();

  const ssChangeHandler = (e) => {
    const slideshowToggler = e.target.value;
    setslideshowToggler(slideshowToggler);
  };

  const videoChangeHandler = (e) => {
    const videoToggler = e.target.value;
    setvideoToggler(videoToggler);
  };

  async function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredStartDate = startDateRef.current.value;
    const enteredEndDate = endDateRef.current.value;
    const enterdImage = imgRef.current.files[0];
    const enteredDesc = descRef.current.value;
    const slideshowURL = slideshowRef.current.value;
    const videoURL = videoRef.current.value;
    const dept = deptRef.current.value;
    //let imgURL;

    // Create a root reference
    var storageRef = storage.ref();

    // Create a reference to 'mountains.jpg'
    var ref = storageRef.child(`images/${enterdImage.name}`);

    var uploadTask = ref.put(enterdImage);

    const waitForURL = await uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          return downloadURL;
        });
      }
    );

    const eventData = {
      eventTitle: enteredTitle,
      eventStartDate: enteredStartDate,
      eventEndDate: enteredEndDate,
      eventImage: waitForURL(),
      eventDesc: enteredDesc,
      slideshowURL: slideshowURL ? slideshowURL : null,
      videoURL: videoURL ? videoURL : null,
      hasSlideshow: slideshowToggler,
      hasVideo: videoToggler,
      eventDept: dept,
    };

    props.onAddEvent(eventData);
  }

  return (
    <form>
      <div className="">
        <label>Event Name</label>
        <input
          type="text"
          placeholder="Enter event title"
          ref={titleRef}
        ></input>
      </div>
      <div className="">
        <label>Event Start Date</label>
        <input
          type="date"
          placeholder="Enter event start date "
          ref={startDateRef}
        ></input>
      </div>
      <div className="">
        <label>Event End Date</label>
        <input
          type="date"
          placeholder="Enter event end date"
          ref={endDateRef}
        ></input>
      </div>
      <div className="">
        <label>Event Image</label>
        {/* <input type="text" placeholder="Enter event image url" ref={imgRef}></input> */}
        <input type="file" placeholder="Upload Image here" ref={imgRef}></input>
      </div>
      <div className="">
        <label>Event Description</label>
        <input
          type="text"
          placeholder="Enter event description"
          ref={descRef}
        ></input>
      </div>
      <div className="">
        <label>Has Slideshow?</label>
        <select onChange={ssChangeHandler}>
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </select>
      </div>
      {slideshowToggler == 1 ? (
        <div className="">
          <label>Slideshow URL</label>
          <input
            type="text"
            placeholder="Enter event itle"
            ref={slideshowRef}
          ></input>
        </div>
      ) : null}
      <div className="">
        <label>Has Video?</label>
        <select onChange={videoChangeHandler}>
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </select>
      </div>
      {videoToggler == 1 ? (
        <div className="">
          <label>Vidoe URL</label>
          <input
            type="text"
            placeholder="Enter event itle"
            ref={videoRef}
          ></input>
        </div>
      ) : null}
      <div className="">
        <label>Conducting Department</label>
        <select ref={deptRef}>
          <option value={"Architecture"}>Architecture</option>
          <option value={"BioTechnology"}>BioTechnology</option>
          <option value={"Chemical"}>Chemical</option>
          <option value={"Civil"}>Civil</option>
          <option value={"Computer Science"}>Computer Science</option>
          <option value={"ECE"}>ECE</option>
          <option value={"EEE"}>EEE</option>
          <option value={"EIE"}>EIE</option>
          <option value={"ETE"}>ETE</option>
          <option value={"ME"}>ME</option>
          <option value={"ML"}>ML</option>
          <option value={"IEM"}>IEM</option>
          <option value={"ISE"}>ISE</option>
          <option value={"MBA"}>MBA</option>
          <option value={"MCA"}>MCA</option>
          <option value={"Maths"}>Maths</option>
          <option value={"Physics"}>Physics</option>
          <option value={"Humanities"}>Humanities</option>
          <option value={"Sports"}>Sports</option>
          <option value={"DECA"}>DECA</option>
        </select>
      </div>
      <div className="">
        <button onClick={submitHandler}>Submit</button>
        <button>Reset</button>
      </div>
    </form>
  );
}

export default NewEventForm;
