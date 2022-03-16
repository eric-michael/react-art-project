/* Store in the style of redux toolkit */

import { createSlice, configureStore } from "@reduxjs/toolkit";

export const ALLART = "allArt";

// Pass an array of art objects and create a new 2-D array of art objects
// [artist's name][art object]
function sort_by_artist(art) {
  let sort_by_artist = [];

  for (const i in art) {
    if (!sort_by_artist[art[i].artist]) {
      sort_by_artist[art[i].artist] = [];
    }
    sort_by_artist[art[i].artist].push(art[i]);
  }
  return sort_by_artist;
}

/**
 * Reducer for showing art on the main page
 */
const artInitialState = {
  art: [],
  favorites: [],
};
const artSlice = createSlice({
  name: "art",
  initialState: artInitialState,
  reducers: {
    // Get all art is sorted by artist as a default.
    // Maybe this should be done on the server. Also this runs every time the page loads?
    getAllArt(state, action) {
      console.log('get all', action.payload)
      const sorted_by_artist = sort_by_artist(action.payload);
      state.art = sorted_by_artist;
    },
    getArtBySearch(state, action) {
      console.log('search', action.payload);
      const art_by_search = sort_by_artist(action.payload);
      state.art = art_by_search;
      console.log(state.art);
    },
  },
});
/**
 * End art reducer
 */

/**
 * Reducer for showing favorites and handling favorites logic
 */
const favoriteInitialState = {
  art: [],
};
const favoriteSlice = createSlice({
  name: "favorites",
  initialState: favoriteInitialState,
  reducers: {
    addFavorite(state, action) {
      state.art.push(action.payload);
    },
    removeFavorite(state, action) {},
    itemIsFavorite(state, action) {},
  },
});
/**
 * End favorite reducer
 */

//const artStore = createStore(artReducer); old redux
//const store = configureStore({ reducer: artSlice.reducer });

const store = configureStore({
  reducer: { art: artSlice.reducer, favorites: favoriteSlice.reducer },
});

export const artActions = artSlice.actions;
export const favoriteActions = favoriteSlice.actions;

export default store;

/*
 function artReducer(state = artInitialState, action) {
  // This is the action type for showing all art (on page load)
  if (action.type === "allArt") {
    const sorted_by_artist = sort_by_artist(action.payload);
    return {
      art: sorted_by_artist,
      favorites: state.favorites,
    };
  }

  /* if(action.type === "addFavorite") {
    const newFav = [...state.favorites];
    newFave.push(action.payload);
    return {
      art: state.art,
      favorites
    }
  }

  return state;
}
 */
