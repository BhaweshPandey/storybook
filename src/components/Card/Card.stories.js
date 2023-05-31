import { Card } from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    buttonBackgroundColor: { control: 'color' },
    CardBackgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryCard = {
  args: {
    primary: true,
    label: 'Button',
    text: 'Card'
  },
};

export const SecondaryCard = {
  args: {
    label: 'Button',
    text: 'Card'
  },
};

export const Large = {
  args: {
    CardSize: 'large',
    label: 'Button',
    text: 'Card'
  },
};

export const Small = {
  args: {
    CardSize: 'small',
    label: 'Button',
    text: 'Card'
  },
};