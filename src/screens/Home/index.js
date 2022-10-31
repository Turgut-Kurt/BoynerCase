import {StyleSheet, View, Image} from 'react-native';

import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '~/components';
import {Boyner_Logo} from '~/assets';
import {calcWidth} from '~/utils';

const Home = props => {
  const insets = useSafeAreaInsets();
  const {Container, ImageStyle} = styles;
  return (
    <View style={[Container, {paddingTop: insets.top}]}>
      <Image style={ImageStyle} source={Boyner_Logo} />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {backgroundColor: colors.color7, flex: 1},
  ImageStyle: {width: calcWidth(100), height: calcWidth(45)},
});
export {Home};
