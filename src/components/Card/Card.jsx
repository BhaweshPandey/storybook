import React from 'react';
import PropTypes from 'prop-types';
import './card.css';




/**
 * Primary UI component for user interaction
 */
export const Card = ({ primary, buttonBackgroundColor, CardSize, text, CardBackgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const Card = primary
    ? "storybook-Card--primary"
    : "storybook-Card--secondary";
  return (
    <div
      className={`storybook-Card storybook-Card--${CardSize} ${Card}`}
      style={{
        padding: "30px",
        background: `${CardBackgroundColor}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        textAlign: "center",
        gap: "20px",
      }}
      {...props}
    >
      <text>{text}</text>
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={{ background: buttonBackgroundColor }}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};

Card.defaultProps = {
  buttonBackgroundColor: null,
  primary: false,
  CardSize: 'medium',
  CardBackgroundColor: null,
  size: 'medium',
  onClick: undefined,
};

Card.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  buttonBackgroundColor: PropTypes.string,
  CardBackgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  CardSize: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Card contents
   */
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};