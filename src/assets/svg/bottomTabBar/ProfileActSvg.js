import Svg, {Path} from 'react-native-svg';

import PropTypes from 'prop-types';
import React from 'react';
import {colors} from '~/components';
import {fontSize} from '~utils';

const ProfileActSvg = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.0004 11.4304C14.6045 11.4304 16.7155 9.3193 16.7155 6.71518C16.7155 4.11107 14.6045 2 12.0004 2C9.3963 2 7.28516 4.11107 7.28516 6.71518C7.28516 9.3193 9.3963 11.4304 12.0004 11.4304Z"
        fill={color}
      />
      <Path
        d="M17.4797 23.0285C19.2638 23.0285 20.5383 21.1169 19.7736 19.4603C18.3718 16.5292 15.4408 14.4902 12 14.4902C8.55921 14.4902 5.50075 16.5292 4.22638 19.4603C3.46176 21.1169 4.73604 23.0285 6.52016 23.0285H17.4797Z"
        fill={color}
      />
    </Svg>
  );
};
//propTypes
ProfileActSvg.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

//defaultProps
ProfileActSvg.defaultProps = {
  width: fontSize(20),
  height: fontSize(20),
  color: colors.mainColor,
};
export default ProfileActSvg;
