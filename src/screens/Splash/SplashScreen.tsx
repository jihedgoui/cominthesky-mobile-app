import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {COLORS} from '../../theme/colors';

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({navigation}: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>
        IA-CONNECTED DRONE
      </Text>

      <ActivityIndicator
        size="large"
        color={COLORS.accent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 250,
    height: 250,
    marginBottom: 24,
  },

  subtitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 2,
    marginBottom: 30,
  },
});