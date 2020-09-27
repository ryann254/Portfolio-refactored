import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

//Own Components
import "./App.css";
import Api from "./services/network";
import Routes from "./Routes";
import PageLoader from "./page-loader/PageLoader";
import { getAllComments, getErrors } from "./redux/action-creator";
import isEmpty from "./helpers/isEmpty";

function App() {
  const dispatch = useDispatch();
  // Making the api call
  async function getComments() {
    const api = new Api();
    try {
      const res = await api.auth().getCommentsCall();
      if (res.status === 200) {
        const { data } = res.data;
        data.map((element) => {
          element.radio = "comments";
        });

        dispatch(getAllComments(data));
      }
    } catch (error) {
      if (!isEmpty(error)) {
        const dbErrors = error.response.data.error;
        dispatch(getErrors(dbErrors));
      }
    }
  }

  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
