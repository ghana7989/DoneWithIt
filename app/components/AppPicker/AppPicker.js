import React, { Fragment, useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { AppText } from '../AppText';
import colors from '../../config/colors';
import AppSafeAreaView from '../AppSafeArea';
import { AppButton } from '../AppButton';
import { PickerItem } from '../PickerItem';

const AppPicker = ({ items, icon, placeholder, selectedItem, onSelectItem, width, PickerItemComponent = PickerItem, numberOfColumns = 1 }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={[styles.container, { width: width }]}>
          {
            icon && <MaterialCommunityIcons name={icon} size={25} color={colors.grey} style={styles.icon} />
          }
          {
            selectedItem ? <AppText>{selectedItem.label}</AppText>
              : <AppText style={styles.placeholder}>{placeholder}</AppText>
          }
          <MaterialCommunityIcons name="chevron-down" size={25} color={colors.grey} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={showModal} animationType="slide">
        <AppSafeAreaView>
          <AppButton title="Close" onPress={() => setShowModal(false)} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) =>
              <PickerItemComponent
                // Adding item as a prop to make it flexible
                item={item}
                label={item.label}
                onPress={() => {
                  setShowModal(false)
                  onSelectItem(item)
                }}
              />
            }
          />
        </AppSafeAreaView>
      </Modal>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.lightGrey,
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    alignItems: "center"
  },
  text: {
    flex: 1
  },
  icon: {
    margin: 10
  },
  placeholder: {
    color: colors.grey,
    flex: 1
  }
})

export default AppPicker;