import { Card, Image, Text  } from '@mantine/core';
import React from 'react';
import PropTypes from 'prop-types';

export const MantineCard = ({  description, padding, radius,heading, ...props }) =>  {
  return (
    <Card
      shadow="sm"
      padding={padding}
      radius={radius}
      {...props}
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
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
  /**
   * Card contents
   */
  heading: PropTypes.string.isRequired,
  description: PropTypes.string
};