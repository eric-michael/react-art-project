import React, { useRef } from "react";

import { OutlinedInput, IconButton, InputAdornment } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Search.module.css";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { artActions } from "../../store";
/* End Redux */

function Search() {
  // add a button. put a ref on the input,
  // create a handler for the button that posts the query

  const searchFromRedux = useSelector((state) => state.art.art);
  const dispatch = useDispatch();

  const searchRef = useRef();

  function searchHandler(e) {
    if(e.keyCode != 13){
      return;
    }
    const query = { query: searchRef.current.value };
    fetch("/api/searchart", {
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
      <OutlinedInput
        placeholder="Search"
        inputRef={searchRef}
        onKeyDown={searchHandler}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={searchHandler}>
              <FontAwesomeIcon icon={["fas", "search"]} />
            </IconButton>
          </InputAdornment>
        }
      />
      {/* mui requires inputRef to pass a ref to the input element  */}
    </div>
  );
}

export default Search;
