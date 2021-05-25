import React, {useState} from 'react';
import {Text, View} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo/build/removed.web';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false);

  if (!isFontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
    />
  }

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
