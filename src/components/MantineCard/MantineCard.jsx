import { Card, Image, Text  } from '@mantine/core';
import React from 'react';
import PropTypes from 'prop-types';

export const MantineCard = ({  description,avatar, padding, radius,heading, ...props }) =>  {
  return (
    <Card
      shadow="sm"
      padding={padding}
      radius={radius}
      {...props}
    >
      <Card.Section>
        <Image
          src={avatar}
          height={160}
          alt="No way!"
        />
      </Card.Section>

      <Text weight={500} padding="lg" mt="md">
        {heading}
      </Text>

      <Text mt="xs" color="dimmed" padding="sm">
        {description}
      </Text>
    </Card>
  );
}

Card.defaultProps = {
  padding: 'md',
  radius: 'sm',
};

Card.propTypes = {
  padding:PropTypes.string ,
  radius : PropTypes.string,
  avatar : PropTypes.string,
  /**
   * Card contents
   */
  heading: PropTypes.string.isRequired,
  description: PropTypes.string
};