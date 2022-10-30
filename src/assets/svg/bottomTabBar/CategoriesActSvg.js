import Svg, {Path} from 'react-native-svg';

import PropTypes from 'prop-types';
import React from 'react';
import {colors} from '~/components';
import {fontSize} from '~utils';

const CategoriesActSvg = ({width, height, color}) => {
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
        d="M2 10.6699C2 5.88166 5.84034 2 10.5776 2C12.8526 2 15.0343 2.91344 16.6429 4.53936C18.2516 6.16529 19.1553 8.37052 19.1553 10.6699C19.1553 15.4582 15.3149 19.3399 10.5776 19.3399C5.84034 19.3399 2 15.4582 2 10.6699ZM19.0134 17.6543L21.568 19.7164H21.6124C22.1292 20.2388 22.1292 21.0858 21.6124 21.6082C21.0955 22.1306 20.2576 22.1306 19.7407 21.6082L17.6207 19.1785C17.4203 18.9766 17.3076 18.7024 17.3076 18.4164C17.3076 18.1304 17.4203 17.8562 17.6207 17.6543C18.0072 17.2704 18.6268 17.2704 19.0134 17.6543Z"
        fill={color}
      />
    </Svg>
  );
};
//propTypes
CategoriesActSvg.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

//defaultProps
CategoriesActSvg.defaultProps = {
  width: fontSize(20),
  height: fontSize(20),
  color: colors.mainColor,
};
export default CategoriesActSvg;
