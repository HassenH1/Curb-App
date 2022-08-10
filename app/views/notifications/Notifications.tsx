import {ScrollView} from 'react-native';
import React from 'react';
import Text from '../../components/base/input/BaseText/BaseText';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Notifications = () => {
  const notifications = [
    {
      title: 'Test',
      message: 'Fake notificaitons here',
    },
    {
      title: 'Test',
      message: 'Fake notificaitons here',
    },
    {
      title: 'Test',
      message: 'Fake notificaitons here',
    },
    {
      title: 'Test',
      message: 'Fake notificaitons here',
    },
    {
      title: 'Test',
      message: 'Fake notificaitons here',
    },
    {
      title: 'Test',
      message: 'Fake notificaitons here',
    },
    {
      title: 'Test',
      message: 'Fake notificaitons here',
    },
    {
      title: 'Test',
      message: 'Fake notificaitons here',
    },
    {
      title: 'Test',
      message: 'Fake notificaitons here',
    },
    {
      title: 'Test',
      message: 'Fake notificaitons here',
    },
    {
      title: 'Test',
      message: 'Fake notificaitons here',
    },
    {
      title: 'Test',
      message: 'Fake notificaitons here',
    },
    {
      title: 'Test',
      message: 'Fake notificaitons here',
    },
  ];
  const displayNotifications = notifications.map((notif, index) => (
    <TouchableOpacity
      style={{borderWidth: 0.6, borderColor: 'black', padding: 10}}
      key={index}>
      <Text>
        {notif.title} {index}
      </Text>
      <Text>{notif.message}</Text>
    </TouchableOpacity>
  ));
  return <ScrollView>{displayNotifications}</ScrollView>;
};

export default Notifications;
