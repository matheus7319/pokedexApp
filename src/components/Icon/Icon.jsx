import React from "react";
import Icons from "../../assets/icons/icons.svg"; // Path to your icons.svg
import PropTypes from 'prop-types';

const Icon = ({ name, size, color }) => (
  <div className={`icon-holder ${color ? color : ''}`}>
    <svg className={`icon icon-${name}`} fill="currentColor" width={size} height={size}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  </div>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number
};

export default Icon;