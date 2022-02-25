import React, { useState } from "react";

import EntryForm from "../components/content/EntryForm";

function NewEntry() {
  const [artAdded, setArtAdded] = useState(false);

  function addArtHandler(newArtData) {
    console.log("art added", newArtData);
    console.log("stringified", JSON.stringify(newArtData));
    fetch("/addart", {
      method: "POST",
      body: JSON.stringify(newArtData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setArtAdded(true);
      });
  }
  return (
  <React.Fragment>
    {artAdded ? <p>Art added</p> : <></>}
    <EntryForm onAddArt={addArtHandler} />
  </React.Fragment>
  );
}

export default NewEntry;
