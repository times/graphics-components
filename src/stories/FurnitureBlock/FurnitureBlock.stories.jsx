import React from 'react';
import { FurnitureBlock } from '../../lib/components';
import WithWrapper from '../../storybook/decorators/WithWrapper';

export default {
    title: 'Furniture Components/FurnitureBlock',
    component: FurnitureBlock,
    decorators: [
        (Story) => (
            <WithWrapper>
                <Story />
            </WithWrapper>
        ),
    ],
};

const Template = (args) => <FurnitureBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
    blocks: [
        {
            type: 'headline',
            text: 'Exclusive interview: Geraint Thomas on winning the Tour de France',
        },
        {
            type: 'description',
            text: 'After years of helping others, he finally made it. A conversation from Cardiff.',
        },
        {
            type: 'flags',
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
        },
        {
            type: 'media',
            data: {
                media: 'https://picsum.photos/1200/800',
                containerWidth: 'inline',
                fixedImgHeight: '400px',
                imgBorderRadius: '0',
                videoAutoplay: 'true',
                videoLoop: 'true',
                videoMute: 'true',
                videoControls: 'true',
                wrapper: 'true',
                text: 'Chris Reynolds Gordon at one of his party venues in London',
                altText: 'Example image',
                caption: 'Media caption',
            },
        },
        {
            type: 'text',
            text: `As I follow Chris Reynolds Gordon down the corridor of a £27 million house,
        nestled between embassies, we pass an ornate room full of mattresses.
        This is the habitat of a man who hosts “elite” sex parties in London’s wealthiest postcode.`,
        },
    ],
};
