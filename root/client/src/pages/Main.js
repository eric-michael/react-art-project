// App.js parent

/**
 * For now, we will just post all art data here. Eventually, we want to create
 * a new component called 'carosel' that we will put in here and that will be
 * the first level component.
 * App -> Main -> Body -> Carosel -> Card
 */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { artActions } from "../store";

import BodySkeleton from "../components/layout/BodySkeleton";
import Body from "../components/layout/Body";
import Search from "../components/content/Search";

import Button from "@mui/material/Button";
import { OutlinedInput } from "@mui/material";

function Main(props) {
  const [isLoading, setIsLoading] = useState(true);

  const artFromRedux = useSelector((state) => state.art.art); // this automatically sets up a subscription
  const dispatch = useDispatch();

  useEffect(
    () => {
      fetch("/art").then((res) => {
        res.json().then((data) => {
          setIsLoading(false);
          //dispatch({type: 'allArt', payload: data.art});
          dispatch(artActions.getAllArt(data.art));
        });
      });
    },
    [
      /* removing this causes an infinite loop. an empty array causes to run only one time on load */
    ]
  );

  if (isLoading) {
    return (
      <section>
        <Search />
        <BodySkeleton />
        <BodySkeleton />
        <BodySkeleton />
      </section>
    );
  }

  return (
    <section>
      <Search />
      {/* <Body data_art={dataArt} /> */}
      <Body data_art={artFromRedux} />
    </section>
  );
}

export default Main;
