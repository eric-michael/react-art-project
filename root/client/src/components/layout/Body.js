// Main.js parent

import Card from "../../ui/Card";
import Modal from "../../ui/Modal";
import SwiperUI from "../../ui/SwiperUI";

import classes from "./Body.module.css";

import { useState, useEffect, Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Body(props) {
  const [isViewing, setIsViewing] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentArt, setCurrentArt] = useState(null);

  if (props.data_art) {
    return (
      <Fragment>
        <br />
        <SwiperUI
          art={props.data_art}
          setIsViewing={setIsViewing}
          setCurrentSrc={setCurrentSrc}
          setCurrentTitle={setCurrentTitle}
          setCurrentArt={setCurrentArt}
        />
        {isViewing && (
          <Modal
            setIsViewing={setIsViewing}
            url={currentSrc}
            title={currentTitle}
            art={currentArt}
          />
        )}
      </Fragment>
    );
  } else {
    return <div>There was an issue with retrieving the art!</div>;
  }
}

export default Body;
