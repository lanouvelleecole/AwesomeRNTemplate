/* PLOP_INJECT_IMPORT */
import { React, useEffect } from "react";
import { View } from "react-native";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *

{
  // 
}
<Camouflage
  chosenOne={chosenOne}
  name={"ben"}
  refreshed={true}>
    
</Camouflage>

 * 
 * un objet props {} contenant:
 *
 * @param {*}
 *
 * @returns un wrapper pour afficher plusieurs component l'un sur l'autre.
 */
const Camouflage = (props) => {
  /* PLOP_INJECT_CODE */

  // on montre, ou pas le component ?
  const isVisible = props.chosenOne == props.name;

  // on jette le contenu du camo a la poubelle
  // si l'user veut recréer un truc frais lorsqu'il devra réapparaitre.
  // (si refreshed == true, et que l'item est actuellement censé etre invisible)
  const isRefreshed = props.refreshed == true && !isVisible;

  /**
   * Ceci nous permet de pouvoir faire
   * des choses avant/après que le component soit contruit/détruit
   */
  onComponentLifeAndDeath();

  return (
    <View
      style={[
        {
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: isVisible ? 1 : null,
          flex: 1,
          width: "100%",
          height: "100%",
        },
      ]}
    >
      {isRefreshed ? null : props.children}
    </View>
  );
};

/**
 * @returns rien
 *
 * Ceci nous permet de pouvoir faire
 * des choses avant/après que le component soit contruit/détruit
 */
const onComponentLifeAndDeath = () => {
  useEffect(() => {
    // Anything in here is fired on component mount.

    return () => {
      // Anything in here is fired on component unmount.
    };
  }, []);
};

export { Camouflage };
