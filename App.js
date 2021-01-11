import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeFeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function HomeSettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}



function HomeScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeFeed" component={HomeFeedScreen} />
      <Tab.Screen name="HomeSettings" component={HomeSettingsScreen} />
    </Tab.Navigator>
  );
}

function DetailScreen({ navigation }) {
  const [state, setState] = useState(0)
  return (
    <View style={styles.container}>
      <Text>Open up Again to start working on your app!</Text>
      <Button title="Go to Details (push)" onPress={() => {
        navigation.push("Details")
      }}></Button>
      <Button title="Go to Details (navgate)" onPress={() => {
        navigation.navigate("Details")
      }}></Button>
      <Button
        title="Update the title"
        onPress={() => {
          setState(st => st + 1)
          navigation.setOptions({
            title: 'Custom Header' + state,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })
        }} />
      <StatusBar style="auto" />
    </View>
  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Details" component={DetailScreen} options={{ title: 'Overview' }} />
      </Stack.Navigator>
    </NavigationContainer>

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
