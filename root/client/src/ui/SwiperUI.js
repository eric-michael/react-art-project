// Parent - Body.js

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import Card from "./Card";
import SwiperSlideUI from "./SwiperSlideUI";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import React from "react";

function SwiperUI(props) {
  SwiperCore.use([Navigation]);

  // These nested lists do not need to exist this way.
  // Probably move the outer map to the parent component.
  return (
    <React.Fragment>
      {Object.keys(props.art).map((artist) => {
        return (
          <React.Fragment>
            <h1>{artist}</h1>
            <Swiper
              key={artist}
              modules={[Navigation]}
              navigation
              observer // required for nav
              observeParents // required for nav
              spaceBetween={30}
              slidesPerView={5}
            >
              {props.art[artist].map((art) => {
                return (
                  <SwiperSlide key={art._id}>
                    <SwiperSlideUI
                      key={art._id}
                      art={art} // pass the whole object for use with context. Maybe find a better way to do this
                      url={art.imageUrl}
                      title={art.title}
                      setIsViewing={props.setIsViewing}
                      setCurrentSrc={props.setCurrentSrc}
                      setCurrentTitle={props.setCurrentTitle}
                      setCurrentArt={props.setCurrentArt}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
  /* return (
    <Swiper
      modules={[Navigation]}
      navigation
      observer // required for nav
      observeParents // required for nav
      spaceBetween={30}
      slidesPerView={5}
    >
      {props.art.map((art) => {
        return (
          <SwiperSlide key={art._id}>
            <Card
              key={art._id}
              art={art} // pass the whole object for use with context. Maybe find a better way to do this
              url={art.imageUrl}
              title={art.title}
              setIsViewing={props.setIsViewing}
              setCurrentSrc={props.setCurrentSrc}
              setCurrentTitle={props.setCurrentTitle}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  ); */
}

export default SwiperUI;
