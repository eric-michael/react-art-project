// Card.js parent

import classes from "./Actions.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Actions(props) {
  return (
    <div className={classes.actions}>
      <button onClick={props.openArt} className={classes.btn}>
        <FontAwesomeIcon icon={["fas", "search-plus"]} size="3x" />
      </button>
      {props.isFavorite ? (
        <button onClick={props.removeFavorite} className={classes.btn}>
          <FontAwesomeIcon icon={["fas", "star"]} size="3x" />
        </button>
      ) : (
        <button onClick={props.addFavorite} className={classes.btn}>
          <FontAwesomeIcon icon={["far", "star"]} size="3x" />
        </button>
      )}
    </div>
  );
}

export default Actions;
