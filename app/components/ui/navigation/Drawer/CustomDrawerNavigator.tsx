import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GUTTER} from '../../../../config/app.sizes';

const CustomDrawerNavigator = (props: DrawerContentComponentProps) => {
  return (
    <SafeAreaView style={styles.areaView}>
      <DrawerContentScrollView {...props}>
        <View style={{flex: 1}}>
          <CustomHeader />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const CustomHeader = () => {
  return (
    <View style={styles.customHeader}>
      <Ionicons name="person-circle-outline" size={70} color="white" />
      <Text style={styles.customHeaderName}>Hi Hassen Hassen!</Text>
    </View>
  );
};

export default CustomDrawerNavigator;

const styles = StyleSheet.create({
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: GUTTER.SMALL,
  },
  customHeaderName: {color: 'white', marginLeft: GUTTER.X_SMALL},
  areaView: {flex: 1, backgroundColor: 'black'},
});
