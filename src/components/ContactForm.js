import React, { useEffect, useState, Fragment } from "react";

import "./ContactForm.scss";

function ContactForm() {
  const [form_box, setFormBox] = useState("");
  const [next_btn, setNextBtn] = useState("");
  const [prev_btn, setPrevBtn] = useState("");
  const [input_group, setInputGroup] = useState("");
  const [input_field, setInputField] = useState("");
  const [input_label, setInputLabel] = useState("");
  const [input_progress, setInputProgress] = useState("");
  const [progress_bar, setProgressBar] = useState("");

  //Transition Times
  const shakeWaitTime = 100;
  const switchTime = 200;
  //Initialize Position At First Question
  let position = 0;

  useEffect(() => {
    const formBox = document.querySelector("#form-box");
    const nextBtn = document.querySelector("#next-btn");
    const prevBtn = document.querySelector("#prev-btn");
    const inputGroup = document.querySelector("#input-group");
    const inputField = document.querySelector("#input-field");
    const inputLabel = document.querySelector("#input-label");
    const inputProgress = document.querySelector("#input-progress");
    const progressBar = document.querySelector("#progress-bar");

    setFormBox(formBox);
    setNextBtn(nextBtn);
    setPrevBtn(prevBtn);
    setInputGroup(inputGroup);
    setInputField(inputField);
    setInputLabel(inputLabel);
    setInputProgress(inputProgress);
    setProgressBar(progressBar);
  }, []);

  const questions = [
    { question: "Enter First Name" },
    { question: "Enter Last Name" },
    { question: "Enter Email", pattern: /\S+@\S+\.\S+/ },
    { question: "Your Message" },
  ];

  function getQuestion() {
    if (
      typeof input_field !== "string" &&
      typeof input_label !== "string" &&
      typeof progress_bar !== "string" &&
      typeof prev_btn !== "string"
    ) {
      input_label.innerHTML = questions[position].question;
      input_field.type = questions[position].type || "text";
      input_field.value = questions[position].answer || "";
      input_field.focus();

      progress_bar.style.width = (position * 100) / questions.length + "%";

      //Add User Icon or Back Arrow
      prev_btn.className = position ? "fas fa-arrow-left" : "fas fa-user";

      showQuestion();
    }
  }

  function showQuestion() {
    if (typeof input_group !== "string" && typeof input_progress !== "string") {
      input_group.style.opacity = 1;
      input_progress.style.width = "100%";
      input_progress.style.transition = "";
    }
  }

  function hideQuestion() {
    if (typeof input_group !== "string" && typeof input_label !== "string") {
      input_group.style.opacity = 0;
      input_label.style.marginLeft = 0;
      input_progress.style.width = 0;
      input_progress.style.transition = "none";
      input_group.style.border = null;
    }
  }

  function transform(x, y) {
    if (typeof form_box !== "string") {
      form_box.style.transform = `translate(${x}px, ${y}px)`;
    }
  }

  function validate() {
    if (typeof input_field !== "string") {
      if (!input_field.value.match(questions[position].pattern || /.+/)) {
        inputFail();
      } else {
        inputPass();
      }
    }
  }

  function inputFail() {
    if (
      typeof input_progress !== "string" &&
      typeof input_field !== "string" &&
      typeof next_btn !== "string"
    ) {
      input_progress.style.borderColor = "#ff2d26";
      next_btn.style.color = "#ff2d26";
      for (let i = 0; i < 6; i++) {
        setTimeout(transform, shakeWaitTime * i, ((i % 2) * 2 - 1) * 20, 0);
        setTimeout(transform, shakeWaitTime * 6, 0, 0);
        input_field.focus();
      }
    }
  }

  function inputPass() {
    if (
      typeof input_progress !== "string" &&
      typeof next_btn !== "string" &&
      typeof input_field !== "string" &&
      typeof progress_bar !== "string"
    ) {
      input_progress.style.borderColor = "#2c3e50";
      next_btn.style.color = "#2c3e50";
      setTimeout(transform, shakeWaitTime * 0, 0, 10);
      setTimeout(transform, shakeWaitTime * 1, 0, 0);

      //store answers
      questions[position].answer = input_field.value;
      position++;

      if (questions[position]) {
        hideQuestion();
        getQuestion();
      } else {
        hideQuestion();
        form_box.className = "close";
        progress_bar.style.width = "100%";

        formComplete();
      }
    }
  }

  function formComplete() {
    console.log(questions);
    const h1 = document.createElement("h1");
    h1.classList.add("end");
    h1.appendChild(
      document.createTextNode(
        `Thanks ${questions[0].answer}.
              You message has been sent successfully.
              We will respond to you through your email`
      )
    );

    setTimeout(() => {
      form_box.parentElement.appendChild(h1);
      setTimeout(() => (h1.style.opacity = 1), 50);
    }, 1000);
  }

  function handleClick() {
    validate();
  }

  return (
    <Fragment>
      {
        //Get the question
        getQuestion()
      }
      <div id="container">
        <div id="form-box">
          <i id="prev-btn" className="fas fa-arrow-left"></i>
          <i
            id="next-btn"
            className="fas fa-arrow-right"
            onClick={handleClick}
          ></i>

          <div id="input-group">
            <input id="input-field" required />
            <label id="input-label"></label>
            <div id="input-progress"></div>
          </div>
          <div id="progress-bar"></div>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactForm;
