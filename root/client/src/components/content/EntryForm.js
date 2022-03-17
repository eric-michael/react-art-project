// Parent - NewEntry

import { useRef } from "react";

import classes from "./EntryForm.module.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function EntryForm(props) {
  // These are for capturing input values. Assign them to the 'ref' prop on an input el.
  const urlRef = useRef();
  const titleRef = useRef();
  const artistRef = useRef();
  const descriptionRef = useRef();
  const movementRef = useRef();
  const cityRef = useRef();
  const yearRef = useRef();
  const mediumRef = useRef();
  const secretRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const data = {
      url: urlRef.current.value,
      title: titleRef.current.value,
      artist: artistRef.current.value,
      description: descriptionRef.current.value,
      movement: movementRef.current.value,
      city: cityRef.current.value,
      year: yearRef.current.value,
      medium: mediumRef.current.value,
      secret: secretRef.current.value,
    };

    props.onAddArt(data);
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "inline-block",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="secretKey"
        label="Secret key for POSTing"
        inputRef={secretRef}
      />
      <TextField
        required
        id="imageURL"
        label="Wikipedia Image URL"
        inputRef={urlRef}
      />
      <TextField required id="title" label="Title" inputRef={titleRef} />
      <div>
        <TextField required id="artist" label="Artist" inputRef={artistRef} />
        <TextField
          id="Description"
          label="Description"
          multiline
          rows={6}
          inputRef={descriptionRef}
        />
      </div>
      <div>
        <TextField
          id="artMovement"
          label="Art Movement"
          inputRef={movementRef}
        />
        <TextField
          id="cityOfOrigin"
          label="City of Origin"
          inputRef={cityRef}
        />
      </div>
      <div>
        <TextField
          id="yearCompleted"
          label="Year Completed"
          inputRef={yearRef}
        />
        <TextField id="medium" label="Medium" inputRef={mediumRef} />
      </div>
      <Button sx={{ float: "right" }} onClick={submitHandler}>
        Add Art
      </Button>
    </Box>
  );

  return (
    <form className={classes.entry_form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="imageUrl">Image URL</label>
        <br />
        <input type="url" id="imageUrl" ref={urlRef} />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div>
        <label htmlFor="artist">Artist</label>
        <br />
        <input type="text" id="artist" ref={artistRef} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <br />
        <textarea rows="10" cols="20" id="description" ref={descriptionRef} />
      </div>
      <div>
        <label htmlFor="movement">Movement</label>
        <br />
        <input type="text" id="movement" ref={movementRef} />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <br />
        <input type="text" id="city" ref={cityRef} />
      </div>
      <div>
        <label htmlFor="year">Year of Completion</label>
        <br />
        <input type="text" id="year" ref={yearRef} />
      </div>
      <div>
        <label htmlFor="medium">Medium</label>
        <br />
        <input type="text" id="medium" ref={mediumRef} />
      </div>
      <div>
        <button>Add Art</button>
      </div>
    </form>
  );
}

export default EntryForm;
