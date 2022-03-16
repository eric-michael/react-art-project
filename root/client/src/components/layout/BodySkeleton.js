// Parent - Main.js

import React from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import classes from "../../ui/SwiperSlideUI.module.css";

function BodySkeleton() {
  return (
    <div>
        <br />
        <Skeleton width="15%" animation="wave" variant="h1"/>
        <br />
        <Skeleton
          height={250}
          width="19%"
          sx={{ display: "inline-block", mr: 3 }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          height={250}
          width="19%"
          sx={{ display: "inline-block", mr: 3 }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          height={250}
          width="19%"
          sx={{ display: "inline-block", mr: 3 }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          height={250}
          width="19%"
          sx={{ display: "inline-block", mr: 2 }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          height={250}
          width="19%"
          sx={{ display: "inline-block"}}
          animation="wave"
          variant="rectangular"
        />
    </div>
  );
}

export default BodySkeleton;
