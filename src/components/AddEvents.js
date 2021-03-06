import React, { useState, useEffect, Fragment } from "react";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import Zoom  from "react-reveal/Zoom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { useOktaAuth } from "@okta/okta-react";

import Api from "../services/network";
import { changeEditStatus, addData, getErrors } from "../redux/action-creator";
import "./AddEvents.scss";
import Header from "./Header";
import isEmpty from "../helpers/isEmpty";

function AddEvents({ history, ...props }) {
  const { eventORWorkStatus } = useSelector((state) => state.about);
  const errorsDB = useSelector((state) => state.about.errorsDB);
  const { authState } = useOktaAuth();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [radio, setRadio] = useState("");
  const [leftState, setLeftState] = useState("");
  const [contentState, setContentState] = useState("");
  const [protosState, setProtosState] = useState("");
  const [modalTitle, setModalTitle] = useState(true);
  const [modalContent, setModalContent] = useState(true);
  const [name, setUserName] = useState("");
  const [toast, showToast] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      id: Math.random().toString(36).slice(2, 15),
      radio,
      title,
      subtitle,
      content,
    };
    if (data.radio === "comments") {
      // Making an api call
      async function postComment() {
        const api = new Api();
        try {
          delete data.radio;
          const res = await api.auth().postCommentCall(data);
          dispatch(addData(res.data.data));
        } catch (error) {
          const dbErrors = error.response.data.error;
          dispatch(getErrors(dbErrors));
        }
      }
      postComment();
    } else {
      dispatch(addData(data));
    }
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

  const handleErrorTitle = () => {
    setModalTitle((modalTitle) => !modalTitle);
  };

  const handleErrorContent = () => {
    setModalContent((modalContent) => !modalContent);
  };

  function getLoggedInUser() {
    const details = JSON.parse(localStorage.getItem("okta-token-storage"));
    if (!isEmpty(details)) {
      setUserName(details.idToken.claims.name);
    }
  }

  const handleToast = () => {
    showToast((toast) => !toast);
  };

  // On component mount the following should be fetched and set to state
  useEffect(() => {
    let left = document.querySelector(".left");
    let contentLeft = document.querySelector(".content-add-events");
    let protos = document.querySelectorAll(".proto");
    setLeftState(left);
    setContentState(contentLeft);
    setProtosState(protos);

    getLoggedInUser();

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
    <Fragment>
      <Header />
      <Container fluid className="limit-footer">
        {errorsDB.length > 0 ? (
          <div>
            <Toast
              show={modalTitle}
              onClose={handleErrorTitle}
              className="toast toast-error"
            >
              <Toast.Header>
                <strong className="mr-auto">Errors</strong>
                <small>Read them carefully</small>
              </Toast.Header>
              <Toast.Body>{errorsDB[0]}</Toast.Body>
            </Toast>
            <Toast
              show={modalContent}
              onClose={handleErrorContent}
              className="toast toast-error toast-2"
            >
              <Toast.Header>
                <strong className="mr-auto">Errors</strong>
                <small>Read them carefully</small>
              </Toast.Header>
              <Toast.Body>{errorsDB[1]}</Toast.Body>
            </Toast>
          </div>
        ) : null}
        {authState.isAuthenticated ? (
          <Toast show={toast} onClose={handleToast} className="toast welcome">
            <Toast.Header>
              <strong className="mr-auto">Greetings!</strong>
              <small>Welcome to my Portfolio</small>
            </Toast.Header>
            <Toast.Body>Mr./Ms. {name}</Toast.Body>
          </Toast>
        ) : null}
        <Row>
          <div className="body">
            <Zoom bottom>
              <div className="proto-container larger-screens">
                <div className="proto"></div>
                <div className="proto"></div>
                <div className="proto"></div>
                <div className="proto"></div>
              </div>

              <div className="container-events">
                <div className="inner d-flex-column d-md-flex">
                  <Col md={6} lg={7}>
                    <div className="left" onMouseMove={addAnimation}>
                      <div className="content-add-events">
                        <h1>
                          Add <span>Education or Events Recently Occurred</span>
                        </h1>

                        <p>
                          Here's where I can add all the new education,
                          experience and events that I've attended recently.
                          Once added their appear on the about page.
                        </p>
                        <p className="light">
                          Feel free to leave a nice comment at the bottom
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={5}>
                    <div className="right mb-3">
                      <p className="text-center">Fill the following form!</p>
                      <Form onSubmit={handleSubmit} className="pl-3 pr-3">
                        <Form.Group>
                          <Form.Label>
                            Are you adding to the work section or the events
                            section:
                          </Form.Label>
                          <Form.Check
                            type="radio"
                            id="work-radio"
                            name="workorevents"
                            label="Work Section"
                            value="work"
                            onChange={(e) => setRadio(e.target.value)}
                          />
                          <Form.Check
                            type="radio"
                            id="events"
                            name="workorevents"
                            label="Events Section"
                            work="events"
                            onChange={(e) => setRadio(e.target.value)}
                          />
                          <Form.Check
                            type="radio"
                            id="comments"
                            name="workorevents"
                            label="Comments Section"
                            value="comments"
                            onChange={(e) => setRadio(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Title</Form.Label>
                          <Form.Control
                            type="text"
                            required={true}
                            name="title"
                            autoComplete="off"
                            placeholder="Enter the title.."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Subtitle</Form.Label>
                          <Form.Control
                            type="text"
                            name="subtitle"
                            autoComplete="off"
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                            placeholder="Enter the subtitle..."
                          />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Content</Form.Label>
                          <Form.Control
                            as="textarea"
                            required={true}
                            rows="4"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Enter some descriptive content..."
                          />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                          <Button
                            variant="primary"
                            className="submit"
                            type="submit"
                          >
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Col>
                </div>
              </div>
            </Zoom>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
}

export default AddEvents;
