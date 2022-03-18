import React, { useState } from "react";

import EntryForm from "../components/content/EntryForm";

function NewEntry() {
  const [response, setResponse] = useState('');

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
        setResponse(json.message);
      });
  }
  return (
  <React.Fragment>
    {response ? <p>{response}</p> : <></>}
    <EntryForm onAddArt={addArtHandler} />
  </React.Fragment>
  );
}

export default NewEntry;
