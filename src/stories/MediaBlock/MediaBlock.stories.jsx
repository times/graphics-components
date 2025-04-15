import React from 'react';
import { MediaBlock } from '../../lib/components';
import WithTextWrapper from '../../storybook/decorators/WithTextWrapper';

export default {
    title: 'Components/MediaBlock',
    component: MediaBlock,
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
    media: 'https://picsum.photos/1200/800',
    containerWidth: 'inline', // 'inline' | 'bleed' | 'edge-to-edge'
    fixedImgHeight: '400px',
    imgBorderRadius: '0',
    videoAutoplay: 'true',
    videoLoop: 'true',
    videoMute: 'true',
    videoControls: 'true',
    wrapper: 'true',
    text: 'Chris Reynolds Gordon at one of his party venues in London',
    altText: 'Example image',
    note: 'GARETH PHILIPS',
};

const Template = ({ data, ...rest }) => {
    const mergedData = { ...data, ...rest };
    return <MediaBlock data={mergedData} />;
};
export const Default = Template.bind({});
Default.args = {
    data: sampleData,
};

export const YouTube = Template.bind({});
YouTube.args = {
    data: {
        ...sampleData,
        media: 'https://www.youtube.com/watch?v=wDchsz8nmbo',
        text: 'YouTube video example',
    },
};

export const Vimeo = Template.bind({});
Vimeo.args = {
    data: {
        ...sampleData,
        media: 'https://vimeo.com/76979871',
        text: 'Vimeo video example',
    },
};

export const MP4 = Template.bind({});
MP4.args = {
    data: {
        ...sampleData,
        media: 'https://www.barrons.com/asset/barrons/videos/asset-uploader-a9e12c89-5df7-433d-98aa-868c701b078d/C0574.mp4',
        text: 'MP4 video example with video.js',
    },
};

export const Image = Template.bind({});
Image.args = {
    data: {
        ...sampleData,
        media: 'https://picsum.photos/1200/800',
        text: 'Static image example',
    },
};

export const WithHeader = Template.bind({});
WithHeader.args = {
    data: {
        ...sampleData,
        media: 'https://picsum.photos/1200/800',
        text: 'Static image example',
        hed: 'Header text',
        dek: 'Dek text',
    },
};

export const WithCaption = Template.bind({});
WithCaption.args = {
    data: {
        ...sampleData,
        media: 'https://picsum.photos/1200/800',
        text: 'Static image example',
        caption: 'Image caption',
    },
};


