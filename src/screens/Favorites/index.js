import {CustomText, colors, gs, FavList} from '~/components';
import {StyleSheet, View} from 'react-native';

import {calcWidth, fontSize} from '~/utils';
import {favoriteListSelector} from '~/modules/product/selector';

import {FavFreeSvg} from '~/assets';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const Favorites = props => {
  const insets = useSafeAreaInsets();
  const favList = useSelector(favoriteListSelector);
  const {Container, HeaderContainer} = styles;
  return (
    <View style={[Container]}>
      {favList.length > 0 ? (
        <>
          <View
            style={[HeaderContainer, {paddingTop: insets.top + fontSize(20)}]}>
            <CustomText f18 fSemibold children={`Favori Ürünleriniz`} />
          </View>
          <FavList data={favList} />
        </>
      ) : (
        <View
          style={{
            paddingTop: insets.top,
            backgroundColor: colors.color7,
            flex: 1,
          }}>
          <FavFreeSvg style={{...gs.asc}} />
          <CustomText style={{...gs.asc}} f24 children="Favori ürününüz yok." />
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
});

export {Favorites};
