import React from 'react';
import {View, Alert, StyleSheet} from 'react-native';

import CustomButton from '../../components/common/CustomButton';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <CustomButton
        title="Sign In"
        onPress={() => Alert.alert('Cominthesky')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});