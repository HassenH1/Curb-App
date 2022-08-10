import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Marker} from 'react-native-maps';
import {GUTTER} from '../../../config/app.sizes';

//TODO
// const {width, height} = Dimensions.get('window');
// const CARD_HEIGHT = 220;
// const CARD_WIDTH = width * 0.8;
// const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
interface IMarker {
  latlng: {[key: string]: number};
  title: string;
  description: string;
}
const icon =
  'https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-parking-music-festival-flaticons-flat-flat-icons.png';

const DashboardMapMarkers = (props: any) => {
  const {markers} = props;

  const click = (num: number) => {
    console.log('click here! ' + num);
  };

  return (
    <>
      {markers?.map((marker: IMarker, index: any) => {
        return (
          <Marker
            onPress={() => click(index)}
            key={index}
            coordinate={{
              latitude: marker.latlng.latitude,
              longitude: marker.latlng.longitude,
            }}
            title={marker.title}
            description={marker.description}>
            {/* <View style={[styles.markerWrap]}>
              <Image
                source={{
                  uri: icon,
                }}
                resizeMode="cover"
                style={styles.container}
              />
            </View> */}
          </Marker>
        );
      })}
    </>
  );
};

export default DashboardMapMarkers;

const styles = StyleSheet.create({
  container: {height: GUTTER.X_LARGE, width: GUTTER.X_LARGE},
  markerWrap: {
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
