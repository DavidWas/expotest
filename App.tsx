import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import { AndroidNotificationPriority } from 'expo-notifications';

import NotificationView from "./src/views/NotificationView";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    priority: AndroidNotificationPriority.HIGH
  }),
});

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NotificationView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
