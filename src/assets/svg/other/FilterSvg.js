import {PropTypes, colors} from '~/components';
import Svg, {Path} from 'react-native-svg';

import React from 'react';
import {fontSize} from '~/utils';

const FilterSvg = ({width, height, style, colors}) => (
  <Svg
    width={width}
    height={height}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M22.6 3V2.9H22.5H1.5H1.4V3V5.50445V5.54732L1.43106 5.57688L8.9 12.686V21V21.1H9H15H15.1V21V12.686L22.5689 5.57688L22.6 5.54732V5.50445V3ZM10.6 12V11.9571L10.5689 11.9276L3.1 4.81845V4.6H20.9V4.81845L13.4311 11.9276L13.4 11.9571V12V19.4H10.6V12Z"
      fill={colors}
      stroke="black"
      strokeWidth="0.2"
    />
  </Svg>
);
//propTypes
FilterSvg.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
//defaultProps
FilterSvg.defaultProps = {
  width: fontSize(24),
  height: fontSize(24),
  colors: colors.color2,
};
export default FilterSvg;
