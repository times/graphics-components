import React from 'react';
import { ImageSlider } from '../../lib/components';
import WithTextWrapper from '../../storybook/decorators/WithTextWrapper';

export default {
  title: 'Components/ImageSlider',
  component: ImageSlider,
  argTypes: {
    beforeImage: { control: 'text' },
    afterImage: { control: 'text' },
    beforeLabel: { control: 'text' },
    afterLabel: { control: 'text' },
    photoCredits: { control: 'object' },
  },
  decorators: [
    (Story) => (
      <WithTextWrapper>
        <Story />
      </WithTextWrapper>
    ),
  ],
};

const Template = (args) => <ImageSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  beforeImage: "https://placehold.co/800x450?text=Before",
  afterImage: "https://placehold.co/800x450?text=After",
  beforeLabel: "Before Renovation",
  afterLabel: "After Renovation",
  photoCredits: {
    before: "NASA (2020)",
    after: "NOAA (2024)"
  }
};