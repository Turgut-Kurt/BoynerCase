import {FavCard, FavCardActSvg, FavSvg} from '~/assets';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors, gs} from './config';

import React from 'react';
import {fontSize} from '~/utils';

const FavButton = props => {
  const {type, buttonStyle} = props;
  const {DefaultButtonStyle} = styles;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[DefaultButtonStyle, buttonStyle]}>
      {type ? <FavCardActSvg /> : <FavCard />}
      {/* <FavSvg colors={type ? colors.mainColor : colors.color2} /> */}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  DefaultButtonStyle: {
    ...gs.asc,
    height: fontSize(22),
    width: fontSize(22),
    backgroundColor: colors.color7,
    ...gs.jccaic,
    borderRadius: 25,
  },
});

export {FavButton};
