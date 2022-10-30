import Svg, {Circle, Path} from 'react-native-svg';

import PropTypes from 'prop-types';
import React from 'react';
import {colors} from '~/components';
import {fontSize} from '~utils';

const BasketSvg = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M16.5137 21.5H8.16592C5.09955 21.5 2.74715 20.3924 3.41534 15.9348L4.19338 9.89357C4.60528 7.66931 6.02404 6.81805 7.26889 6.81805H17.4474C18.7105 6.81805 20.0469 7.73339 20.5229 9.89357L21.3009 15.9348C21.8684 19.889 19.5801 21.5 16.5137 21.5Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.651 6.59839C16.651 4.21232 14.7167 2.27802 12.3306 2.27802V2.27802C11.1816 2.27315 10.078 2.72618 9.26381 3.53694C8.44963 4.34769 7.99193 5.44938 7.99194 6.59839H7.99194"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.2963 11.1018H15.2506"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.46566 11.1018H9.41989"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
//propTypes
BasketSvg.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

//defaultProps
BasketSvg.defaultProps = {
  width: fontSize(20),
  height: fontSize(20),
  color: colors.color2,
};
export default BasketSvg;
