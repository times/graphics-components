import React from 'react';
import { ScrollStory } from '../../lib/components';
import WithTextWrapper from '../../storybook/decorators/WithTextWrapper';

export default {
    title: 'Components/ScrollStory',
    component: ScrollStory,
    argTypes: {
      containerWidth: {
        control: { type: 'select' },
        options: ['bleed', 'edge-to-edge', 'inline'],
      },
      imgFit: {
        control: { type: 'select' },
        options: ['cover', 'contain', 'fill'],
      },
      borderRadius: {
        control: 'text',
      },
      fixedImgHeight: {
        control: 'text',
      },
      fontSize: {
        control: { type: 'select' },
        options: ['md', 'lg'],
      },
      videoLoop: {
        control: 'boolean',
      },
      videoAutoplay: {
        control: 'boolean',
      },
      videoControls: {
        control: 'boolean',
      },
      videoMute: {
        control: 'boolean',
      },
      data: { table: { disable: true } },
    },
    
    decorators: [
        (Story) => (
            <WithTextWrapper>
                <Story />
            </WithTextWrapper>
        ),
    ],
};

const sampleData = {
    containerWidth: 'default',
    imgFit: 'cover',
    fontSize: 'lg',
    videoAutoplay: true,
    videoControls: false,
    slides: [
        {
            media: 'https://picsum.photos/id/1015/1200/800',
            text: 'This is the first slide with a beautiful image.',
        },
        {
            media: 'https://www.youtube.com/watch?v=wDchsz8nmbo',
            text: 'This is the second slide with a YouTube video.',
        },
        {
            media: 'https://picsum.photos/id/1035/1200/800',
            text: 'This is the third slide with another image.',
        },
    ],
};

const Template = ({ data, ...rest }) => {
  const mergedData = { ...data, ...rest };
  return <ScrollStory data={mergedData} />;
};
export const Default = Template.bind({});
Default.args = {
    data: sampleData,
};
