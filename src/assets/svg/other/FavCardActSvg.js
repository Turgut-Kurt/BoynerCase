import {PropTypes, colors} from '~/components';
import Svg, {Path} from 'react-native-svg';

import React from 'react';
import {fontSize} from '~/utils';

const FavCardActSvg = ({width, height, style, colors}) => (
  <Svg
    width={width}
    height={height}
    style={style}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.61188 16.7804C8.61213 16.7806 8.61236 16.7807 9 16.0312C9.38764 16.7807 9.38787 16.7806 9.38814 16.7804C9.145 16.9062 8.855 16.9062 8.61188 16.7804ZM8.61188 16.7804L9 16.0312L9.38814 16.7804L9.39072 16.779L9.39678 16.7759L9.41757 16.765C9.43523 16.7556 9.46042 16.7422 9.49264 16.7248C9.55705 16.69 9.64964 16.6392 9.76635 16.5732C9.99968 16.441 10.3301 16.2473 10.7253 15.9974C11.5139 15.4988 12.5694 14.7712 13.629 13.8579C15.6998 12.0726 18 9.3941 18 6.1875C18 3.19026 15.6535 1.125 13.2188 1.125C11.4779 1.125 9.953 2.0267 9 3.39744C8.047 2.0267 6.52203 1.125 4.78125 1.125C2.34651 1.125 0 3.19026 0 6.1875C0 9.3941 2.30016 12.0726 4.37096 13.8579C5.43057 14.7712 6.48605 15.4988 7.27472 15.9974C7.66992 16.2473 8.00032 16.441 8.23365 16.5732C8.35036 16.6392 8.44294 16.69 8.50736 16.7248C8.53958 16.7422 8.56477 16.7556 8.58243 16.765L8.60322 16.7759L8.60928 16.779L8.61188 16.7804Z"
      fill={colors}
    />
  </Svg>
);
//propTypes
FavCardActSvg.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
//defaultProps
FavCardActSvg.defaultProps = {
  width: fontSize(18),
  height: fontSize(18),
  colors: colors.color2,
};
export default FavCardActSvg;
