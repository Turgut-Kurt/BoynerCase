import {PropTypes, colors} from '~/components';
import Svg, {Path} from 'react-native-svg';

import React from 'react';
import {fontSize} from '~/utils';

const FavCardSvg = ({width, height, color}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M15.225 7.05003C15.225 11.025 11.325 13.65 9.52505 14.475C9.37505 14.55 9.15005 14.625 9.07505 14.7C8.92505 14.625 8.77505 14.55 8.62505 14.475C6.82505 13.65 2.92505 11.025 2.92505 7.05003C2.92505 5.02503 4.42505 3.45003 6.22505 3.45003C7.42505 3.45003 8.47505 4.12503 9.07505 5.25003C9.67505 4.20003 10.725 3.45003 11.925 3.45003C13.725 3.37503 15.225 5.02503 15.225 7.05003Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
//propTypes
FavCardSvg.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
//defaultProps
FavCardSvg.defaultProps = {
  width: fontSize(22),
  height: fontSize(22),
  color: colors.color2,
};
export default FavCardSvg;
