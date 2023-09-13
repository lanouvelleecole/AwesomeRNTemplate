
/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

// Import the necessary modules
import React from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function VerticalList({
  items,
  onItemClicked,
  onItemLongPressed,
  listBackgroundColor,
  itemBackgroundColor,
  itemBorderColor,
  itemTextColor,
  itemTextFont,
  itemTextSize,
  headerMsg,
  headerMsgSize,
  chosenOnes,
}) {
  /**
   * The renderItem function describes how each item in the list should be rendered.
   * It's a parameterized function where each item in our 'items' array along with its index is passed.
   * This function returns a touchable opacity component (which is like a button), that triggers a function when short pressed or long pressed.
  */
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.item, {
        backgroundColor: itemBackgroundColor,
        borderColor: itemBorderColor,
      }]}
      onPress={() => onItemClicked(item)}
      onLongPress={() => onItemLongPressed(item)}
    >
      {/* If the current item is also present in the 'chosenOnes' array, display a checkmark to its left. */}
      {chosenOnes?.includes(item) && <Icon name="check" size={18} color="green" />}
      {/* Display the text content of the current item */}
      <Text style={{ color: itemTextColor, fontFamily: itemTextFont, fontSize: itemTextSize }}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  // The final rendering of the list in our component.
  return (
    <View style={[styles.container, { backgroundColor: listBackgroundColor }]}>
      {/* Header Text */}
      <Text style={{ padding: 10, fontSize: headerMsgSize, color: itemTextColor, fontFamily: itemTextFont }}>
        {headerMsg}
      </Text>
      {/* Here we use the FlatList component to create our list. */}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

// Here we define the styles for our component.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    margin: 3,
    padding: 10,
    borderWidth: 1,
  },
});

