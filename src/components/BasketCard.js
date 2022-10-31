import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {calcHeight, calcWidth, fontSize} from '~/utils';
import {colors, fonts, gs, sizes, weights} from './config';

import {CheckBox} from 'react-native-elements/dist';
import {CustomText} from './CustomText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useActions from '~/hooks/useActions';

const BasketCard = ({item, index}) => {
  const [checked, setChecked] = useState(false);
  const Actions = useActions();
  const {
    Container,
    CloseButton,
    ImageStyle,
    RightView,
    CommonText,
    InfoView,
    PriceText,
    CheckBoxStyle,
    TextStyle,
  } = styles;
  return (
    <View style={Container}>
      <TouchableOpacity
        onPress={() => Actions.removeToBasketAction(index)}
        style={CloseButton}>
        <MaterialCommunityIcons
          name={'close'}
          color={colors.color2}
          size={sizes.f22}
        />
      </TouchableOpacity>
      <Image style={ImageStyle} source={{uri: item.PictureUrl}} />
      <View style={RightView}>
        <CustomText
          fSemibold
          f14
          style={{width: calcWidth(60)}}
          children={item.ModelName}
          numberOfLines={2}
        />
        <CustomText
          f12
          style={CommonText}
          children={`${item.FirstLevelProperties[0].Name} : ${item.FirstLevelProperties[0].Tooltip}`}
          numberOfLines={1}
        />
        <CustomText
          f12
          style={CommonText}
          children={`Beden : M`}
          numberOfLines={1}
        />
        <View style={InfoView}>
          <CustomText f12 children={'adet'} />
          <View>
            <CustomText
              style={PriceText}
              f12
              children={`${item.StickerPrice} ${item.PriceCur}`}
              numberOfLines={1}
            />
            <CustomText
              f16
              fSemibold
              children={`${item.DiscountPrice} ${item.PriceCur}`}
              numberOfLines={1}
            />
          </View>
        </View>
        <CheckBox
          center
          title={`Hediye Paketi İstiyorum`}
          onPress={() => setChecked(!checked)}
          checked={checked}
          checkedIcon="checkbox-marked"
          uncheckedIcon="crop-square"
          iconType={'material-community'}
          checkedColor={colors.mainColor}
          uncheckedColor={colors.color9}
          containerStyle={CheckBoxStyle}
          textStyle={[TextStyle]}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    width: calcWidth(100),
    ...gs.fdr,
    backgroundColor: colors.color7,
    padding: 20,
    ...gs.shadow5,
  },
  CloseButton: {
    ...gs.jccaic,
    ...gs.posAbs,
    top: 20,
    right: 20,
    zIndex: 999,
  },
  RightView: {paddingLeft: 20, width: calcWidth(80) - 40},
  CommonText: {
    color: colors.color11,
    width: calcWidth(60),
    marginTop: 3,
  },
  InfoView: {...gs.fdr, ...gs.jcsb, ...gs.aic},
  PriceText: {
    marginLeft: 10,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: colors.color13,
  },
  ImageStyle: {width: calcWidth(20), height: '100%'},
  CheckBoxStyle: {
    // width: calcWidth(100) - 40,
    borderWidth: 1,
    borderWidth: 0,
    paddingLeft: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    marginLeft: -3,
    marginRight: 0,
    ...gs.aifs,
    backgroundColor: colors.color7,
  },
  TextStyle: {
    color: colors.color9,
    fontSize: sizes.f12,
    ...fonts.Semibold,
    fontWeight: weights.wn,
  },
});

export {BasketCard};
