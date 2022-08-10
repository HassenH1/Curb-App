import React, {useRef, useState} from 'react';
import {StyleSheet, View, Animated, Dimensions} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Text from '../../components/base/input/BaseText/BaseText';
import BasePage from '../../components/base/partials/BasePage';
import DashboardMap from '../../components/modules/dashboard/DashboardMap';
import DashboardSearchInput from '../../components/modules/dashboard/DashboardSearchInput';

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const Dashboard = () => {
  const _map = useRef(null);
  const _scrollView = useRef(null);
  const [state, setState] = useState([
    {
      latlng: {
        latitude: 37.78825 - 0.0021,
        longitude: -122.4324 - 0.0021,
      },
      title: 'testing',
      description: 'testing here ',
    },
    {
      latlng: {
        latitude: 37.78825 - 0.0021,
        longitude: -122.4324 - 0.0021,
      },
      title: 'testing',
      description: 'testing here ',
    },
    {
      latlng: {
        latitude: 37.78825 - 0.0021,
        longitude: -122.4324 - 0.0021,
      },
      title: 'testing',
      description: 'testing here ',
    },
  ]);
  return (
    <BasePage>
      <DashboardMap />
      <DashboardSearchInput />
    </BasePage>
    // <MapView
    //   ref={_map}
    //   provider={PROVIDER_GOOGLE}
    //   // customMapStyle={mapStyle}
    //   style={styles.map}
    //   region={{
    //     latitude: 37.78825,
    //     longitude: -122.4324,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421,
    //   }}
    //   showsUserLocation
    //   showsMyLocationButton
    //   followsUserLocation
    //   showsCompass
    //   scrollEnabled
    //   zoomEnabled
    //   pitchEnabled
    //   rotateEnabled>
    //   {state.map((marker, index) => (
    //     <Marker key={index} coordinate={marker.latlng}>
    //       <Animated.View style={[styles.markerWrapper]}>
    //         <Animated.Image
    //           source={{
    //             uri: 'https://www.ocregister.com/wp-content/uploads/2019/10/OCR-L-HondaFood-1003-01-LO-1.jpg',
    //           }}
    //           style={styles.marker}
    //           resizeMode="cover"
    //         />
    //       </Animated.View>
    //     </Marker>
    //   ))}
    // </MapView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
  map: {
    flex: 1,
  },
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  searchBox: {
    height: 54,
    // margin: 0,
    borderRadius: 0,
    // paddingTop: 0,
    // paddingBottom: 0,
    // paddingLeft: 20,
    // paddingRight: 20,
    width: '90%',
    // marginTop: 0,
    marginLeft: 20, //TODO NEED better solution here
    // marginRight: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    fontSize: 18,

    // position: 'absolute',
    // marginTop: Platform.OS === 'ios' ? 40 : 20,
    // flexDirection: 'row',
    // backgroundColor: '#fff',
    // width: '90%',
    // alignSelf: 'center',
    // borderRadius: 5,
    // padding: 10,
    // shadowColor: '#ccc',
    // shadowOffset: {width: 0, height: 3},
    // shadowOpacity: 0.5,
    // shadowRadius: 5,
    // elevation: 10,
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    elevation: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {width: 2, height: -2},
    height: CARD_HEIGHT,
    // height: 100,
    width: CARD_WIDTH,
    // width: 100,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  markerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
});
