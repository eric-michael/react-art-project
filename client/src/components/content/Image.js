// Card.js parent

import { useState } from "react";

import classes from "./Image.module.css";

function Image(props) {
  //const [isHovering, setIsHovering] = useState(props.isHovering);
  //let isHovering = props.isHovering;

  return (
    <img
      className={classes.art}
      src={props.url}
      alt={props.title}
      title={props.title}
    ></img>);
    {/* <div
      className={classes.art}
      style={{ backgroundImage: "url(" + props.url + ")" }}
    ></div> */}
  {
    /* <img
      className={classes.art}
      src={props.url}
      alt={props.title}
      title={props.title}
      width={props.width}
      height={props.height}
    ></img> */
  }
}

export default Image;
