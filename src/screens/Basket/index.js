import {BasketList, CustomText, colors, gs, sizes} from '~/components';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  basketItemsSelector,
  discountPriceSelector,
} from '~/modules/basket/selector';
import {calcWidth, fontSize} from '~/utils';

import {BasketFreeSvg} from '~/assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import useActions from '~/hooks/useActions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const Basket = props => {
  const insets = useSafeAreaInsets();
  const Actions = useActions();
  const basketItems = useSelector(basketItemsSelector);
  const discountPrice = useSelector(discountPriceSelector);
  const {
    Container,
    HeaderContainer,
    BottomView,
    ConfirmBasketView,
    BottomLeftView,
    BottomLeftViewInView,
  } = styles;
  const handleConfirmToBasket = () => {
    Actions.clearBasketAction();
  };
  return (
    <View style={[Container]}>
      {basketItems.length > 0 ? (
        <>
          <View
            style={[HeaderContainer, {paddingTop: insets.top + fontSize(20)}]}>
            <CustomText
              f18
              fSemibold
              children={`Sepet (${basketItems.length} Ürün)`}
            />
          </View>
          <BasketList
            flatStyle={{marginBottom: fontSize(45) + 20}}
            data={basketItems}
          />
          <View style={BottomView}>
            <View style={BottomLeftView}>
              <View style={BottomLeftViewInView}>
                <MaterialCommunityIcons
                  name={'chevron-down'}
                  color={colors.mainColor}
                  size={sizes.f20}
                />
              </View>
              <View style={{paddingLeft: 10}}>
                <CustomText
                  f14
                  fSemibold
                  children={`Toplam`}
                  numberOfLines={1}
                />
                <CustomText
                  f14
                  style={{
                    color: colors.mainColor,
                  }}
                  fSemibold
                  children={`${discountPrice} TL`}
                  numberOfLines={1}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={handleConfirmToBasket}
              style={ConfirmBasketView}>
              <CustomText
                f14
                fSemibold
                children="Sepeti Onayla"
                style={{color: colors.color7}}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View
          style={{
            paddingTop: insets.top,
            backgroundColor: colors.color7,
            flex: 1,
          }}>
          <BasketFreeSvg style={{...gs.asc}} />
          <CustomText
            style={{...gs.asc}}
            f24
            children="Sepetinde hiç ürün yok."
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: colors.color16},
  HeaderContainer: {
    paddingBottom: fontSize(50),
    width: calcWidth(100),
    backgroundColor: colors.color7,
    ...gs.aic,
  },

  BottomView: {
    ...gs.fdr,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.color7,
    ...gs.posAbs,
    bottom: 0,
    zIndex: 999,
  },
  BottomLeftView: {flex: 1, ...gs.fdr},
  BottomLeftViewInView: {
    paddingTop: 3,
    backgroundColor: colors.color7,
  },
  ConfirmBasketView: {
    height: fontSize(45),
    backgroundColor: colors.mainColor,
    ...gs.jccaic,
    paddingHorizontal: fontSize(65),
    borderRadius: 3,
    ...gs.fdr,
  },
});

export {Basket};
