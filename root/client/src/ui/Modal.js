// Parent - Body, Favorites

import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

import useWindowDimensions from "../hooks/windowDimensions";

function ModalJSX(props) {
  const title = props.art.title;
  const artist = props.art.artist;
  // Close the modal
  function closeModal() {
    props.setIsViewing(false);
  }

  const img = useRef(null);
  const [isPortrait, setIsPortrait] = useState(null);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    let height = img.current.clientHeight;
    let width = img.current.clientWidth;
    if (height > width) {
      setIsPortrait(true);
    } else {
      setIsPortrait(false);
    }
  }, [isPortrait]);

  return (
    <div className={classes.darkBG} onClick={closeModal}>
      <img
        className={`${classes.centered} ${classes.sizetofit}`}
        src={props.url}
        alt={props.title}
        title={props.title}
        ref={img}
      ></img>
      <div className={classes.infobox} style={{ top: height - 87 }}>
        <div className={classes.infotitle}>
          Title: {title} | Artist: {artist}
        </div>
      </div>
    </div>
  );
}

// Not sure if this is the correct place for this, maybe in the parent components
function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalJSX
          url={props.url}
          title={props.title}
          setIsViewing={props.setIsViewing}
          art={props.art}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default Modal;
