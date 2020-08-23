import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { Zoom } from "react-reveal";

import { addWork, changeEditStatus, addData } from "../redux/action-creator";
import "./AddEvents.scss";

function AddEvents({ history, ...props }) {
  const { eventORWorkStatus } = useSelector((state) => state.about);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [radio, setRadio] = useState("");
  const [leftState, setLeftState] = useState("");
  const [contentState, setContentState] = useState("");
  const [protosState, setProtosState] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      radio,
      title,
      subtitle,
      content,
    };
    dispatch(addData(data));
  }

  function addAnimation(event) {
    if (leftState !== "") {
      let move = event.clientX * 0.05 + 4;
      let move2 = event.clientX * 0.003;

      contentState.style.transform = `translateX(-${move2}%)`;
      protosState.forEach((item) => {
        item.style.transform = `translateX(${move}%)`;
      });
    }
  }

  // On component mount the following should be fetched and set to state
  useEffect(() => {
    let left = document.querySelector(".left");
    let contentLeft = document.querySelector(".content");
    let protos = document.querySelectorAll(".proto");
    setLeftState(left);
    setContentState(contentLeft);
    setProtosState(protos);

    if (eventORWorkStatus === true) {
      Swal.fire({
        title: "Congratulations!",
        text: "Work/Event Added Successfully",
        icon: "success",
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        onClose: () => {
          history.push("/about");
          dispatch(changeEditStatus());
        },
        showClass: {
          popup: "animated fadeInDown faster",
        },
        hideClass: {
          popup: "animated fadeOutUp faster",
        },
      });
    }
  }, [eventORWorkStatus]);

  return (
    <>
      <div className="body">
        <Zoom bottom>
          <div className="proto-container">
            <div className="proto"></div>
            <div className="proto"></div>
            <div className="proto"></div>
            <div className="proto"></div>
          </div>

          <div className="container-events">
            <div className="inner">
              <div className="left" onMouseMove={addAnimation}>
                <div className="content-add-events">
                  <h1>
                    Add <span>Education or Events Recently Occurred</span>
                  </h1>

                  <p>
                    Here's where I can add all the new education, experience and
                    events that I've attended recently. Once added their appear
                    on the about page.
                  </p>
                  <p className="light">
                    Feel free to leave a nice comment at the bottom
                  </p>
                </div>
              </div>
              <div className="right">
                <p>Fill the following form!</p>
                <form onSubmit={handleSubmit}>
                  <div className="input-radio">
                    <label className="label work-events">
                      Are you adding to the work section or the events section:
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="work"
                      name="workorevents"
                      value="work"
                      onClick={(e) => setRadio(e.target.value)}
                    />
                    <label className="radio-label">Work Section</label>
                    <br />
                    <input
                      type="radio"
                      name="workorevents"
                      value="events"
                      onClick={(e) => setRadio(e.target.value)}
                    />
                    <label className="radio-label">Events Section</label>
                  </div>
                  <label className="label">Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="enter the title..."
                  />
                  <label className="label">Subtitle:</label>
                  <input
                    type="text"
                    name="subtitle"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="enter the subtitle..."
                  />
                  <label className="label">Content:</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={7}
                    placeholder="enter some descriptive content..."
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </>
  );
}

AddEvents.propTypes = {
  history: PropTypes.any,
};

export default AddEvents;
