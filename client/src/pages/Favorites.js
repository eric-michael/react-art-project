import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import { favoriteActions } from "../store";

import FavoritesContext from "../store/favorites-context";

import Card from "../ui/Card";
import Modal from "../ui/Modal";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  const [isViewing, setIsViewing] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  /* redux */
  const favoritesFromRedux = useSelector((state) => state.favorites.art);
  const dispatch = useDispatch();

  //dispatch(favoriteActions.addFavorite('butt'));
  /* end redux */
  console.log(favoritesFromRedux);

  /* if(favoritesFromRedux){
    return <div>{favoritesFromRedux}</div>
  } */

  if (!favoritesCtx.favorites.length) {
    return <div>You do not have any favorites.</div>;
  }

  return (
    <div>
      <div>Favorites</div>
      {favoritesCtx.favorites.map((art) => {
        return (
          <Card
            key={art._id}
            art={
              art
            } /* pass the whole object for use with context. Maybe find a better way to do this */
            url={art.imageUrl}
            title={art.title}
            setIsViewing={setIsViewing}
            setCurrentSrc={setCurrentSrc}
            setCurrentTitle={setCurrentTitle}
          />
        );
      })}
      {isViewing && (
        <Modal
          setIsViewing={setIsViewing}
          url={currentSrc}
          title={currentTitle}
        />
      )}
    </div>
  );
}

export default Favorites;
