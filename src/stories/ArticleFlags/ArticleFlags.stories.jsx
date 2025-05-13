import React from 'react';
import ArticleFlags from '../../lib/components/ArticleFlags';
import WithWrapper from '../../storybook/decorators/WithWrapper';

export default {
  title: 'Furniture Components/ArticleFlags',
  component: ArticleFlags,
  argTypes: {
    withContainer: {
      control: 'boolean',
    },
    longRead: {
      control: 'boolean',
    },
    flags: {
      control: 'object',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/board/8hNp1148i1vb0LoDO25UhR/FigJam-basics?t=VbbeMpaBY9EPG2go-0',
    },
  },
  decorators: [
    (Story) => (
      <WithWrapper>
        <Story />
      </WithWrapper>
    ),
  ],
};

const Template = ({ flags, longRead, withContainer }) => (
  <ArticleFlags
    flags={flags}
    longRead={longRead}
    withContainer={withContainer}
  />
);

export const Default = Template.bind({});
Default.args = {
  withContainer: true,
  longRead: true,
  flags: [
    {
      type: 'LIVE',
      expiryTime: '2099-01-01T00:00:00Z',
      updatedTime: '2025-04-18T06:00:00Z',
    },
    { type: 'BREAKING', expiryTime: '2099-01-01T00:00:00Z' },
    { type: 'EXCLUSIVE' },
    { type: 'UPDATED', expiryTime: '2099-01-01T00:00:00Z' },
    { type: 'SPONSORED', expiryTime: '2099-01-01T00:00:00Z' },
    { type: 'NEW', expiryTime: '2099-01-01T00:00:00Z' },
  ],
};
