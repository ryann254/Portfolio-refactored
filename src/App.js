import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./App.css";

//Own Components
import Routes from "./Routes";
import Loader from "./loader/Loader";
import { getAllComments, getErrors } from "./redux/action-creator";

function App() {
  const dispatch = useDispatch();
  // Making the api call
  async function getComments() {
    try {
      const res = await axios.get(`/api/v1/comments`);
      const { data } = res.data;
      data.map((element) => {
        element.radio = "comments";
      });

      dispatch(getAllComments(data));
    } catch (error) {
      const dbErrors = error.response.data.error;
      dispatch(getErrors(dbErrors));
    }
  }

  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      {/* <Loader />*/}
      <Routes />
    </div>
  );
}

export default App;
