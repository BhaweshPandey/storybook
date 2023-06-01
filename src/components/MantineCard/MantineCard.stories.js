import { MantineCard } from "./MantineCard"
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Mantine/Card',
  component: MantineCard,
  argTypes: {
    avatar: { control: { type: 'file', accept: '.png' } },
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
  description: 'Please click anywhere on this card to claim your reward, this is not a fraud, trust us',
  avatar: 'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
}
