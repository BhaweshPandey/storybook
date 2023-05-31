import { MantineCard } from "./MantineCard"
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Mantine/Card',
  component: MantineCard,
  argTypes: {
    padding: {
      control: {
        type: 'select',
        labels: {
          first: 'xs',
          second: 'sm',
          third: 'md',
          fourth: 'lg',
          fifth: 'xl'
        },
      },
      options: ['first', 'second', 'third', 'fourth', 'fifth'],
      mapping: {
        first: 'xs',
        second: 'sm',
        third: 'md',
        fourth: 'lg',
        fifth: 'xl'
      }
    },
    radius: {
      control: {
        type: 'select',
        labels: {
          first: 'xs',
          second: 'sm',
          third: 'md',
          fourth: 'lg',
          fifth: 'xl'
        },
      },
      options: ['first', 'second', 'third', 'fourth', 'fifth'],
      mapping: {
        first: 'xs',
        second: 'sm',
        third: 'md',
        fourth: 'lg',
        fifth: 'xl'
      }
    },
  }
};

const Template = args => <MantineCard  {...args} />

export const Card = Template.bind({})

Card.args = {
  padding: 'xs',
  radius: 'xs',
  heading: 'You&apos;ve won a million dollars in cash!',
  description: 'Please click anywhere on this card to claim your reward, this is not a fraud, trust us'
}
