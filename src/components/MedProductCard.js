import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {calcWidth, fontSize, navigate} from '~/utils';
import {colors, gs} from './config';

import {CustomText} from './CustomText';
import {FavButton} from './FavButton';
import {commonStack} from '~/config';
import useActions from '~/hooks/useActions';
import {useSelector} from 'react-redux';
import {favoriteIdListSelector} from '~/modules/product/selector';

const MedProductCard = ({item}) => {
  const {DefaultButtonStyle, ImageStyle, ColorView, FavButtonStyle} = styles;
  // const [active, setActive] = useState(false);
  const handleProductDetail = () => {
    navigate(commonStack.productDetail, {item: item});
  };
  const favIdList = useSelector(favoriteIdListSelector);
  console.log('favIdList', favIdList);
  let active = favIdList.find(x => x === item.ListingId);
  const Actions = useActions();
  return (
    <TouchableOpacity onPress={handleProductDetail} style={DefaultButtonStyle}>
      <View>
        <Image
          source={{
            uri: item.PictureUrl,
          }}
          style={ImageStyle}
        />
        {item.HasColour && (
          <View style={ColorView}>
            <CustomText
              f12
              fSemibold
              children={`${item.FirstLevelProperties.length} Renk`}
            />
          </View>
        )}
      </View>

      <View style={{}}>
        <FavButton
          onPress={() => Actions.addFavoriteAction(item)}
          type={active}
          buttonStyle={FavButtonStyle}
        />
        <CustomText
          style={{marginTop: 1, width: calcWidth(35)}}
          f14
          children={item.ProductBrand}
          numberOfLines={1}
        />
        <CustomText
          style={{marginTop: 1, width: calcWidth(40)}}
          f12
          children={item.ModelName}
          numberOfLines={1}
        />
        <View style={{marginTop: 10, ...gs.fdr, ...gs.aic}}>
          <CustomText
            f16
            fSemibold
            children={`${item.DiscountPrice} ${item.PriceCur}`}
            numberOfLines={1}
          />
          <CustomText
            style={{
              marginLeft: 10,
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
              color: colors.color13,
            }}
            f12
            children={`${item.StickerPrice} ${item.PriceCur}`}
            numberOfLines={1}
          />
        </View>
        {item.IsCargoFree ? (
          <CustomText
            style={{
              marginTop: 5,
              color: colors.color19,
            }}
            f14
            children={'Kargo Bedava'}
            numberOfLines={1}
          />
        ) : item.IsQuickCargo ? (
          <CustomText
            style={{
              marginTop: 5,
              color: colors.color8,
            }}
            f14
            children={'Hızlı Gönderi'}
            numberOfLines={1}
          />
        ) : (
          <CustomText
            style={{
              marginTop: 5,
              color: colors.color7,
            }}
            f14
            children={''}
            numberOfLines={1}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  DefaultButtonStyle: {
    width: (calcWidth(100) - 60) / 2,
    backgroundColor: colors.color7,
    borderRadius: 10,
    paddingBottom: 10,
  },
  ImageStyle: {width: '100%', height: fontSize(220), borderRadius: 3},
  ColorView: {
    backgroundColor: colors.color7,
    ...gs.posAbs,
    zIndex: 999,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 25,
    right: 10,
    bottom: 10,
  },
  FavButtonStyle: {...gs.posAbs, right: 0, top: 0, zIndex: 9999},
});

export {MedProductCard};
