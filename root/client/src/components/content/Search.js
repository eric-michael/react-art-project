import React, { useRef } from "react";

import { OutlinedInput, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Search.module.css";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { artActions } from '../../store';
/* End Redux */

function Search() {
  // add a button. put a ref on the input,
  // create a handler for the button that posts the query

  const searchFromRedux = useSelector((state) => state.art.art);
  const dispatch = useDispatch();

  const searchRef = useRef();

  function searchHandler(e) {
    const query = { query: searchRef.current.value };
    fetch("/searchart", {
      method: "POST",
      body: JSON.stringify(query),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((data) => {
        dispatch(artActions.getArtBySearch(data.art));
      });
    });
  }
  return (
    <div className={classes.search}>
      <OutlinedInput placeholder="Search" inputRef={searchRef} />{" "}
      {/* mui requires inputRef to pass a ref to the input element  */}
      <IconButton onClick={searchHandler}>
        <FontAwesomeIcon icon={["fas", "search"]} />
      </IconButton>
    </div>
  );
}

export default Search;
