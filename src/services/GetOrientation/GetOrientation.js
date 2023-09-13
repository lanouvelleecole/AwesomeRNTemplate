/* PLOP_INJECT_IMPORT */
//import React from "react";

/**
 *
 *
 * @returns "PORTRAIT" ou "PAYSAGE"
 *
 * Cette fonction permet de savoir comment est orienté l'écran
 */
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

/**
 * Returns true if the screen is in portrait mode
 */
const isPortrait = () => {
  const dim = Dimensions.get("screen");
  return dim.height >= dim.width;
};

/**
 * A React Hook which updates when the orientation changes
 * @returns whether the user is in 'PORTRAIT' or 'LANDSCAPE'
 */
const GetOrientation = () => {
  // State to hold the connection status
  const [orientation, setOrientation] = useState(
    // l'orientation actuelle est stockée comme valeur de départ du state, AKA orientation
    isPortrait() ? "PORTRAIT" : "LANDSCAPE"
  );

  // met en place le listener qui nous dira si l'écran
  // est debout ou couché
  useEffect(() => {
    // le callback qui rafraichira l'UI
    // quand l'orientation changera
    const callback = () =>
      setOrientation(isPortrait() ? "PORTRAIT" : "LANDSCAPE");

    // lance le listener d'orientation.
    // retourne de quoi pouvoir arreter le lister si besoin
    const sub = Dimensions.addEventListener("change", callback);

    return () => {
      // arrete le listener
      sub.remove();
    };
  }, []);

  // retourne l'orientation actuelle
  return orientation;
};

export { GetOrientation };
