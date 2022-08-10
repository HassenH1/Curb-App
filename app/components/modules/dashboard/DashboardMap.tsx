import {
  Alert,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Region} from 'react-native-maps';
import DashboardMapMarkers from './DashboardMapMarkers';
import Geolocation, {
  GeolocationConfiguration,
} from '@react-native-community/geolocation';

const config: GeolocationConfiguration = {
  skipPermissionRequests: true,
  authorizationLevel: 'whenInUse',
};
Geolocation.setRNConfiguration(config);

const latitudeDelta = 0.0502;
const longitudeDelta = 0.0201;

const DashboardMap = () => {
  let watchID: number | null = null;
  const [position, setPosition] = useState<Region>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: latitudeDelta,
    longitudeDelta: longitudeDelta,
  });
  //TODO: remove later
  const [test, setTest] = useState([
    {
      latlng: {
        latitude: 35.6762,
        longitude: 139.6503,
      },
      title: 'testing',
      description: 'testing here ',
    },
    {
      latlng: {
        latitude: 35.6762,
        longitude: 139.6503,
      },
      title: 'testing',
      description: 'testing here ',
    },
    {
      latlng: {
        latitude: 35.6762,
        longitude: 139.6503,
      },
      title: 'testing',
      description: 'testing here ',
    },
  ]);

  const getCurrentUserLocation = async () => {
    try {
      await requestLocationPermission();
      Geolocation.getCurrentPosition(pos => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          latitudeDelta: latitudeDelta,
          longitudeDelta: longitudeDelta,
        });
        setTest([
          {
            latlng: {
              latitude: pos.coords.latitude - 0.0021,
              longitude: pos.coords.longitude - 0.0101,
            },
            title: 'testing1',
            description: 'testing here1',
          },
          {
            latlng: {
              latitude: pos.coords.latitude - 0.002,
              longitude: pos.coords.longitude - 0.002,
            },
            title: 'testing2',
            description: 'testing here2',
          },
          {
            latlng: {
              latitude: pos.coords.latitude - 0.01,
              longitude: pos.coords.longitude - 0.01,
            },
            title: 'testing3',
            description: 'testing here3',
          },
        ]);
      });
      await trackUserNewLocation();
    } catch (error) {
      throw new Error(`${error} < error getting user location`);
    }
  };

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'ios') {
        Geolocation.requestAuthorization();
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Curb App',
            message: 'Curb App needs access to your location',
            buttonPositive: 'Okay!',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED)
          Alert.alert('Location permission denied');
      }
    } catch (err) {
      throw new Error(`cannot get permission ${err}`);
    }
  };

  const trackUserNewLocation = () => {
    watchID = Geolocation.watchPosition(position => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta,
      });
    });
  };

  useEffect(() => {
    getCurrentUserLocation();
    return function () {
      watchID != null && Geolocation.clearWatch(watchID);
    };
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        style={styles.map}
        region={position}
        showsUserLocation
        showsMyLocationButton
        followsUserLocation
        showsCompass
        scrollEnabled
        zoomEnabled
        pitchEnabled
        rotateEnabled>
        <DashboardMapMarkers markers={test} />
      </MapView>
    </View>
  );
};

export default DashboardMap;

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%'},
  map: {
    flex: 1,
  },
});

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
];
