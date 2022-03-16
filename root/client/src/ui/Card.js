// Body.js parent
// Favorites.js parent

import { useState, useContext } from "react";
import classes from "./Card.module.css";

import Image from "../components/content/Image";
import Actions from "../components/content/Actions";

import FavoritesContext from "../store/favorites-context";

function Card(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const [isHovering, setIsHovering] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    favoritesCtx.itemIsFavorite(props.art._id)
  );

  function mouseEnterHandler() {
    setIsHovering(true);
  }

  function mouseLeaveHandler() {
    setIsHovering(false);
  }

  // Open the modal to view the art.
  function setIsViewing() {
    props.setIsViewing(true);
    props.setCurrentSrc(props.url);
    props.setCurrentTitle(props.title);
  }

  function addFavoriteStatusHandler() {
    favoritesCtx.addFavorite(props.art);
    setIsFavorite(true);
  }

  function removeFavoriteStatusHandler() {
    favoritesCtx.removeFavorite(props.art._id);
    setIsFavorite(false);
  }

  return (
    <div
      className={classes.card}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Image
        url={props.url}
        title={props.title}
        width={props.width}
        height={props.height}
        isHovering={isHovering}
      />
      {isHovering && (
        <Actions
          openArt={setIsViewing}
          addFavorite={addFavoriteStatusHandler}
          removeFavorite={removeFavoriteStatusHandler}
          isFavorite={isFavorite}
        />
      )}
    </div>
  );
}

export default Card;
