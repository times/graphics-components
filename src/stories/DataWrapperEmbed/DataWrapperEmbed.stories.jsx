import React from 'react';
import { DataWrapperEmbed } from '../../lib/components';
import WithTextWrapper from '../../storybook/decorators/WithTextWrapper';

export default {
  title: 'Components/DatawrapperEmbed',
  component: DataWrapperEmbed,
  argTypes: {
    chartId: { control: 'text' },
    version: { control: 'text' },
    title: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <WithTextWrapper>
        <Story />
      </WithTextWrapper>
    ),
  ],
};

const Template = (args) => <DataWrapperEmbed {...args} />;

export const Default = Template.bind({});
Default.args = {
  chartId: 'csmgb',
  version: '1',
  title: 'Sample chart',
};
