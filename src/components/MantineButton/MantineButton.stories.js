import { Button } from '@mantine/core';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Mantine/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'text'
    },
    children: {
      control: 'text'
    },
    onClick: {
      action: 'click'
    },
    size: {
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
    variant: {
      control: {
        type: 'select',
        labels: {
          first: 'Filled',
          second: 'Light',
          third: 'Outline',
          fourth: 'Default',
          fifth: 'Subtle'
        },
      },
      options: ['first', 'second', 'third', 'fourth', 'fifth'],
      mapping: {
        first: 'filled',
        second: 'light',
        third: 'outline',
        fourth: 'default',
        fifth: 'subtle'
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

const Template = args => <Button {...args} />

export const SmallButton = Template.bind({})

SmallButton.args = {
  children: 'Button',
  disabled: false,
  compact: false,
  uppercase: false,
  size: 'sm',
  variant: 'filled',
  radius: 'xs'
}


export const LargeButton = Template.bind({})

LargeButton.args = {
  disabled: false,
  compact: false,
  uppercase: false,
  children: 'Button',
  size: 'lg'
}