// Context for storing and managing art displayed on the page.
// Purpose is to have a singular hub for sorting, searching, etc.
// This could even minimize server calls if we store all art in the context and search here.

import { createContext } from "react";

const DisplayArtContext = createContext({
    art: []
});

export function DisplayArtContextProvider(props) {


}