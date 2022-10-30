import {CustomText, FavButton, colors, gs, sizes} from '~/components';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {calcHeight, calcWidth, fontSize, goBack, navigate} from '~/utils';

import {BasketSvg} from '~/assets';
import CompSwiper from 'react-native-swiper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {homeTabs} from '~/config';
import {useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ProductDetail = props => {
  const {params} = useRoute();
  const insets = useSafeAreaInsets();
  const {
    Container,
    HeaderContainer,
    CommonButton,
    FavButtonStyle,
    ImageStyle,
    DiscountView,
    ProductInfoView,
    BottomViewContainer,
    BottomView,
    AddBasketView,
    BottomLeftView,
    BottomLeftViewInView,
    PriceText,
    Pagination,
    ActiveDot,
    DotStyle,
  } = styles;
  const navigateBasket = () => {
    navigate(homeTabs.basket);
  };
  const [active, setActive] = useState(false);

  return (
    <View style={[Container, {paddingTop: insets.top}]}>
      <View style={[HeaderContainer]}>
        <TouchableOpacity onPress={goBack} style={CommonButton}>
          <MaterialCommunityIcons
            name={'chevron-left'}
            color={colors.color2}
            size={sizes.f30}
          />
        </TouchableOpacity>
        <View style={{...gs.fdr}}>
          <TouchableOpacity style={[CommonButton, {marginRight: 20}]}>
            <MaterialCommunityIcons
              name={'export-variant'}
              color={colors.color2}
              size={sizes.f30}
            />
          </TouchableOpacity>
          <TouchableOpacity style={CommonButton} onPress={navigateBasket}>
            <BasketSvg width={30} height={30} />
          </TouchableOpacity>
        </View>
      </View>
      <CompSwiper
        autoplay
        autoplayTimeout={6}
        dotColor={colors.color10}
        containerStyle={{flex: 0}}
        style={{height: calcHeight(60)}}
        paginationStyle={Pagination}
        activeDotColor={colors.color9}
        activeDotStyle={ActiveDot}
        dotStyle={DotStyle}>
        {params.item.PictureCarousel.map((item, i) => (
          <View style={{width: '100%'}} key={'item+' + i}>
            <Image style={ImageStyle} source={{uri: item}} />
          </View>
        ))}
      </CompSwiper>
      <View style={[DiscountView, {top: calcHeight(53) + insets.top}]}>
        <CustomText
          fSemibold
          f12
          style={{color: colors.color7}}
          children={`% ${params.item.DiscountRate}`}
        />
      </View>
      <View style={ProductInfoView}>
        <FavButton
          onPress={() => setActive(!active)}
          type={active}
          buttonStyle={FavButtonStyle}
        />
        <CustomText
          style={{width: calcWidth(80)}}
          f14
          fSemibold
          numberOfLines={1}
          children={params.item.ProductBrand}
        />
        <CustomText
          f14
          style={{width: '100%', marginTop: 5}}
          children={params.item.ModelName}
          numberOfLines={1}
        />
      </View>
      <View style={[BottomViewContainer, {paddingBottom: insets.bottom}]}>
        <View style={BottomView}>
          <View style={BottomLeftView}>
            <View style={BottomLeftViewInView}>
              <CustomText
                fSemibold
                f12
                style={{color: colors.color7}}
                children={`% ${params.item.DiscountRate}`}
              />
            </View>
            <View style={{...gs.jcc, paddingLeft: 10}}>
              <CustomText
                style={PriceText}
                f10
                children={`${params.item.StickerPrice} ${params.item.PriceCur}`}
                numberOfLines={1}
              />
              <CustomText
                f12
                style={{
                  color: colors.mainColor,
                }}
                fSemibold
                children={`${params.item.DiscountPrice} ${params.item.PriceCur}`}
                numberOfLines={1}
              />
            </View>
          </View>
          <TouchableOpacity style={AddBasketView}>
            <CustomText
              f14
              fSemibold
              children="Sepete Ekle"
              style={{color: colors.color7}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: colors.color16},
  HeaderContainer: {
    ...gs.fdr,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
    ...gs.jcsb,
    ...gs.posAbs,
    top: calcHeight(7),
    zIndex: 9999,
    width: calcWidth(100),
  },
  CommonButton: {
    ...gs.fdr,
    ...gs.jcc,
    width: fontSize(34),
    height: fontSize(34),
    ...gs.jccaic,
  },
  ActiveDot: {
    width: fontSize(15),
    height: fontSize(15),
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.color7,
  },
  DotStyle: {
    width: fontSize(10),
    height: fontSize(10),
    backgroundColor: colors.color2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.color7,
  },
  ImageStyle: {width: '100%', height: calcHeight(60)},
  Pagination: {
    top: calcHeight(54),
    width: calcWidth(100),
    height: calcHeight(3),
    ...gs.aic,
  },
  FavButtonStyle: {...gs.posAbs, right: 20, top: 20, zIndex: 9999},
  DiscountView: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    ...gs.posAbs,
    backgroundColor: colors.color20,
  },
  ProductInfoView: {padding: 20, backgroundColor: colors.color7, ...gs.shadow5},
  BottomViewContainer: {
    backgroundColor: colors.color7,
    ...gs.posAbs,
    bottom: 0,
    width: calcWidth(100),
  },
  BottomView: {
    ...gs.fdr,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.color7,
  },
  BottomLeftView: {flex: 1, ...gs.fdr},
  BottomLeftViewInView: {
    backgroundColor: colors.color20,
    ...gs.jcc,
    ...gs.asc,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  AddBasketView: {
    height: fontSize(45),
    backgroundColor: colors.mainColor,
    ...gs.jccaic,
    paddingHorizontal: fontSize(30),
    borderRadius: 3,
    ...gs.fdr,
  },
  PriceText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: colors.color13,
  },
});

export {ProductDetail};
// exports Example Screen
// export * from './Example';
