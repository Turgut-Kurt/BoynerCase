import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Favorites = props => {
  const insets = useSafeAreaInsets();
  const {Container} = styles;
  return (
    <View style={[Container, {paddingTop: insets.top}]}>
      <Text>Favorites</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {},
});

export {Favorites};
// exports Example Screen
// export * from './Example';
