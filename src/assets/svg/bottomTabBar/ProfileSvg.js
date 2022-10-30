import Svg, {Path} from 'react-native-svg';

import PropTypes from 'prop-types';
import React from 'react';
import {colors} from '~/components';
import {fontSize} from '~utils';

const ProfileSvg = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.0003 10.4303C14.6044 10.4303 16.7155 8.31927 16.7155 5.71516C16.7155 3.11105 14.6044 1 12.0003 1C9.39618 1 7.28516 3.11105 7.28516 5.71516C7.28516 8.31927 9.39618 10.4303 12.0003 10.4303Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.4798 22.1535C19.2639 22.1535 20.5382 20.2419 19.7736 18.5853C18.3718 15.6542 15.4408 13.6152 12 13.6152C8.55919 13.6152 5.50074 15.6542 4.22637 18.5853C3.46175 20.2419 4.73611 22.1535 6.52022 22.1535H17.4798Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
//propTypes
ProfileSvg.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

//defaultProps
ProfileSvg.defaultProps = {
  width: fontSize(20),
  height: fontSize(20),
  color: colors.color2,
};
export default ProfileSvg;
