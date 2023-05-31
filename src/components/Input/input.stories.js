import { Input } from '@mantine/core';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Mantine/Input',
  component: Input,
  argTypes: {
    placeholder: {
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

const Template = args => <Input  {...args} />

export const InputButton = Template.bind({})

InputButton.args = {
  placeholder: 'Input ',
  disabled: false,
  error: false,
  size: 'xs',
  radius: 'xs'
}
