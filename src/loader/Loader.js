import React, { useEffect } from "react";
import $ from "jquery";

import "../App.css";

function Loader({ children }) {
  useEffect(() => {
    $(window).on("load", function () {
      $(".loader-wrapper").fadeOut("slow");
    });
  }, []);
  return (
    <div className="loader-wrapper">
      <span className="loader">
        <span className="loader-inner"></span>
      </span>
    </div>
  );
}

export default Loader;
